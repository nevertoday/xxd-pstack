// 构建后处理（astro build 之后、search-sections.mjs 之前），只动另外 8 种语言的目录，中文、英文不碰：
// 1. 还不是全站的语言（src/data/nav.js 的 LANGS 里没有 full: true）：dist/<语言>/ 只留首页和新手入门。
//    翻好的页面可以先提交，没打开全站之前不上线，线上和以前一样。
// 2. 全站的语言：页面里指向 /<语言>/… 但这种语言没有的页面（比如英文新加了一篇、还没翻），改成指向 /en/…。
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { isFull } from "../src/data/nav.js";
import { L10N_LANGS } from "../src/l10n/load.js";

const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const KEEP = new Set(["index.html", "start"]);
let pruned = 0, fixed = 0;
for (const l of L10N_LANGS) {
  const dir = join("dist", l);
  if (!existsSync(dir)) continue;
  if (!isFull(l)) {
    for (const f of readdirSync(dir)) if (!KEEP.has(f)) { rmSync(join(dir, f), { recursive: true }); pruned++; }
    continue;
  }
  const re = new RegExp(`(href=")(${base})?/${l}/([^"#?]*)`, "g");
  for (const file of walk(dir).filter((f) => f.endsWith(".html"))) {
    const html = readFileSync(file, "utf8");
    const out = html.replace(re, (m, pre, b = "", rest) => {
      const target = join(dir, rest, rest === "" || rest.endsWith("/") ? "index.html" : "");
      if (existsSync(target)) return m;
      fixed++;
      return `${pre}${b}/en/${rest}`;
    });
    if (out !== html) writeFileSync(file, out);
  }
}
console.log(`✓ 另外 8 种语言：全站 ${L10N_LANGS.filter(isFull).join("、") || "无"}；删掉 ${pruned} 个还没打开的目录，${fixed} 个链接改指英文版`);

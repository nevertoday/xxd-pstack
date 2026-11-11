// 检查一种非全站语言（ja、ko、es、pt、fr、de、ru、ar）的翻译是不是齐全、能不能构建：
//   node scripts/check-i18n.mjs ja        只查日语
//   node scripts/check-i18n.mjs           全部查
// 查的是：src/i18n/<语言>.js 的键和 base.js 一样多、{占位} 没丢、数组长度一样；
// src/pages/<语言>/ 下的首页和三课都在、MDX 能编译、复制块的 id 和英文版一样、每页最多一处 <mark>、
// 站内链接指向存在的页面（新手入门指向本语言，其他页面指向 /en/）。
import { readFileSync, existsSync } from "node:fs";
import { compile } from "@mdx-js/mdx";
import BASE from "../src/i18n/base.js";
import { EXTRA } from "../src/i18n/index.js";

const LESSONS = ["1-why", "2-install", "3-first-use"];
const want = process.argv[2] ? [process.argv[2]] : Object.keys(EXTRA);
let bad = 0;
const fail = (code, msg) => { bad++; console.log(`✗ ${code}：${msg}`); };

const walk = (base, tr, path, code) => {
  if (Array.isArray(base)) {
    if (!Array.isArray(tr)) return fail(code, `${path} 应该是数组`);
    if (tr.length !== base.length) fail(code, `${path} 有 ${tr.length} 项，英文是 ${base.length} 项`);
    base.forEach((b, i) => walk(b, tr[i], `${path}[${i}]`, code));
  } else if (base && typeof base === "object") {
    if (!tr || typeof tr !== "object") return fail(code, `缺 ${path}`);
    for (const k of Object.keys(base)) walk(base[k], tr[k], path ? `${path}.${k}` : k, code);
  } else if (typeof base === "string") {
    if (typeof tr !== "string" || !tr.trim()) return fail(code, `缺 ${path}`);
    for (const ph of base.match(/\{\w+\}/g) || []) if (!tr.includes(ph)) fail(code, `${path} 丢了占位 ${ph}`);
  }
};

const ids = (s) => [...s.matchAll(/<Copy id="([^"]+)"/g)].map((m) => m[1]).sort().join(",");

for (const code of want) {
  const d = EXTRA[code];
  if (!d) { fail(code, "不是非全站语言"); continue; }
  walk(BASE, d, "", code);
  if (!existsSync(`src/pages/${code}/index.astro`)) fail(code, "缺首页");
  for (const f of LESSONS) {
    const p = `src/pages/${code}/start/${f}.mdx`;
    if (!existsSync(p)) { fail(code, `缺 ${p}`); continue; }
    const s = readFileSync(p, "utf8");
    const en = readFileSync(`src/pages/en/start/${f}.mdx`, "utf8");
    try { await compile(s); } catch (e) { fail(code, `${f} 编译不过：${e.message.split("\n")[0]}`); }
    if (s === en) fail(code, `${f} 还是英文原样`);
    if (ids(s) !== ids(en)) fail(code, `${f} 复制块的 id 和英文版不一样`);
    if ((s.match(/<mark/g) || []).length > 1) fail(code, `${f} 有不止一处 <mark>`);
    if (!/^tldr: /m.test(s)) fail(code, `${f} 缺 tldr`);
    for (const m of s.matchAll(/\]\((\/[^)\s]*)\)|href="(\/[^"]*)"/g)) {
      const href = m[1] ?? m[2];
      if (href.startsWith("/en/start/")) fail(code, `${f} 新手入门的链接要指向 /${code}/start/：${href}`);
      else if (!href.startsWith(`/${code}/start/`) && !href.startsWith("/en/")) fail(code, `${f} 站内链接要么是 /${code}/start/…，要么是 /en/…：${href}`);
    }
  }
}
console.log(bad ? `还有 ${bad} 处要改` : `✓ ${want.join("、")} 齐全，能编译`);
process.exit(bad ? 1 : 0);

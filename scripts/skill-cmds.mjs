// 构建后处理：正文里的技能命令按「我用的工具」显示（数据见 src/data/tools.js）。
// 1. dist 里每个页面 <body> 的文字中，/poteto-mode、/pstack:poteto-mode、$poteto-mode 这类技能命令
//    一律写成 Claude Code 的样子（默认），并包成 <span class="sk" data-sk="poteto-mode">，页面脚本据此换写法。
//    复制按钮的 data-copy、aria-label 里的也改，并加 data-sk-a 记下改了哪几个属性。
// 2. 不改的地方：<script> <style> <textarea>；带 data-sk-keep 的元素里面（某个工具专用的页面、对照各工具写法的段落）；
//    以及前面紧挨一个 ! 的命令（正文里写 `!/pstack:how` 表示「就这么写，别换」，! 在这里去掉）。
// 在 search-sections.mjs 之后、base-links.mjs 之前运行。
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SKILL_NAMES } from "../src/data/tools.js";

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
// 技能名长的在前，免得 tdd 吃掉别的；后面不能再接字母、数字、连字符
const NAMES = [...SKILL_NAMES].sort((a, b) => b.length - a.length).join("|");
// 前面那个字符：不能是字母、数字、点、斜杠、冒号、连字符、$（那是路径、网址或别的词的一部分）
const CMD = new RegExp(`(^|[^\\w./:$!-])([/$])(?:pstack:)?(${NAMES})(?![\\w-])`, "g");
const KEEP = new RegExp(`!(?=[/$](?:pstack:)?(?:${NAMES})(?![\\w-]))`, "g");
const SKIP = new Set(["script", "style", "textarea", "title"]);
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);

let spans = 0, attrs = 0, pages = 0;
const cc = (name) => `/pstack:${name}`;

function processHtml(html) {
  const parts = html.split(/(<[^>]*>)/);
  let inBody = false, skip = null, keep = null, keepDepth = 0, changed = false;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (!p) continue;
    if (p[0] === "<") {
      const m = p.match(/^<(\/?)([a-zA-Z][\w-]*)/);
      if (!m) continue;
      const [, close, raw] = m;
      const tag = raw.toLowerCase();
      if (tag === "body" && !close) inBody = true;
      if (skip) { if (close && tag === skip) skip = null; continue; }
      if (!close && SKIP.has(tag)) { skip = tag; continue; }
      if (keep) {
        if (tag === keep && !VOID.has(tag) && !p.endsWith("/>")) keepDepth += close ? -1 : 1;
        if (keepDepth === 0) keep = null;
        continue;
      }
      if (close || !inBody) continue;
      if (/\sdata-sk-keep[\s=>/]/.test(p) && !VOID.has(tag)) { keep = tag; keepDepth = 1; continue; }
      // 属性：复制的命令、读屏念的标签
      const list = [];
      const out = p.replace(/\s(data-copy|aria-label)="([^"]*)"/g, (all, name, val) => {
        const v = val.replace(CMD, (_, pre, _s, n) => pre + cc(n));
        if (v === val) return all;
        list.push(name);
        return ` ${name}="${v}"`;
      });
      if (list.length) {
        parts[i] = out.replace(/^<[a-zA-Z][\w-]*/, (t) => `${t} data-sk-a="${list.join(" ")}"`);
        attrs++; changed = true;
      }
      continue;
    }
    if (!inBody || skip || keep) continue;
    const t = p.replace(CMD, (_, pre, _s, n) => { spans++; return `${pre}<span class="sk" data-sk="${n}">${cc(n)}</span>`; });
    if (t !== p) { parts[i] = t; changed = true; }
  }
  const joined = parts.join("");
  const final = joined.replace(KEEP, "");
  return final !== html ? final : null;
}

for (const file of walk("dist")) {
  if (file.endsWith(".html")) {
    const out = processHtml(readFileSync(file, "utf8"));
    if (out) { writeFileSync(file, out); pages++; }
  } else if (file.endsWith("search-sections.json")) {
    const s = readFileSync(file, "utf8");
    const out = s.replace(KEEP, "");
    if (out !== s) writeFileSync(file, out);
  }
}
console.log(`✓ 技能命令：${pages} 页，${spans} 处正文、${attrs} 个按钮按「我用的工具」显示`);

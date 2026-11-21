// 把一篇 MDX 拆成检查要用的几样东西（scripts/l10n-check.mjs 用）：
// frontmatter 的键、import 的组件、组件标签（名字、属性、行号）、代码块、行内代码、链接、标题、正文段落，
// 以及正文里裸露的 < { }（MDX 会把它们当成标签或表达式）。不追求完整的 MDX 语法，只认本站正文里用到的写法。

/** 组件标签：这些要和英文版一样多、一样的顺序 */
export const COMPONENTS = ["Copy", "Q", "Callout", "Fig", "Checkpoint", "Tabs", "Term", "Reply", "Cmd", "Shot", "ToolPick"];

const lineAt = (src, i) => src.slice(0, i).split("\n").length;

/** JS 表达式里的字符串字面量（"…"、'…'、`…`），按出现顺序 */
export function jsStrings(expr) {
  const out = [];
  for (let i = 0; i < expr.length; i++) {
    const q = expr[i];
    if (q !== '"' && q !== "'" && q !== "`") continue;
    let j = i + 1, s = "";
    while (j < expr.length && expr[j] !== q) {
      if (expr[j] === "\\" && j + 1 < expr.length) { const c = expr[j + 1]; s += c === "n" ? "\n" : c; j += 2; continue; }
      s += expr[j++];
    }
    out.push(s);
    i = j;
  }
  return out;
}

/** 从 i（指向 {）读到配对的 }，跳过字符串；返回 } 之后的位置 */
function skipBraces(src, i) {
  let depth = 0;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") { const q = c; i++; while (i < src.length && src[i] !== q) { if (src[i] === "\\") i++; i++; } continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) return i + 1; }
  }
  return -1;
}

/** 从 i（指向 <）读一个标签；不是标签返回 null */
function readTag(src, i) {
  const m = src.slice(i).match(/^<(\/?)([A-Za-z][\w.-]*)/);
  if (!m) return null;
  let j = i + m[0].length;
  const attrs = [];
  while (j < src.length) {
    while (/\s/.test(src[j])) j++;
    if (src.startsWith("/>", j)) return { name: m[2], closing: !!m[1], self: true, attrs, start: i, end: j + 2 };
    if (src[j] === ">") return { name: m[2], closing: !!m[1], self: false, attrs, start: i, end: j + 1 };
    const a = src.slice(j).match(/^([A-Za-z_:][\w:.-]*)/);
    if (!a) return null;
    j += a[0].length;
    const attr = { name: a[1], raw: null, value: true, strings: [] };
    if (src[j] === "=") {
      j++;
      if (src[j] === '"' || src[j] === "'") {
        const q = src[j], k = src.indexOf(q, j + 1);
        if (k < 0) return null;
        attr.raw = src.slice(j, k + 1); attr.value = src.slice(j + 1, k); attr.strings = [attr.value]; j = k + 1;
      } else if (src[j] === "{") {
        const k = skipBraces(src, j);
        if (k < 0) return null;
        attr.raw = src.slice(j, k); attr.strings = jsStrings(src.slice(j + 1, k - 1));
        attr.value = attr.strings.length === 1 && /^\{\s*[`"']/.test(attr.raw) ? attr.strings[0] : attr.raw;
        j = k;
      } else return null;
    }
    attrs.push(attr);
  }
  return null;
}

/** frontmatter：只认一行一个 `键: 值`（本站的写法），值去掉两边的引号 */
export function frontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { keys: new Map(), body: src, offset: 0 };
  const keys = new Map();
  m[1].split("\n").forEach((l, n) => {
    const kv = l.match(/^([\w-]+):\s*(.*)$/);
    if (kv) keys.set(kv[1], { value: kv[2].replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"), line: n + 2 });
  });
  return { keys, body: src.slice(m[0].length), offset: m[0].length };
}

export function scan(src) {
  const fm = frontmatter(src);
  const r = { fm: fm.keys, imports: [], tags: [], fences: [], code: [], links: [], headings: [], paragraphs: [], bare: [], prose: "" };
  // 第一遍按行：代码块、import、标题；代码块和 import 换成空行（行号不变）
  const lines = src.split("\n");
  const fmLines = fm.offset ? src.slice(0, fm.offset).split("\n").length - 1 : 0;
  let fence = null;
  for (let n = fmLines; n < lines.length; n++) {
    const l = lines[n];
    const f = l.match(/^\s*(```+|~~~+)\s*([\w-]*)/);
    if (fence) {
      if (f && f[1][0] === fence.mark[0] && f[1].length >= fence.mark.length && !f[2]) { r.fences.push(fence); fence = null; }
      else fence.body.push(l);
      lines[n] = "";
      continue;
    }
    if (f) { fence = { mark: f[1], lang: f[2], body: [], line: n + 1 }; lines[n] = ""; continue; }
    if (/^(import|export)\s/.test(l)) { const im = l.match(/^import\s+(\w+)/); if (im) r.imports.push(im[1]); lines[n] = ""; continue; }
    const h = l.match(/^(#{1,6})\s+(.*)$/);
    if (h) r.headings.push({ level: h[1].length, text: h[2], line: n + 1 });
  }
  for (const f of r.fences) f.body = f.body.join("\n");
  // 第二遍按字：行内代码、标签、裸露的 < { }；它们都换成空格，剩下的是正文
  const body = lines.map((l, n) => (n < fmLines ? "" : l)).join("\n");
  const out = body.split("");
  const blank = (a, b) => { for (let k = a; k < b; k++) if (out[k] !== "\n") out[k] = " "; };
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (c === "`") {
      const run = body.slice(i).match(/^`+/)[0];
      const k = body.indexOf(run, i + run.length);
      if (k < 0) { i += run.length - 1; continue; }
      r.code.push({ text: body.slice(i + run.length, k), line: lineAt(body, i) });
      blank(i, k + run.length);
      i = k + run.length - 1;
      continue;
    }
    if (c === "<") {
      const t = readTag(body, i);
      if (t) { t.line = lineAt(body, i); r.tags.push(t); blank(i, t.end); i = t.end - 1; continue; }
      r.bare.push({ ch: "<", line: lineAt(body, i) });
      continue;
    }
    if (c === "{" || c === "}") r.bare.push({ ch: c, line: lineAt(body, i) });
  }
  r.prose = out.join("");
  // 链接：正文里的 [文字](地址)，HTML 标签的 href，组件属性字符串里的 href / [文字](地址)
  for (const m of body.matchAll(/\[[^\]\n]*\]\(([^)\s]+)\)/g)) if (r.prose[m.index] === "[") r.links.push({ url: m[1], line: lineAt(body, m.index) });
  for (const t of r.tags) {
    if (/^[a-z]/.test(t.name)) for (const a of t.attrs) if (a.name === "href" && typeof a.value === "string") r.links.push({ url: a.value, line: t.line });
    if (/^[A-Z]/.test(t.name)) for (const a of t.attrs) for (const s of a.strings) {
      for (const m of s.matchAll(/href="([^"]+)"|\[[^\]\n]*\]\(([^)\s]+)\)/g)) r.links.push({ url: m[1] ?? m[2], line: t.line });
    }
  }
  r.links.sort((a, b) => a.line - b.line);
  // 段落：按空行切；raw 是原样（比较用），text 是去掉代码和标签以后的正文（数词、找汉字用）
  let start = 0;
  const rawLines = body.split("\n"), proseLines = r.prose.split("\n");
  for (let n = 0; n <= rawLines.length; n++) {
    if (n === rawLines.length || rawLines[n].trim() === "") {
      const raw = rawLines.slice(start, n).join("\n").trim();
      const text = proseLines.slice(start, n).join("\n").replace(/\[([^\]]*)\]\([^)\s]+\)/g, "$1").trim();
      if (raw) r.paragraphs.push({ raw, text, line: start + 1 });
      start = n + 1;
    }
  }
  return r;
}

/** 组件序列里的一项：名字加上要求一样的那个属性（id、type、k、src） */
export function sig(t) {
  const v = (n) => t.attrs.find((a) => a.name === n)?.value;
  if (["Copy", "Checkpoint", "Fig", "Tabs"].includes(t.name)) return `${t.name}#${v("id")}`;
  if (t.name === "Callout") return `Callout:${v("type") ?? "tip"}`;
  if (t.name === "Term") return `Term:${v("k")}`;
  if (t.name === "Shot") return `Shot:${v("src")}`;
  return t.name;
}
/** 组件的开标签（不含 </Q> 这种闭标签），按顺序 */
export const components = (r) => r.tags.filter((t) => !t.closing && COMPONENTS.includes(t.name));

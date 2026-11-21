// node scripts/l10n.mjs check [语言…]：查另外 8 种语言的翻译和英文版结构是不是一样。出错的地方写成「文件:行」或「文件 键路径」。
//
// 数据（src/l10n/<语言>/*.json，和 src/l10n/en/ 同名同结构）：
//   键一样（多了的键算错）、数组一样长、{占位} 一样、英文有字的地方不能是空字符串；
//   链接：个数一样，外链原样，站内 /en/X 写成 /<语言>/X；ASCII 的行内代码（命令、文件名）不能丢；
//   技能文档：块数一样，每块里的行内代码、代码块和英文一样，写法的 quote 是英文原句不动；
//   和英文一字不差的整句（四个词以上）算没翻；汉字：见下面「汉字」。
// 页面（src/pages/<语言>/{start,guide,howto}/*.mdx，和 src/pages/en/ 同名）：
//   frontmatter 的键一样，layout / step / slug / lesson / cmds 原样；import 的组件一样；标题层级一样；
//   组件按顺序一样（Copy、Checkpoint、Fig、Tabs 的 id，Callout 的 type，Term 的 k，Shot 的 src；Term 只比个数）；
//   组件属性名一样，命令原样（Cmd 的 c；Copy / Reply 的 code 在中文版里没翻的，这里也不能翻）；
//   代码块个数一样，shell 代码块原样；英文和中文版都有的行内代码不能丢；链接同上；
//   正文里不能有裸的 < { }；最多一处 <mark>；和英文一字不差的段落算没翻；能编译（@mdx-js/mdx）。
// 汉字：除了英文原文里本来就有的（人名、频道名），非中日语言不能有汉字；日语里四个字以上、中文源文件里有的连续汉字，
//   或者六个汉字以上却没有一个假名的句子，算是没翻干净的中文。
// 缺的文件、页面、键：语言还没打开全站时只计数（首页和新手入门用到的除外），打开以后算错。
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { compile } from "@mdx-js/mdx";
import { isFull } from "../src/data/nav.js";
import { LESSON_FIGS } from "../src/data/figs.js";
import { L10N_DIR } from "../src/l10n/load.js";
import { templates, zhTemplates, pageUnits, SHELLS } from "./l10n-units.mjs";
import { scan, sig, components, frontmatter } from "./l10n-mdx.mjs";

const HAN = /[㐀-鿿豈-﫿]/g;
const HAN_RUN = /[㐀-鿿豈-﫿]+/g;
const KANA = /[぀-ヿ]/;
const SHELL = new Set(["sh", "bash", "shell", "zsh", "console", "powershell", "ps1", "pwsh", "cmd", "bat", "fish"]);
const FM_LITERAL = ["layout", "step", "slug", "lesson", "cmds"];
/** 去掉代码、链接地址、占位、命令以后还剩四个以上英文词：是一句要翻的话 */
const plain = (s) => String(s).replace(/`[^`]*`/g, " ").replace(/\]\([^)]*\)/g, "]").replace(/<[^>]+>/g, " ").replace(/https?:\/\/\S+/g, " ").replace(/\{\w+\}/g, " ").replace(/(^|\s)[/$][\w:.-]+/g, " ");
const isProse = (s) => (plain(s).match(/[A-Za-z]{2,}/g) || []).length >= 4;
const codeSpans = (s) => [...String(s).matchAll(/(`+)([^`]+?)\1/g)].map((m) => m[2]);
const fencesOf = (s) => [...String(s).matchAll(/^\s*(```+|~~~+)([\w-]*)\n([\s\S]*?)\n\s*\1\s*$/gm)].map((m) => ({ lang: m[2], body: m[3] }));
const linksOf = (s) => [...String(s).matchAll(/\]\(([^)\s]+)\)|href="([^"]+)"/g)].map((m) => m[1] ?? m[2]);
const literalCode = (c) => /^[\x20-\x7e]+$/.test(c) && !/[<>]/.test(c);
const sortJoin = (a) => [...a].sort().join("\u0001");
/** 多重集合差：a 里有、b 里没有的 */
const minus = (a, b) => { const left = [...b]; return a.filter((x) => { const i = left.indexOf(x); if (i < 0) return true; left.splice(i, 1); return false; }); };

// 中文源文件全部的文字：日语里出现中文源文件里的整串汉字，多半是没翻
let ZH = null;
const zhCorpus = () => (ZH ??= [
  ...readdirSync("src/data").filter((f) => f.endsWith(".js")).map((f) => readFileSync(join("src/data", f), "utf8")),
  ...["start", "guide", "howto"].flatMap((d) => readdirSync(`src/pages/${d}`).filter((f) => f.endsWith(".mdx")).map((f) => readFileSync(`src/pages/${d}/${f}`, "utf8"))),
  ...readdirSync("src/data/skill-docs").map((f) => readFileSync(join("src/data/skill-docs", f), "utf8")),
].join("\n"));

/** 日语里本来就这么写的汉字词（和中文同形），审过的才加进来 */
const JA_OK = new Set(["基本概念", "検証", "判定条件", "前提条件", "設計", "実装", "完全一致", "修正", "原因特定", "再現", "整理"]);
function hanProblems(text, en, lang) {
  if (lang === "zh") return [];
  const bad = [];
  for (const run of String(text).match(HAN_RUN) || []) {
    if (String(en).includes(run)) continue;
    if (lang !== "ja") bad.push(run);
    else if (run.length >= 4 && !JA_OK.has(run) && zhCorpus().includes(run)) bad.push(run);
  }
  if (lang === "ja") for (const s of String(text).split(/[。！？\n]/)) { const t = s.trim(); if ((t.match(HAN) || []).length >= 6 && !KANA.test(t) && !String(en).includes(t) && !(t.match(HAN_RUN) || []).every((r) => JA_OK.has(r) || r.length < 2)) bad.push(flat(t, 24)); }
  return [...new Set(bad)];
}

/** 一条站内链接在这种语言里应该写成什么（null：不比地址，比如页内锚点） */
function wantLink(en, lang, partialStart) {
  if (/^(https?:|mailto:)/.test(en)) return en;
  if (en.startsWith("#")) return null;
  const m = en.match(/^\/en(\/[^#]*)(#.*)?$/);
  if (!m) return en;
  const toStart = m[1] === "/" || m[1].startsWith("/start/");
  // 还不是全站的语言：新手入门里指向别的页面的链接还是 /en/
  return (partialStart && !toStart ? "/en" : `/${lang}`) + m[1];
}
const pathOf = (u) => u.replace(/#.*$/, "");

/** 比较两组链接，返回问题列表 */
function compareLinks(enLinks, trLinks, lang, partialStart) {
  const out = [];
  if (enLinks.length !== trLinks.length) out.push(`链接有 ${trLinks.length} 个，英文是 ${enLinks.length} 个`);
  const want = enLinks.map((u) => wantLink(u, lang, partialStart)).filter((u) => u !== null).map(pathOf);
  // 外链里的语言段可以换成这种语言（code.claude.com/docs/en/… → /docs/ja/…）
  const ws = new Set(want);
  const local = (u) => { if (!/^https?:/.test(u) || ws.has(u)) return u; const v = u.replace(/\/[a-z]{2}(?:-[A-Za-z]{2,4})?\//, "/en/"); return ws.has(v) ? v : u; };
  const got = trLinks.filter((u) => !u.startsWith("#")).map(pathOf).map(local);
  for (const u of minus(want, got)) out.push(`少了链接 ${u}`);
  for (const u of minus(got, want)) out.push(`多了 / 写错的链接 ${u}${u.startsWith("/en/") ? `（这种语言要写 /${lang}/…）` : ""}`);
  return out;
}

// 首页和新手入门用到的键：还不是全站的语言也必须齐
const CORE_UI_SKIP = new Set(["site.main", "site.pending", "site.ref", "site.hintMain", "site.hintFaq", "site.hintSkill", "home.ctaFull", "feedback.faq", "contact.faq"]);
const CORE_UI = ["site.", "tool.", "home.", "lesson.", "callout.", "copy.", "cmd.", "reply.", "feedback.", "contact.", "partial."];
function isCore(unit, path) {
  if (unit === "ui") return CORE_UI.some((p) => path.startsWith(p)) && ![...CORE_UI_SKIP].some((p) => path === p || path.startsWith(p + "[") || path.startsWith(p + "."));
  if (unit === "nav") return path.startsWith("lessons.");
  if (unit === "figs") return path.startsWith("ui.") || LESSON_FIGS.some((id) => path.startsWith(id + ".") || path.startsWith(id + "["));
  return false;
}

const flat = (s, n = 50) => { const t = String(s).replace(/\s+/g, " ").trim(); return t.length > n ? t.slice(0, n) + "…" : t; };
class Report {
  constructor(lang) { this.lang = lang; this.full = isFull(lang); this.errors = []; this.missing = { files: [], pages: [], keys: 0, keyList: [] }; this.untr = new Map(); }
  err(where, msg) { this.errors.push(`${where}：${msg}`); }
  /** 「和英文一字不差」：同一个文件只列前 3 处，其余在最后合成一行 */
  same(file, where, what) {
    const n = (this.untr.get(file) ?? 0) + 1;
    this.untr.set(file, n);
    if (n <= 3) this.err(where, `${what}和英文一字不差，还没翻`);
  }
  finish() { for (const [file, n] of this.untr) if (n > 3) this.err(file, `还有 ${n - 3} 处和英文一字不差（整个文件可能还没翻）`); }
  miss(where, core) { if (this.full || core) this.err(where, "缺"); else { this.missing.keys++; if (this.missing.keyList.length < 3) this.missing.keyList.push(where); } }
}

/** 只是一串产品名（Claude Code, Cursor, Codex…；Codex, OpenCode, Pi, etc.），各语言照写英文是对的 */
const NAMES = /^(?:\s*(?:Claude Code|Cursor|Codex|OpenCode|Pi|Gemini|GitHub|Grok Bot|etc\.|…)\s*[,，、…]?\s*)+$/;
const onlyNames = (s) => NAMES.test(s.trim());

/** 技能文档里按规矩保留英文的块：技能名做的标题（# Show me your work）、剧本名单（Investigation, Bug fix, …） */
const keepEnglishBlock = (s) => /^#{1,3} [^\n]+$/.test(s.trim()) || /^([A-Z][^,\n]{0,30}, ){5,}[A-Z][^,\n]{0,30}\.?$/.test(s.trim());
/** 技能名：译文给技能名加上代码格式是可以的 */
const SKILL_NAMES = new Set(readdirSync("src/l10n/en/skill-docs").map((f) => f.replace(/\.json$/, "")));

// ---------- 数据 ----------
function walkData(R, file, unit, en, tr, path, zh) {
  const at = `${file} ${path || "（整个文件）"}`;
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return R.err(at, "应该是数组");
    if (tr.length !== en.length) R.err(at, `有 ${tr.length} 项，英文是 ${en.length} 项`);
    en.forEach((e, i) => { if (i < tr.length) walkData(R, file, unit, e, tr[i], `${path}[${i}]`, Array.isArray(zh) ? zh[i] : undefined); else R.miss(`${file} ${path}[${i}]`, isCore(unit, `${path}[${i}]`)); });
    return;
  }
  if (en && typeof en === "object") {
    if (!tr || typeof tr !== "object" || Array.isArray(tr)) return R.err(at, "应该是对象");
    for (const k of Object.keys(tr)) if (!(k in en)) R.err(`${file} ${path ? path + "." : ""}${k}`, "英文模板里没有这个键（删掉，或者 export 一下看模板变了没有）");
    for (const k of Object.keys(en)) {
      const p = path ? `${path}.${k}` : k;
      if (tr[k] === undefined || tr[k] === null) R.miss(`${file} ${p}`, isCore(unit, p));
      else walkData(R, file, unit, en[k], tr[k], p, zh && typeof zh === "object" ? zh[k] : undefined);
    }
    return;
  }
  if (typeof en !== "string") { if (typeof tr !== typeof en) R.err(at, `应该是 ${typeof en}`); else if (tr !== en) R.err(at, `应该和英文一样：${JSON.stringify(en)}`); return; }
  if (typeof tr !== "string") return R.err(at, "应该是字符串");
  if (en.trim() && !tr.trim()) return R.miss(at, isCore(unit, path));
  const ph = (s) => sortJoin(s.match(/\{\w+\}/g) || []);
  if (ph(en) !== ph(tr)) R.err(at, `占位不一样：英文 ${(en.match(/\{\w+\}/g) || []).join(" ") || "没有"}，这里 ${(tr.match(/\{\w+\}/g) || []).join(" ") || "没有"}`);
  const isDocBlock = unit.startsWith("skill-docs/") && path.startsWith("blocks[");
  if (/(^|\.)quote$/.test(path)) { if (tr !== en) R.err(at, "quote 是原文里的原句，保持英文不动"); return; }
  for (const p of compareLinks(linksOf(en), linksOf(tr), R.lang, false)) R.err(at, p);
  if (isDocBlock) {
    // 英文的每段行内代码都要在；译文为了语法重复同一段、或给英文里本来就有的词加上代码格式，都可以
    const lostCode = minus(codeSpans(en), codeSpans(tr));
    const newCode = [...new Set(codeSpans(tr))].filter((c) => !codeSpans(en).includes(c) && !en.includes(c) && !SKILL_NAMES.has(c.replace(/^\//, "")));
    if (lostCode.length || newCode.length) R.err(at, `行内代码和英文不一样：${lostCode.length ? "少了 " + lostCode.map((c) => "`" + c + "`").join(" ") : "多了 " + newCode.map((c) => "`" + c + "`").join(" ")}`);
    const fe = fencesOf(en), ft = fencesOf(tr);
    if (fe.length !== ft.length) R.err(at, `代码块有 ${ft.length} 个，英文是 ${fe.length} 个`);
    else fe.forEach((f, i) => { if (f.body !== ft[i].body) R.err(at, `第 ${i + 1} 个代码块和英文不一样（代码块原样保留）`); });
  } else {
    const lost = minus(codeSpans(en).filter(literalCode), codeSpans(tr));
    if (lost.length) R.err(at, `丢了行内代码 ${lost.map((c) => "`" + c + "`").join(" ")}（命令、文件名保持原样）`);
  }
  // 中文版也和英文一样（原则名、命令、例句里的英文）的，不算没翻
  if (tr === en && zh !== en && isProse(en) && !onlyNames(en) && !(isDocBlock && keepEnglishBlock(en)) && !(isDocBlock && !isProse(en.replace(/```[\s\S]*?```/g, "")))) R.same(file, at, "");
  const han = hanProblems(tr, en, R.lang);
  if (han.length) R.err(at, `有没翻的中文：${han.join("、")}`);
}

// ---------- 页面 ----------
function attrStrings(t, name) { return t.attrs.find((a) => a.name === name)?.strings ?? []; }
function attrVal(t, name) { return t.attrs.find((a) => a.name === name)?.value; }

async function checkPage(R, rel) {
  const lang = R.lang;
  const file = `src/pages/${lang}/${rel}`;
  const enSrc = readFileSync(`src/pages/en/${rel}`, "utf8");
  const trSrc = readFileSync(file, "utf8");
  const zhSrc = existsSync(`src/pages/${rel}`) ? readFileSync(`src/pages/${rel}`, "utf8") : null;
  const at = (line) => `${file}:${line}`;
  const E = scan(enSrc), T = scan(trSrc), Z = zhSrc && scan(zhSrc);
  const partialStart = !R.full && rel.startsWith("start/");
  // frontmatter 不是 MDX：换成同样多的空行再编译，行号不变
  const fmLen = frontmatter(trSrc).offset;
  try { await compile("\n".repeat(trSrc.slice(0, fmLen).split("\n").length - 1) + trSrc.slice(fmLen)); } catch (e) { R.err(at(e.line ?? e.place?.line ?? e.place?.start?.line ?? String(e.message).match(/\((\d+):\d+/)?.[1] ?? 1), `编译不过：${String(e.reason ?? e.message).split("\n")[0]}`); }
  if (trSrc === enSrc) { R.err(at(1), "还是英文原样"); return; }

  // frontmatter
  for (const k of E.fm.keys()) if (!T.fm.has(k)) R.err(at(1), `frontmatter 缺 ${k}`);
  for (const [k, v] of T.fm) {
    if (!E.fm.has(k)) { R.err(at(v.line), `frontmatter 多了 ${k}`); continue; }
    if (v.yaml) R.err(at(v.line), `frontmatter ${k} 的值${v.yaml}`);
    const e = E.fm.get(k).value;
    if (FM_LITERAL.includes(k)) { if (v.value !== e) R.err(at(v.line), `frontmatter ${k} 要和英文一样：${e}`); }
    else if (!v.value.trim()) R.err(at(v.line), `frontmatter ${k} 是空的`);
    else if (v.value === e && isProse(e)) R.same(file, at(v.line), `frontmatter ${k} `);
    else { const h = hanProblems(v.value, e, lang); if (h.length) R.err(at(v.line), `frontmatter ${k} 有没翻的中文：${h.join("、")}`); }
  }
  if (sortJoin(new Set(E.imports)) !== sortJoin(new Set(T.imports))) R.err(at(1), `import 的组件和英文不一样：英文 ${[...new Set(E.imports)].join(" ")}，这里 ${[...new Set(T.imports)].join(" ")}`);
  const lv = (r) => r.headings.map((h) => h.level).join(",");
  if (lv(E) !== lv(T)) R.err(at(T.headings[0]?.line ?? 1), `标题层级和英文不一样（英文 ${E.headings.length} 个：${lv(E)}；这里 ${T.headings.length} 个：${lv(T)}）`);

  // 组件：除 Term 外按顺序一样；Term 的 k 个数一样
  const ce = components(E), ct = components(T), cz = Z ? components(Z) : null;
  const seq = (cs) => cs.filter((t) => t.name !== "Term");
  const se = seq(ce), st = seq(ct), sz = cz && seq(cz);
  const zhAligned = sz && sz.map(sig).join("|") === se.map(sig).join("|");
  const n = Math.min(se.length, st.length);
  let firstBad = -1;
  for (let i = 0; i < n; i++) if (sig(se[i]) !== sig(st[i])) { firstBad = i; break; }
  if (firstBad >= 0 || se.length !== st.length) {
    const i = firstBad >= 0 ? firstBad : n;
    R.err(at(st[i]?.line ?? st.at(-1)?.line ?? 1), `组件顺序和英文不一样：第 ${i + 1} 个英文是 ${se[i] ? sig(se[i]) : "（没有了）"}（英文第 ${se[i]?.line ?? "-"} 行），这里是 ${st[i] ? sig(st[i]) : "（没有了）"}；英文共 ${se.length} 个，这里 ${st.length} 个`);
  }
  const terms = (cs) => cs.filter((t) => t.name === "Term").map(sig);
  const tl = minus(terms(ce), terms(ct)), tx = minus(terms(ct), terms(ce));
  if (tl.length || tx.length) R.err(at(1), `Term 和英文不一样：${tl.length ? "少了 " + tl.join(" ") : ""}${tx.length ? " 多了 " + tx.join(" ") : ""}`);
  for (let i = 0; i < n && (firstBad < 0 || i < firstBad); i++) {
    const e = se[i], t = st[i], z = zhAligned ? sz[i] : null;
    const names = (x) => sortJoin(x.attrs.map((a) => a.name));
    if (names(e) !== names(t)) R.err(at(t.line), `${sig(t)} 的属性和英文不一样：英文 ${e.attrs.map((a) => a.name).join(" ")}，这里 ${t.attrs.map((a) => a.name).join(" ")}`);
    for (const a of e.attrs) {
      const tv = attrVal(t, a.name), zv = z ? attrVal(z, a.name) : undefined;
      if (["id", "type", "k", "src", "w", "h", "lang", "date", "group"].includes(a.name)) {
        if (tv !== a.value) R.err(at(t.line), `${sig(t)} 的 ${a.name} 要和英文一样：${a.value}`);
        continue;
      }
      const es = a.strings, ts = attrStrings(t, a.name), zs = z ? attrStrings(z, a.name) : null;
      if (es.length !== ts.length) { R.err(at(t.line), `${sig(t)} 的 ${a.name} 有 ${ts.length} 项，英文是 ${es.length} 项`); continue; }
      es.forEach((s, j) => {
        const literal = e.name === "Tabs" && a.name === "items" ? j % 2 === 0 || zs?.[j] === s : zs ? zs[j] === s : !isProse(s);
        if (literal) { if (ts[j] !== s) R.err(at(t.line), `${sig(t)} 的 ${a.name}${es.length > 1 ? `[${j}]` : ""} 中文版也没翻，这里要和英文一样：${JSON.stringify(s.slice(0, 60))}`); return; }
        if (ts[j] === s && isProse(s)) R.same(file, at(t.line), `${sig(t)} 的 ${a.name}${es.length > 1 ? `[${j}]` : ""} `);
        const h = hanProblems(ts[j], s, lang);
        if (h.length) R.err(at(t.line), `${sig(t)} 的 ${a.name} 有没翻的中文：${h.join("、")}`);
      });
    }
  }

  // 代码块、行内代码
  if (E.fences.length !== T.fences.length) R.err(at(T.fences[0]?.line ?? 1), `代码块有 ${T.fences.length} 个，英文是 ${E.fences.length} 个`);
  else E.fences.forEach((f, i) => {
    const zf = Z?.fences.length === E.fences.length ? Z.fences[i] : null;
    if ((SHELL.has(f.lang) || zf?.body === f.body) && T.fences[i].body !== f.body) R.err(at(T.fences[i].line), "命令代码块要和英文一样");
  });
  if (Z) {
    const both = E.code.map((c) => c.text).filter((c) => Z.code.some((z) => z.text === c));
    const lost = [...new Set(minus(both, T.code.map((c) => c.text)))];
    if (lost.length) R.err(at(1), `丢了行内代码（英文和中文版里都原样保留的）：${lost.map((c) => "`" + c + "`").join(" ")}`);
  }

  // 链接
  for (const p of compareLinks(E.links.map((l) => l.url), T.links.map((l) => l.url), lang, partialStart)) {
    const u = p.match(/(\/\S+)/)?.[1];
    R.err(at(T.links.find((l) => pathOf(l.url) === u)?.line ?? 1), p);
  }
  // 链接里的锚点：构建过（dist 里有目标页）就查目标页有没有这个 id
  for (const l of T.links) {
    const m = l.url.match(/^\/([a-z]{2})(\/[^#]*)#(.+)$/);
    if (!m || m[1] !== lang) continue;
    const page = join("dist", m[1], m[2], "index.html");
    if (existsSync(page) && !readFileSync(page, "utf8").includes(`id="${m[3]}"`) && !readFileSync(page, "utf8").includes(`id="${decodeURIComponent(m[3])}"`)) R.err(at(l.line), `锚点 #${m[3]} 在 ${m[1]}${m[2]} 里找不到（标题翻译后 id 变了，用那一页标题的新 id）`);
  }

  // 正文
  for (const b of T.bare) R.err(at(b.line), `正文里有裸的 ${b.ch}（放进 \`代码\` 里，或者换成别的写法）`);
  const marks = T.tags.filter((t) => t.name === "mark" && !t.closing);
  const enMarks = E.tags.filter((t) => t.name === "mark" && !t.closing).length;
  if (marks.length > Math.max(1, enMarks)) R.err(at(marks[1].line), `有 ${marks.length} 处 <mark>，每页最多一处（英文版 ${enMarks} 处）`);
  const enParas = new Set(E.paragraphs.map((p) => p.raw));
  for (const p of T.paragraphs) {
    if (enParas.has(p.raw) && isProse(p.text)) R.same(file, at(p.line), `这一段（${flat(p.raw, 40)}）`);
    const h = hanProblems(p.text, enSrc, lang);
    if (h.length) R.err(at(p.line), `有没翻的中文：${h.join("、")}`);
  }
}

// ---------- 入口 ----------
export async function check(langs) {
  const tpl = templates();
  const zhTpl = zhTemplates();
  const pages = pageUnits();
  let bad = 0;
  // src/l10n/en/ 是交给翻译的模板，要和源数据一致（改了中文 / 英文数据忘了 export，这里会说）
  const stale = Object.entries(tpl).filter(([u, v]) => { const p = join(L10N_DIR, "en", `${u}.json`); return !existsSync(p) || readFileSync(p, "utf8") !== JSON.stringify(v, null, 2) + "\n"; }).map(([u]) => u);
  if (stale.length) { bad++; console.log(`✗ 英文模板过期了（${stale.slice(0, 5).join("、")}${stale.length > 5 ? ` 等 ${stale.length} 个` : ""}）：跑 node scripts/l10n.mjs export`); }
  for (const lang of langs) {
    const R = new Report(lang);
    if (!existsSync(join(L10N_DIR, lang)) && !existsSync(`src/pages/${lang}`)) { console.log(`✗ ${lang}：不认识这种语言`); bad++; continue; }
    // 数据
    let haveUnits = 0;
    for (const [unit, en] of Object.entries(tpl)) {
      const file = `src/l10n/${lang}/${unit}.json`;
      if (!existsSync(file)) {
        if (R.full || unit === "ui" || unit === "nav" || unit === "figs") R.err(file, "缺这个文件"); else R.missing.files.push(file);
        continue;
      }
      haveUnits++;
      let tr;
      try { tr = JSON.parse(readFileSync(file, "utf8")); } catch (e) { R.err(file, `不是合法的 JSON：${e.message}`); continue; }
      walkData(R, file, unit, en, tr, "", zhTpl[unit]);
    }
    for (const f of readdirSync(join(L10N_DIR, lang), { recursive: true })) {
      const unit = String(f).replace(/\.json$/, "");
      if (String(f).endsWith(".json") && !tpl[unit]) R.err(`src/l10n/${lang}/${f}`, "英文模板里没有这个文件（技能改名或删了？）");
    }
    // 页面
    let havePages = 0;
    for (const rel of pages) {
      const file = `src/pages/${lang}/${rel}`;
      if (!existsSync(file)) { if (R.full || rel.startsWith("start/")) R.err(file, "缺这一页"); else R.missing.pages.push(file); continue; }
      havePages++;
      await checkPage(R, rel);
    }
    if (!existsSync(`src/pages/${lang}/index.astro`)) R.err(`src/pages/${lang}/index.astro`, "缺首页");
    for (const f of Object.keys(SHELLS)) if (!existsSync(`src/pages/${lang}/${f}`)) R.err(`src/pages/${lang}/${f}`, "缺页面外壳（node scripts/l10n.mjs pages）");
    for (const d of ["start", "guide", "howto"]) if (existsSync(`src/pages/${lang}/${d}`)) for (const f of readdirSync(`src/pages/${lang}/${d}`)) if (f.endsWith(".mdx") && !pages.includes(`${d}/${f}`)) R.err(`src/pages/${lang}/${d}/${f}`, "英文版没有这一页");

    R.finish();
    const M = R.missing;
    const miss = [M.files.length && `${M.files.length} 个数据文件`, M.pages.length && `${M.pages.length} 页`, M.keys && `${M.keys} 个键（如 ${M.keyList.join("；")}）`].filter(Boolean);
    const head = `${lang}（${R.full ? "全站" : "还不是全站"}）：数据 ${haveUnits}/${Object.keys(tpl).length} 个文件，页面 ${havePages}/${pages.length} 页`;
    if (R.errors.length) {
      bad += R.errors.length;
      console.log(`✗ ${head}，${R.errors.length} 处要改${miss.length ? `；还没翻：${miss.join("、")}` : ""}`);
      const max = +(process.env.L10N_MAX || 200);
      for (const e of R.errors.slice(0, max)) console.log(`  ✗ ${e}`);
      if (R.errors.length > max) console.log(`  …还有 ${R.errors.length - max} 处（L10N_MAX=数字 看更多）`);
    } else console.log(`✓ ${head}${miss.length ? `；还没翻：${miss.join("、")}` : "，齐了"}`);
  }
  return bad ? 1 : 0;
}

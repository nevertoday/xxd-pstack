// 技能原文 + 中文译文的数据：src/data/skill-docs/<技能名>.json
//
//   node scripts/skill-docs.mjs sync <pstack 仓库目录>   从 skills/<名>/SKILL.md 切块，写进 JSON
//   node scripts/skill-docs.mjs check                    列出还缺译文、缺「写法」的技能
//
// 切块：按空行把正文切成一块块 Markdown（代码块整体算一块），每块一对 { en, zh }。
// 再次 sync 时，英文没变的块保留原来的译文；变了的块译文清空，check 会列出来，补上就行。
// 「写法」（lessons）不随 sync 变：引用的原句如果在新原文里找不到了，check 会提醒。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SKILLS } from "../src/data/skills.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src/data/skill-docs");
const NAMES = SKILLS.flatMap((g) => g.items.map((s) => s.name));

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  const lines = m[1].split("\n");
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([\w-]+):\s*(.*)$/);
    if (!kv) continue;
    let [, k, v] = kv;
    if (v === ">-" || v === ">" || v === "|" || v === "|-") {
      const parts = [];
      while (i + 1 < lines.length && /^\s+/.test(lines[i + 1])) parts.push(lines[++i].trim());
      v = parts.join(v.startsWith(">") ? " " : "\n");
    } else if (/^".*"$/.test(v)) v = JSON.parse(v);
    else if (/^'.*'$/.test(v)) v = v.slice(1, -1).replace(/''/g, "'");
    meta[k] = v;
  }
  return { meta, body: text.slice(m[0].length) };
}

function blocks(body) {
  const out = [];
  let cur = [];
  let fence = null;
  const flush = () => { if (cur.length) out.push(cur.join("\n").replace(/\s+$/, "")); cur = []; };
  for (const line of body.split("\n")) {
    const f = line.match(/^\s*(```+|~~~+)/);
    if (fence) { cur.push(line); if (f && f[1][0] === fence[0] && f[1].length >= fence.length) fence = null; continue; }
    if (f) { fence = f[1]; cur.push(line); continue; }
    if (line.trim() === "") { flush(); continue; }
    cur.push(line);
  }
  flush();
  return out.filter(Boolean);
}

const load = (name) => {
  const p = join(OUT, `${name}.json`);
  return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : null;
};

const [cmd, dir] = process.argv.slice(2);

if (cmd === "sync") {
  if (!dir) throw new Error("用法：node scripts/skill-docs.mjs sync <pstack 仓库目录>");
  mkdirSync(OUT, { recursive: true });
  const commit = execSync("git rev-parse --short HEAD", { cwd: dir }).toString().trim();
  let changed = 0;
  for (const name of NAMES) {
    const src = join(dir, "skills", name, "SKILL.md");
    if (!existsSync(src)) { console.warn(`! 上游没有 ${name}`); continue; }
    const { meta, body } = frontmatter(readFileSync(src, "utf8"));
    const old = load(name);
    const oldZh = new Map((old?.blocks || []).filter((b) => b.zh).map((b) => [b.en, b.zh]));
    const desc = meta.description || "";
    const next = {
      name,
      commit,
      description: { en: desc, zh: old?.description?.en === desc ? old.description.zh : "" },
      blocks: blocks(body).map((en) => ({ en, zh: oldZh.get(en) || "" })),
      lessons: old?.lessons || [],
    };
    const before = JSON.stringify(old);
    const after = JSON.stringify(next);
    if (before !== after) { writeFileSync(join(OUT, `${name}.json`), JSON.stringify(next, null, 2) + "\n"); changed++; }
  }
  console.log(`✓ ${NAMES.length} 个技能，${changed} 个文件有变化（上游 ${commit}）`);
}

if (cmd === "check" || cmd === "sync") {
  let bad = 0;
  for (const name of NAMES) {
    const d = load(name);
    if (!d) { console.log(`✗ ${name}：没有数据`); bad++; continue; }
    const missing = d.blocks.filter((b) => !b.zh).length + (d.description.zh ? 0 : 1);
    const text = [d.description.en, ...d.blocks.map((b) => b.en)].join("\n");
    const lost = (d.lessons || []).filter((l) => !text.includes(l.quote)).length;
    const few = (d.lessons || []).length < 3;
    if (missing || lost || few) {
      bad++;
      console.log(`✗ ${name}：${missing ? `${missing} 块没译文 ` : ""}${few ? `写法只有 ${(d.lessons || []).length} 条 ` : ""}${lost ? `${lost} 条写法的原句在原文里找不到` : ""}`);
    }
  }
  console.log(bad ? `还有 ${bad} 个技能要补` : "✓ 全部技能都有译文和写法");
}

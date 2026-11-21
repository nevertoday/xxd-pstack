// 另外 8 种语言（ja、ko、es、pt、fr、de、ru、ar）的翻译：
//
//   node scripts/l10n.mjs export          从中文 / 英文的源数据生成英文模板 src/l10n/en/（交给翻译的就是这些文件）
//   node scripts/l10n.mjs pages           给 8 种语言生成不含文字的页面外壳（wiki、技能、常见问题、How-to 目录、404）
//   node scripts/l10n.mjs check [语言…]   查翻译是不是齐、结构是不是和英文一样（不写语言就查全部）
//   node scripts/l10n.mjs status          每种语言翻了多少（文件数、页面数），不判对错
//
// 一种语言的全部翻译 = src/l10n/<语言>/ 下和 src/l10n/en/ 同名的文件 + src/pages/<语言>/ 下和 src/pages/en/ 同名的 MDX
// （新手入门 start/、完整教程 guide/、How-to howto/）。英文模板不手改：改源数据，再跑 export。
// 语言还没打开全站（nav.js 的 LANGS 里没有 full: true）时，缺的文件和页面只计数；打开以后缺了就算错。
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { isFull } from "../src/data/nav.js";
import { L10N_LANGS, L10N_DIR } from "../src/l10n/load.js";
import { templates, pageUnits, SHELLS } from "./l10n-units.mjs";
import { check } from "./l10n-check.mjs";

const json = (v) => JSON.stringify(v, null, 2) + "\n";
const write = (p, s) => { mkdirSync(dirname(p), { recursive: true }); const old = existsSync(p) ? readFileSync(p, "utf8") : null; if (old !== s) writeFileSync(p, s); return old !== s; };

function exportTemplates() {
  const all = templates();
  let changed = 0;
  for (const [unit, v] of Object.entries(all)) if (write(join(L10N_DIR, "en", `${unit}.json`), json(v))) { changed++; console.log(`  改了 src/l10n/en/${unit}.json`); }
  // 上游删掉的技能：模板也删掉
  const docsDir = join(L10N_DIR, "en", "skill-docs");
  for (const f of readdirSync(docsDir)) if (!all[`skill-docs/${f.replace(/\.json$/, "")}`]) { rmSync(join(docsDir, f)); changed++; console.log(`  删了 src/l10n/en/skill-docs/${f}`); }
  console.log(`✓ 英文模板：${Object.keys(all).length} 个文件，${changed} 个有变化（src/l10n/en/）`);
}

function writeShells() {
  let n = 0;
  for (const l of L10N_LANGS) for (const [f, make] of Object.entries(SHELLS)) if (write(`src/pages/${l}/${f}`, make(l))) n++;
  console.log(`✓ 页面外壳：${L10N_LANGS.length} 种语言 × ${Object.keys(SHELLS).length} 个，${n} 个有变化`);
}

function status() {
  const tpl = Object.keys(templates()), pages = pageUnits();
  for (const l of L10N_LANGS) {
    const units = tpl.filter((u) => existsSync(join(L10N_DIR, l, `${u}.json`))).length;
    const pg = pages.filter((p) => existsSync(`src/pages/${l}/${p}`)).length;
    console.log(`${l}${isFull(l) ? "（全站）" : ""}：数据 ${units}/${tpl.length}，页面 ${pg}/${pages.length}`);
  }
}

const [cmd, ...args] = process.argv.slice(2);
{
  if (cmd === "export") exportTemplates();
  else if (cmd === "pages") writeShells();
  else if (cmd === "status") status();
  else if (cmd === "check") process.exit(await check(args.length ? args : L10N_LANGS));
  else { console.log("用法：node scripts/l10n.mjs export | pages | check [语言…] | status"); process.exit(1); }
}

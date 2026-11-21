// 另外 8 种语言的翻译文件：src/l10n/<语言>/<单元>.json（ui、nav、wiki、faq、skills、figs，技能文档在 skill-docs/<名>.json）。
// 英文模板在 src/l10n/en/，由 `node scripts/l10n.mjs export` 从中文 / 英文的源数据生成，结构以它为准。
// 这里只管读文件和「缺哪个键就用英文」，不引用任何站点数据（nav.js 也要用它，不能循环引用）。
// 构建和脚本都在仓库根目录运行（process.cwd()），和 Site.astro 读 public/ 的做法一样。
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/** 有翻译文件的语言（中文、英文是源语言，不在这里） */
export const L10N_LANGS = ["ja", "ko", "es", "pt", "fr", "de", "ru", "ar"];
export const L10N_DIR = join(process.cwd(), "src/l10n");

const cache = new Map();
const dev = !!import.meta.env?.DEV;
/** 某种语言的一个翻译单元（unit 如 "ui"、"skill-docs/how"），没有文件就是 null */
export function load(lang, unit) {
  const key = `${lang}/${unit}`;
  if (!dev && cache.has(key)) return cache.get(key);
  const p = join(L10N_DIR, lang, `${unit}.json`);
  const v = existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : null;
  cache.set(key, v);
  return v;
}

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
/**
 * 按英文模板的结构叠上译文：键、数组长度都以英文为准；译文里有、类型对、不是空字符串的值才用，否则用英文。
 * 所以翻了一半的语言也能构建，没翻的地方显示英文。
 */
export function overlay(en, tr) {
  if (Array.isArray(en)) return en.map((e, i) => overlay(e, Array.isArray(tr) ? tr[i] : undefined));
  if (isObj(en)) {
    const out = {};
    for (const k of Object.keys(en)) out[k] = overlay(en[k], isObj(tr) ? tr[k] : undefined);
    return out;
  }
  if (typeof en === "string") return typeof tr === "string" && tr.trim() ? tr : en;
  return tr !== undefined && tr !== null && typeof tr === typeof en ? tr : en;
}

/** 把「Lesson {n} of {total}」里的 {名字} 换成值 */
export const fmt = (s, vars = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));

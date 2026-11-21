// 常见问题的语言叠加：中文 faq.js，英文 faq.en.js（同样的组、顺序、条数），
// 另外 8 种语言叠 src/l10n/<语言>/faq.json（结构见 faqTemplate，缺的键用英文）。
import { FAQ } from "./faq.js";
import { FAQ_EN } from "./faq.en.js";
import { load, overlay } from "../l10n/load.js";

/** 翻译模板（src/l10n/en/faq.json）：按组的 id，每组 title 和 items（[问, 答]） */
export const faqTemplate = () => Object.fromEntries(FAQ_EN.map((g) => [g.id, { title: g.title, items: g.items }]));
const cache = {};
export const faqFor = (lang) => {
  if (lang === "zh") return FAQ;
  if (lang === "en") return FAQ_EN;
  const u = (cache[lang] ??= overlay(faqTemplate(), load(lang, "faq")));
  return FAQ_EN.map((g) => ({ ...g, title: u[g.id].title, items: u[g.id].items }));
};

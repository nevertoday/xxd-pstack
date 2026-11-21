// Wiki 的语言叠加。结构、顺序、see/step/howto 都来自 wiki.js；英文文字叠 wiki.en.js；
// 另外 8 种语言叠 src/l10n/<语言>/wiki.json（结构见 wikiTemplate，缺的键用英文）。
import { WIKI, WIKI_GROUPS } from "./wiki.js";
import { WIKI_EN, WIKI_GROUPS_EN } from "./wiki.en.js";
import { load, overlay } from "../l10n/load.js";

/** 翻译模板（src/l10n/en/wiki.json）：groups 按 WIKI_GROUPS 的顺序；entries 按 slug，只有文字字段 */
export const wikiTemplate = () => ({
  groups: WIKI_GROUPS.map((g) => WIKI_GROUPS_EN[g]),
  entries: Object.fromEntries(WIKI.map((w) => { const { group, ...text } = WIKI_EN[w.slug]; return [w.slug, text]; })),
});
const cache = {};
const unit = (lang) => (cache[lang] ??= overlay(wikiTemplate(), load(lang, "wiki")));

/** 分组名：中文分组名是键 */
export const wikiGroupName = (g, lang) =>
  lang === "zh" ? g : lang === "en" ? WIKI_GROUPS_EN[g] : unit(lang).groups[WIKI_GROUPS.indexOf(g)];
/** 一个条目在某种语言里的样子（group 仍是中文键，显示用 wikiGroupName） */
export const wikiEntry = (w, lang) => {
  if (lang === "zh") return w;
  if (lang === "en") { const { group, ...text } = WIKI_EN[w.slug]; return { ...w, ...text }; }
  return { ...w, ...unit(lang).entries[w.slug] };
};
export const wikiFor = (lang) => ({ items: WIKI.map((w) => wikiEntry(w, lang)) });

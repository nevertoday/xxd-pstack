// 技能详情页的语言叠加。源数据 src/data/skill-docs/<名>.json 里有原文（en）、中文（zh）、写法（lessons）、概览（brief）；
// 另外 8 种语言一个技能一个文件：src/l10n/<语言>/skill-docs/<名>.json，结构见 skillDocTemplate，缺的键用英文。
import { load, overlay } from "../l10n/load.js";

/**
 * 翻译模板（src/l10n/en/skill-docs/<名>.json）：
 *   description：frontmatter 的说明；brief：概览（compare 3 行、intro、sections 每节一句）；
 *   lessons：写法，quote 是原文里的原句（不翻，保持英文），quoteTr 是它的译文；
 *   blocks：全文按空行切成的块，一块一条，代码和命令原样保留。
 */
export const skillDocTemplate = (d) => ({
  description: d.description.en,
  ...(d.brief?.en ? { brief: d.brief.en } : {}),
  lessons: (d.lessons || []).map((l) => ({ quote: l.quote, quoteTr: l.quote, ...l.en })),
  blocks: d.blocks.map((b) => b.en),
});
const cache = {};
/** 某个技能文档在另外 8 种语言里的样子（d 是 src/data/skill-docs/<名>.json 的内容） */
export const skillDocFor = (d, lang) => (cache[`${lang}/${d.name}`] ??= overlay(skillDocTemplate(d), load(lang, `skill-docs/${d.name}`)));

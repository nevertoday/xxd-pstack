// 图示的语言叠加：中文、英文在 figs.js 各图的 zh / en；另外 8 种语言在 src/l10n/<语言>/figs.json，
// 结构见 figsTemplate（ui 是图下面按钮的文字，其余按图的 id），缺的键用英文。
import { FIGS, FIG_UI } from "./figs.js";
import { load, overlay } from "../l10n/load.js";

export const figsTemplate = () => ({ ui: FIG_UI.en, ...Object.fromEntries(Object.entries(FIGS).map(([id, f]) => [id, f.en])) });
const cache = {};
export const figsFor = (lang) => (cache[lang] ??= overlay(figsTemplate(), load(lang, "figs")));

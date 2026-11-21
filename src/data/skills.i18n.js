// 技能速查的语言叠加：英文时把 skills.en.js 的文字盖在 skills.js 上（结构、顺序、auto/manual 都来自 skills.js）；
// 另外 8 种语言叠 src/l10n/<语言>/skills.json（结构见 skillsTemplate，缺的键用英文）。
import { SKILLS } from "./skills.js";
import { SKILLS_EN, SKILL_GROUPS_EN } from "./skills.en.js";
import { load, overlay } from "../l10n/load.js";

/** 翻译模板（src/l10n/en/skills.json）：groups 按组 id；skills 按技能名，one 是一句话（skills.js 里叫 zh） */
export const skillsTemplate = () => ({
  groups: Object.fromEntries(SKILLS.map((g) => [g.id, SKILL_GROUPS_EN[g.id]])),
  skills: Object.fromEntries(SKILLS.flatMap((g) => g.items.map((s) => {
    const { zh, ...rest } = SKILLS_EN[s.name];
    return [s.name, { one: zh, ...rest }];
  }))),
});
const cache = {};
export const skillsFor = (lang) => {
  if (lang === "zh") return SKILLS;
  if (lang === "en") return SKILLS.map((g) => ({ ...g, title: SKILL_GROUPS_EN[g.id], items: g.items.map((s) => ({ ...s, ...SKILLS_EN[s.name] })) }));
  const u = (cache[lang] ??= overlay(skillsTemplate(), load(lang, "skills")));
  return SKILLS.map((g) => ({ ...g, title: u.groups[g.id], items: g.items.map((s) => { const { one, ...rest } = u.skills[s.name]; return { ...s, ...rest, zh: one }; }) }));
};

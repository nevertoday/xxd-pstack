// 技能速查的语言叠加：英文时把 skills.en.js 的文字盖在 skills.js 上（结构、顺序、auto/manual 都来自 skills.js）
import { SKILLS } from "./skills.js";
import { SKILLS_EN, SKILL_GROUPS_EN } from "./skills.en.js";
export const skillsFor = (lang) =>
  lang === "en"
    ? SKILLS.map((g) => ({ ...g, title: SKILL_GROUPS_EN[g.id], items: g.items.map((s) => ({ ...s, ...SKILLS_EN[s.name] })) }))
    : SKILLS;

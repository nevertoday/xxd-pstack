// 把一份 SKILL.md（skill-docs/<名>.json 里的 blocks）切成「开头 + 几节」，技能页的「文档写了什么」和全文的跳转都用它。
// 一节从二级标题开始；二级标题不到两个的，三级标题也算一节。一级标题（技能名）不算。
// brief.*.sections 的条数要和这里切出来的节数一样（skill-docs.mjs check 会查）。
export function skillSections(blocks) {
  const level = (b) => (b.en.match(/^(#{1,6}) /) || [])[1]?.length || 0;
  const h2 = blocks.filter((b) => level(b) === 2).length;
  const starts = (b) => level(b) === 2 || (h2 < 2 && level(b) === 3);
  // 标题里自带的「1.」「Step 1.」「第 1 步：」去掉，页面自己编号
  const strip = (s) => (s || "").replace(/^#{1,6}\s+/, "").replace(/`/g, "").replace(/^(Step\s+\d+[.:]|第\s*\d+\s*步[：:.]|\d+[.、])\s*/i, "").trim();
  const words = (s) => (s.match(/[A-Za-z0-9'’-]+/g) || []).length;
  const intro = { blocks: [], words: 0 };
  const sections = [];
  blocks.forEach((b, i) => {
    if (level(b) === 1) return;
    if (starts(b)) sections.push({ index: i, en: strip(b.en), zh: strip(b.zh) || strip(b.en), words: 0 });
    else (sections.at(-1) || intro).words += words(b.en);
    if (!sections.length) intro.blocks.push(i);
  });
  const total = blocks.reduce((n, b) => n + words(b.en), 0);
  return { intro, sections, total };
}

// 极简行内格式：**粗体**、==荧光笔==、++粗墨线++、`代码`、[文字](https://网址) 和站内链接 [文字](/路径/)。
// 只用于站内自己写的数据（Wiki、FAQ、技能速查），先转义再替换。站内链接的子路径前缀由 scripts/base-links.mjs 在构建后补。
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/==(.+?)==/g, "<mark>$1</mark>")
    .replace(/\+\+(.+?)\+\+/g, "<u>$1</u>")
    .replace(/`([^`]+)`/g, '<code class="xxd-code-inline">$1</code>')
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a class="xxd-link" href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a class="xxd-link" href="$2">$1</a>');

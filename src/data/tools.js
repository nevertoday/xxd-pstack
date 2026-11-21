// 命令写法：同一个技能，不同工具里打法不一样。
// Claude Code 用插件装的，技能都挂在插件名下：/pstack:poteto-mode（官方文档：插件的每个组件都以插件名为命名空间）。
// Cursor、用 npx skills 装的：/poteto-mode。Codex：$poteto-mode。
// 正文里一律写成 Claude Code 的样子（默认），构建后由 scripts/skill-cmds.mjs 把每个技能命令包成 <span class="sk">，
// 读者在「我用的工具」里换了工具，Site.astro 里的脚本就把它们换成那个工具的写法，复制按钮复制出来的也跟着变。
import { SKILLS } from "./skills.js";

export const SKILL_NAMES = SKILLS.flatMap((g) => g.items.map((s) => s.name));

// [值, 名字（不翻译）, 例子]
export const TOOLS = [
  ["cc", "Claude Code", "/pstack:poteto-mode"],
  ["cursor", "Cursor", "/poteto-mode"],
  ["codex", "Codex", "$poteto-mode"],
  ["bare", null, "/poteto-mode"],
];
export const TOOL_DEFAULT = "cc";
export const TOOL_KEY = "xxd-pstack-tool";

export const cmdFor = (name, tool) => (tool === "codex" ? "$" : tool === "cc" ? "/pstack:" : "/") + name;

// 界面文字（「我用的工具」那一组的标题、说明，bare 那一项的名字）在 src/data/ui.js 的 tool 里

// 旧的命令，留着照样能用：等于 node scripts/l10n.mjs check [语言]（规则写在 scripts/l10n-check.mjs 开头）。
//   node scripts/check-i18n.mjs ja        只查日语
//   node scripts/check-i18n.mjs           另外 8 种语言全部查
import { check } from "./l10n-check.mjs";
import { L10N_LANGS } from "../src/l10n/load.js";
process.exit(await check(process.argv[2] ? [process.argv[2]] : L10N_LANGS));

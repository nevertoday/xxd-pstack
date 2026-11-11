// 非全站语言（日、韩、西、葡、法、德、俄、阿）的界面文字和首页、新手入门的文字。
// base.js 是英文底稿，也是兜底：某种语言缺了哪个键，就显示英文。每种语言一个文件，结构和 base.js 一样。
// 全站语言（中文、英文）的文字还在各组件里，不走这里。
import BASE from "./base.js";
import ja from "./ja.js";
import ko from "./ko.js";
import es from "./es.js";
import pt from "./pt.js";
import fr from "./fr.js";
import de from "./de.js";
import ru from "./ru.js";
import ar from "./ar.js";

export const EXTRA = { ja, ko, es, pt, fr, de, ru, ar };

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
const merge = (a, b) => {
  const out = { ...a };
  for (const [k, v] of Object.entries(b || {})) out[k] = isObj(v) && isObj(a[k]) ? merge(a[k], v) : v;
  return out;
};
const cache = {};
/** 某种非全站语言的全部文字（缺的用英文补上）；中文、英文返回 null */
export const X = (lang) => (EXTRA[lang] ? (cache[lang] ??= merge(BASE, EXTRA[lang])) : null);
/** 把「Lesson {n} of {total}」里的 {名字} 换成值 */
export const fmt = (s, vars = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));

#!/usr/bin/env python3
"""生成 README 用的插画和 SVG 动画（assets/*.svg）。

配色、字体、圆角沿用 ghostty-tint 的 README 插画：纸色底、白卡、暖墨字、一组低饱和色块。
动画只用 SVG 自带的 <animate>（SMIL），GitHub 的 README 里能直接播放，不需要脚本。
用法：python3 tools/build_assets.py   （改了文字或颜色后重跑一次）
"""
from pathlib import Path
from xml.sax.saxutils import escape

OUT = Path(__file__).resolve().parent.parent / "assets"
OUT.mkdir(exist_ok=True)

# ---------- 配色（与 ghostty-tint 一致） ----------
PAPER = "#F1EFEA"   # 画布底
CARD = "#FBFAF8"    # 卡片
LINE = "#E2DED6"    # 卡片描边
LINE2 = "#D9D6CE"
INK = "#2B2A27"     # 正文
MUTED = "#8A867D"   # 次要文字
ROSE, SAGE, APRICOT, LILAC, MINT, SKY = "#EBD6D3", "#DDE7D3", "#EFDFC9", "#E0DAEA", "#D5EFE5", "#D7E2EC"
TERM = "#1A1A1A"    # 终端窗口
TERM_FG = "#E6E4DC"
TERM_MUTED = "#8A867D"
OK = "#5E8C61"      # 低饱和的绿，用在勾上
BAD = "#B5655B"     # 低饱和的红

SANS = "-apple-system,BlinkMacSystemFont,'PingFang SC','Hiragino Sans GB','Noto Sans CJK SC','Microsoft YaHei',sans-serif"
MONO = "ui-monospace,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace"


def t(x, y, s, size=14, fill=INK, weight=400, font=SANS, anchor="start", extra=""):
    return (f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}" {extra}>{escape(s)}</text>')


def rect(x, y, w, h, fill, rx=0, stroke=None, extra=""):
    st = f' stroke="{stroke}"' if stroke else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"{st} {extra}/>'


def svg(w, h, label, body, defs=""):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" '
            f'aria-label="{escape(label)}">\n<defs>{defs}</defs>\n{rect(0, 0, w, h, PAPER, 22)}\n{body}\n</svg>\n')


def appear(t_in, t_out, total, base=0.0):
    """在一个循环（total 秒）里：t_in 秒淡入、t_out 秒淡出。返回 <animate> 片段。"""
    k = lambda v: f"{max(0.0, min(1.0, v / total)):.4f}"
    fade = 0.35
    times = ["0", k(t_in), k(t_in + fade), k(t_out), k(min(t_out + fade, total)), "1"]
    vals = [base, base, 1, 1, base, base]
    return (f'<animate attributeName="opacity" dur="{total}s" repeatCount="indefinite" '
            f'keyTimes="{";".join(times)}" values="{";".join(str(v) for v in vals)}"/>')


def write(name, content):
    (OUT / name).write_text(content, encoding="utf-8")
    print(f"✓ assets/{name}  {len(content.encode()) // 1024} KB")


# ---------- 1. hero：一句话 → 待办清单逐项打勾 → 证据卡（循环 14 秒） ----------
def hero():
    W, H, T = 960, 480, 14.0
    x0, y0, ww, wh = 48, 36, 864, 390
    body = [f'<rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="12" fill="#000" opacity=".9" filter="url(#sh)"/>',
            '<g clip-path="url(#win)">', rect(x0, y0, ww, wh, TERM), rect(x0, y0, ww, 34, "#2A2926")]
    for i, c in enumerate(["#FF5F57", "#FEBC2E", "#28C840"]):
        body.append(f'<circle cx="{68 + i * 20}" cy="{y0 + 17}" r="6" fill="{c}"/>')
    body.append(t(W / 2, y0 + 22, "Claude Code · my-chrome-extension", 12, TERM_MUTED, font=MONO, anchor="middle"))

    # 提示词：逐字打出（用一块遮罩从左往右揭开）
    prompt = "/poteto-mode 收藏列表刷新后偶尔会重复。先复现，再修，再验证。"
    py = y0 + 78
    body.append(t(x0 + 28, py, "›", 18, "#D7B9C8", 700, MONO))
    body.append(f'<g clip-path="url(#typing)">{t(x0 + 50, py, prompt, 16, TERM_FG, 500, MONO)}</g>')
    # 光标
    body.append(f'<rect x="{x0 + 50}" y="{py - 15}" width="9" height="19" fill="#D7B9C8">'
                f'<animate attributeName="x" dur="{T}s" repeatCount="indefinite" keyTimes="0;0.02;0.2;1" '
                f'values="{x0 + 50};{x0 + 50};{x0 + 50 + 500};{x0 + 50 + 500}"/>'
                f'<animate attributeName="opacity" dur="1s" repeatCount="indefinite" values="1;1;0;0" keyTimes="0;0.5;0.5;1"/></rect>')

    # 复述目标
    body.append(f'<g opacity="0">{appear(3.2, 13.2, T)}'
                + t(x0 + 50, py + 40, "目标：收藏不重复。匹配到「修 bug」剧本，步骤已抄进待办清单。", 13.5, TERM_MUTED, font=MONO)
                + "</g>")
    # 待办清单
    steps = [("复现", "连点十次收藏，storage 里出现 2 条", ROSE),
             ("找根因", "/how：两次点击并发写入，没加判断就 push", APRICOT),
             ("修", "在写入处去重，而不是在列表里藏起来", SAGE),
             ("验证", "再连点十次：storage 里只有 1 条", MINT),
             ("开 PR", "复现提交在前，修复提交在后", LILAC)]
    for i, (name, note, col) in enumerate(steps):
        y = py + 82 + i * 42
        tin = 4.0 + i * 1.1
        body.append(f'<g opacity="0">{appear(tin, 13.2, T)}')
        body.append(rect(x0 + 50, y - 20, 24, 24, "none", 5, "#55524B", 'stroke-width="1.5"'))
        body.append(f'<path d="M{x0 + 56},{y - 8} l5,5 l8,-10" fill="none" stroke="{col}" stroke-width="2.4" '
                    f'stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20" stroke-dashoffset="20">'
                    f'<animate attributeName="stroke-dashoffset" dur="{T}s" repeatCount="indefinite" '
                    f'keyTimes="0;{(tin + 0.5) / T:.4f};{(tin + 0.9) / T:.4f};1" values="20;20;0;0"/></path>')
        body.append(t(x0 + 88, y - 2, name, 15, col, 700, SANS))
        body.append(t(x0 + 160, y - 2, note, 13.5, TERM_FG, 400, MONO))
        body.append("</g>")

    # 证据卡
    cx, cy = x0 + 560, py + 40
    body.append(f'<g opacity="0">{appear(10.0, 13.2, T)}')
    body.append(rect(cx, cy, 250, 150, "#24231F", 10, "#3A3833"))
    body.append(t(cx + 18, cy + 30, "证据", 13, "#D7B9C8", 700, SANS))
    body.append(t(cx + 18, cy + 64, "修之前", 13, TERM_MUTED, 400, SANS))
    body.append(t(cx + 232, cy + 64, "2 条", 20, BAD, 700, MONO, "end"))
    body.append(t(cx + 18, cy + 98, "修之后", 13, TERM_MUTED, 400, SANS))
    body.append(t(cx + 232, cy + 98, "1 条", 20, "#9CC59E", 700, MONO, "end"))
    body.append(t(cx + 18, cy + 132, "prove it works ✓", 12.5, TERM_FG, 500, MONO))
    body.append("</g></g>")

    # 底部说明
    body.append(t(W / 2, H - 22, "说清楚目标和怎么算做完，剩下的它按资深工程师的规矩来：先复现、找根因、修、拿证据。", 14, MUTED, anchor="middle"))
    defs = (f'<clipPath id="win"><rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="12"/></clipPath>'
            f'<clipPath id="typing"><rect x="{x0 + 50}" y="{py - 22}" height="30" width="0">'
            f'<animate attributeName="width" dur="{T}s" repeatCount="indefinite" keyTimes="0;0.02;0.2;1" values="0;0;500;500"/>'
            f'</rect></clipPath>'
            '<filter id="sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#3A3326" flood-opacity=".16"/></filter>')
    write("hero.svg", svg(W, H, "演示：输入一句 /poteto-mode 提示词，AI 列出修 bug 的步骤并逐项打勾，最后给出修前修后的证据", "\n".join(body), defs))


# ---------- 2. before-after：不用 pstack / 用 pstack ----------
def before_after():
    W, H = 960, 400
    body = []
    cols = [("不用 pstack", ROSE, [("改代码", True), ("复现", False), ("读懂代码", False), ("找根因", False), ("验证", False)],
             "「已修复，应该没问题了。」", "你一跑，还是两条。", BAD),
            ("用 pstack", SAGE, [("复现", True), ("读懂代码", True), ("找根因", True), ("修", True), ("验证", True)],
             "修之前 2 条 → 修之后 1 条", "证据贴在回复里，你自己能查。", OK)]
    for i, (title, col, steps, say, foot, accent) in enumerate(cols):
        x = 32 + i * 456
        body.append(rect(x, 28, 440, 344, CARD, 14, LINE))
        body.append(f'<g clip-path="url(#c{i})">{rect(x, 28, 440, 50, col)}</g>')
        body.append(t(x + 22, 60, title, 18, INK, 700))
        for j, (s, done) in enumerate(steps):
            y = 112 + j * 36
            if done:
                body.append(f'<circle cx="{x + 34}" cy="{y - 5}" r="9" fill="{accent}" opacity=".16"/>')
                body.append(f'<path d="M{x + 29},{y - 5} l4,4 l7,-8" fill="none" stroke="{accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>')
                body.append(t(x + 54, y, s, 15, INK, 600))
            else:
                body.append(f'<circle cx="{x + 34}" cy="{y - 5}" r="9" fill="none" stroke="{LINE2}" stroke-width="1.5"/>')
                body.append(t(x + 54, y, s, 15, MUTED, 400, extra='text-decoration="line-through"'))
                body.append(t(x + 150, y, "跳过", 12, MUTED, 400, MONO))
        body.append(rect(x + 22, 296, 396, 56, PAPER, 10))
        body.append(t(x + 38, 320, say, 15, accent, 700, MONO if i else SANS))
        body.append(t(x + 38, 341, foot, 12.5, MUTED))
    defs = "".join(f'<clipPath id="c{i}"><rect x="{32 + i * 456}" y="28" width="440" height="344" rx="14"/></clipPath>' for i in range(2))
    write("before-after.svg", svg(W, H, "对比：不用 pstack 时 AI 直接改代码、跳过复现和验证；用 pstack 时五步都做，并给出修前修后的证据", "\n".join(body), defs))


# ---------- 3. how：四步（连线上有小点跑过） ----------
def how():
    W, H, T = 960, 270, 4.8
    cards = [("01", "你说一句话", "目标 + 怎么算做完", "「先复现，再修，再验证」", ROSE),
             ("02", "/poteto-mode", "从 23 套剧本里挑一套", "步骤抄进待办清单", APRICOT),
             ("03", "按步骤调技能", "/how · /architect 等", "活多就派子代理", SAGE),
             ("04", "带证据交回来", "命令输出 · 截图 · 前后对比", "验证不了就说「说不准」", LILAC)]
    body, defs = [], []
    cw, gap = 204, 22
    x = (W - (cw * 4 + gap * 3)) / 2
    for i, (n, h, mono, sub, col) in enumerate(cards):
        cx = x + i * (cw + gap)
        defs.append(f'<clipPath id="h{i}"><rect x="{cx}" y="28" width="{cw}" height="190" rx="14"/></clipPath>')
        body.append(rect(cx, 28, cw, 190, CARD, 14, LINE))
        body.append(f'<g clip-path="url(#h{i})">{rect(cx, 28, cw, 48, col)}</g>')
        body.append(t(cx + 16, 60, n, 15, INK, 700, MONO, extra='opacity=".55"'))
        body.append(t(cx + 16, 108, h, 18, INK, 700))
        body.append(t(cx + 16, 140, mono, 12, INK, 400, MONO))
        body.append(t(cx + 16, 180, sub, 12.5, MUTED))
        if i < 3:
            ax = cx + cw + 3
            body.append(f'<path d="M{ax},{123} L{ax + gap - 6},{123}" stroke="{MUTED}" stroke-width="1.6" stroke-linecap="round"/>')
            body.append(f'<path d="M{ax + gap - 11},{118} L{ax + gap - 6},{123} L{ax + gap - 11},{128}" fill="none" stroke="{MUTED}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>')
            begin = i * T / 3
            body.append(f'<circle cx="{ax}" cy="123" r="3" fill="{INK}" opacity="0">'
                        f'<animate attributeName="cx" dur="{T}s" begin="{begin:.2f}s" repeatCount="indefinite" keyTimes="0;0.2;1" values="{ax};{ax + gap - 8};{ax + gap - 8}"/>'
                        f'<animate attributeName="opacity" dur="{T}s" begin="{begin:.2f}s" repeatCount="indefinite" keyTimes="0;0.03;0.17;0.2;1" values="0;1;1;0;0"/></circle>')
    body.append(t(W / 2, 252, "每个任务都走这四步。中间两步你不用管，但在待办清单里看得一清二楚。", 13.5, MUTED, anchor="middle"))
    write("how.svg", svg(W, H, "pstack 怎么干活：你说一句话、/poteto-mode 挑剧本、按步骤调技能、带证据交回来", "\n".join(body), "".join(defs)))


# ---------- 4. skills：技能地图 ----------
def skills():
    groups = [("入口", ROSE, ["poteto-mode", "poteto-help", "setup-pstack"]),
              ("先听懂你", APRICOT, ["in-your-own-words", "sharpen"]),
              ("看懂代码", SKY, ["how", "why", "teach", "recall"]),
              ("设计和把关", LILAC, ["architect", "arena", "swarm", "interrogate", "blast-radius", "figure-it-out"]),
              ("动手和清理", SAGE, ["tdd", "typescript-best-practices", "unslop", "no-comments", "technical-writing"]),
              ("验证", MINT, ["create-verification-skill", "maintain-verification-skill", "create-formal-verification-skill", "maintain-formal-verification-skill", "statechart", "benchmark-checklist"]),
              ("汇报和复盘", "#F2DCE4", ["bro", "ketchup", "ketchup-video", "show-me-your-work", "reflect", "correct", "automate-me"]),
              ("原则 × 24", "#E6E4DC", ["prove it works", "fix root causes", "subtract before you add", "laziness protocol", "…还有 20 条"])]
    W = 960
    colw, gap = 210, 20
    x0 = (W - (colw * 4 + gap * 3)) / 2
    body, defs = [], []
    # 太长的技能名在连字符处折成两行（第二行缩进），卡片高度按实际行数算
    def lines_of(label):
        if len(label) <= 26:
            return [label]
        cut = label.rfind("-", 0, 24) + 1
        return [label[:cut], "  " + label[cut:]]
    labels = [[lines_of(s if i == 7 else "/" + s) for s in g[2]] for i, g in enumerate(groups)]
    heights = [56 + sum(len(l) for l in ls) * 22 + len(ls) * 5 for ls in labels]
    rh = [max(heights[:4]), max(heights[4:])]
    H = 28 + rh[0] + 20 + rh[1] + 62
    for i, (name, col, items) in enumerate(groups):
        r, c = divmod(i, 4)
        x = x0 + c * (colw + gap)
        y = 28 + (0 if r == 0 else rh[0] + 20)
        h = rh[r]
        defs.append(f'<clipPath id="s{i}"><rect x="{x}" y="{y}" width="{colw}" height="{h}" rx="14"/></clipPath>')
        body.append(rect(x, y, colw, h, CARD, 14, LINE))
        body.append(f'<g clip-path="url(#s{i})">{rect(x, y, colw, 44, col)}</g>')
        body.append(t(x + 16, y + 28, name, 15, INK, 700))
        body.append(t(x + colw - 16, y + 28, str(len(items)) if i < 7 else "", 12, INK, 700, MONO, "end", 'opacity=".5"'))
        yy = y + 70
        for j, ls in enumerate(labels[i]):
            for k, line in enumerate(ls):
                body.append(t(x + 16, yy, line, 12, INK if k == 0 else MUTED, 600 if (i == 0 and j == 0) else 400, MONO))
                yy += 22
            yy += 5
    body.append(t(W / 2, H - 24, "34 个技能 + 24 条原则。平时只打 /poteto-mode，其他的它在需要时自己叫上。", 13.5, MUTED, anchor="middle"))
    write("skills.svg", svg(W, int(H), "pstack 技能地图：34 个技能分七类，外加 24 条原则", "\n".join(body), "".join(defs)))


# ---------- 5. overnight：一晚上的循环（小点绕圈） ----------
def overnight():
    import math
    W, H, T = 960, 420, 8.0
    cx, cy, R = 300, 205, 128
    nodes = [("检查完成条件", ROSE), ("最小的改动", APRICOT), ("对照真实产物验证", SAGE), ("提交 / 丢弃", SKY), ("日志里记一行", LILAC)]
    body = [f'<circle cx="{cx}" cy="{cy}" r="{R}" fill="none" stroke="{LINE2}" stroke-width="1.6" stroke-dasharray="3 6"/>']
    for i, (s, col) in enumerate(nodes):
        a = -math.pi / 2 + i * 2 * math.pi / len(nodes)
        x, y = cx + R * math.cos(a), cy + R * math.sin(a)
        w = 26 + len(s) * 14
        on = f'<animate attributeName="stroke" dur="{T}s" begin="{i * T / 5:.2f}s" repeatCount="indefinite" keyTimes="0;0.04;0.16;0.2;1" values="{LINE};{INK};{INK};{LINE};{LINE}"/>'
        body.append(f'<rect x="{x - w / 2}" y="{y - 17}" width="{w}" height="34" rx="17" fill="{col}" stroke="{LINE}" stroke-width="1.5">{on}</rect>')
        body.append(t(x, y + 5, s, 13.5, INK, 600, anchor="middle"))
    body.append(f'<circle r="5" fill="{INK}"><animateMotion dur="{T}s" repeatCount="indefinite" '
                f'path="M{cx},{cy - R} a{R},{R} 0 1,1 -0.01,0"/></circle>')
    body.append(t(cx, cy - 6, "每一轮", 13, MUTED, anchor="middle"))
    body.append(t(cx, cy + 18, "一次改动 · 一次检查 · 一行日志", 13.5, INK, 600, anchor="middle"))
    # 右边：睡前合同 + 早上
    rx = 560
    body.append(rect(rx, 44, 360, 196, "#1A1A1A", 12))
    lines = [("/poteto-mode 我要去睡了。", "#D7B9C8"), ("从 main 新开一个 worktree，", TERM_FG), ("把调用方迁到新的解析器。", TERM_FG),
             ("完成：旧调用方 0 个，测试全过。", "#9CC59E"), ("记决策日志。提交前不用问我。", TERM_FG), ("/loop 直到完成；卡住就写清原因。", "#EFDFC9")]
    for i, (s, c) in enumerate(lines):
        body.append(t(rx + 20, 78 + i * 27, s, 13, c, 500 if i == 0 else 400, MONO))
    body.append(rect(rx, 258, 360, 112, CARD, 12, LINE))
    body.append(t(rx + 20, 288, "☀ 第二天早上", 14, INK, 700))
    body.append(t(rx + 20, 316, "/show-me-your-work 讲讲昨晚做了什么", 12.5, INK, 400, MONO))
    body.append(t(rx + 20, 346, "先读「需要注意」，再看它指向的那几行日志。", 12.5, MUTED))
    write("overnight.svg", svg(W, H, "放手让 AI 跑一晚上：每一轮检查完成条件、做最小改动、验证、提交或丢弃、记一行日志；早上看决策日志", "\n".join(body)))


# ---------- 6. social：GitHub 分享大图 / 网站 og:image（1280×640，静态） ----------
def social():
    W, H = 1280, 640
    b = [f'<rect width="{W}" height="{H}" fill="{PAPER}"/>']
    # 本站标志：暖黑方块里三根错开叠下去的横条
    mx, my, ms = 84, 92, 64
    u = ms / 20
    b.append(rect(mx, my, ms, ms, INK, 8))
    for i, op in enumerate([1, .62, .32]):
        b.append(f'<rect x="{mx + (4 + i * 1.5) * u}" y="{my + (4 + i * 4.5) * u}" width="{9 * u}" height="{3 * u}" fill="{CARD}" opacity="{op}"/>')
    b.append(t(mx + ms + 22, my + 47, "pstack", 54, INK, 700, MONO, extra='letter-spacing="-1"'))
    b.append(t(84, 262, "新手教程", 64, INK, 700))
    b.append(t(84, 338, "让 AI 写代码像个靠谱的", 34, INK, 600))
    b.append(t(84, 386, "资深工程师。", 34, INK, 600))
    # 荧光笔：先搞懂，再动手，拿出证据
    b.append(rect(80, 422, 446, 24, "#F2C46B", 0, extra='opacity=".55"'))
    b.append(t(84, 440, "先搞懂，再动手，拿出证据。", 34, INK, 700))
    b.append(t(84, 512, "主线 9 步 · 技能速查 34 个 · How-to 17 篇 · 说人话", 20, MUTED))
    b.append(t(84, 560, "pstack.xiaoxiaodong.ai", 24, INK, 600, MONO))
    # 右边：终端卡片（hero 动画的最后一帧）
    x0, y0, ww, wh = 700, 150, 500, 340
    b.append(f'<rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="14" fill="#000" opacity=".9" filter="url(#ssh)"/>')
    b.append(f'<g clip-path="url(#sw)">{rect(x0, y0, ww, wh, TERM)}{rect(x0, y0, ww, 36, "#2A2926")}')
    for i, c in enumerate(["#FF5F57", "#FEBC2E", "#28C840"]):
        b.append(f'<circle cx="{x0 + 22 + i * 20}" cy="{y0 + 18}" r="6" fill="{c}"/>')
    b.append(t(x0 + 22, y0 + 76, "›", 18, "#D7B9C8", 700, MONO))
    b.append(t(x0 + 42, y0 + 76, "/poteto-mode 收藏会重复。", 16, TERM_FG, 600, MONO))
    b.append(t(x0 + 42, y0 + 100, "先复现，再修，再验证。", 16, TERM_FG, 600, MONO))
    steps = [("复现", ROSE), ("找根因", APRICOT), ("修", SAGE), ("验证", MINT), ("开 PR", LILAC)]
    for i, (name, col) in enumerate(steps):
        y = y0 + 148 + i * 38
        b.append(rect(x0 + 42, y - 18, 22, 22, "none", 5, "#55524B", 'stroke-width="1.5"'))
        b.append(f'<path d="M{x0 + 47},{y - 7} l5,5 l8,-10" fill="none" stroke="{col}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>')
        b.append(t(x0 + 78, y, name, 16, col, 700))
    cx, cy = x0 + 250, y0 + 140
    b.append(rect(cx, cy, 214, 150, "#24231F", 10, "#3A3833"))
    b.append(t(cx + 18, cy + 30, "证据", 14, "#D7B9C8", 700))
    b.append(t(cx + 18, cy + 66, "修之前", 14, TERM_MUTED))
    b.append(t(cx + 196, cy + 66, "2 条", 22, BAD, 700, MONO, "end"))
    b.append(t(cx + 18, cy + 102, "修之后", 14, TERM_MUTED))
    b.append(t(cx + 196, cy + 102, "1 条", 22, "#9CC59E", 700, MONO, "end"))
    b.append(t(cx + 18, cy + 134, "prove it works ✓", 13, TERM_FG, 500, MONO))
    b.append("</g>")
    defs = (f'<clipPath id="sw"><rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="14"/></clipPath>'
            '<filter id="ssh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#3A3326" flood-opacity=".20"/></filter>')
    content = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">\n'
               f'<defs>{defs}</defs>\n' + "\n".join(b) + "\n</svg>\n")
    write("social.svg", content)


if __name__ == "__main__":
    hero()
    before_after()
    how()
    skills()
    overnight()
    social()

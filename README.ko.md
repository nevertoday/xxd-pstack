<div align="center">

# pstack 입문 가이드

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · **한국어** · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### AI는 "고쳤습니다"라고 합니다. 열어 보면 여전히 고장 나 있습니다.

[pstack](https://github.com/backnotprop/pstack)은 AI가 "다 됐습니다"라고 말하기 전에 직접 돌려 보게 만듭니다.<br>이 가이드는 pstack을 쉬운 말로 설명합니다. 코드를 한 번도 안 써 봤어도 배울 수 있습니다.

<a href="https://pstack.xiaoxiaodong.ai/ko/start/1-why/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ko-1-dark.svg"><img src="assets/doors/ko-1.svg" height="92" alt="코딩은 처음: 입문 3강 · 20분"></picture></a> <a href="https://pstack.xiaoxiaodong.ai/en/guide/0-what/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ko-2-dark.svg"><img src="assets/doors/ko-2.svg" height="92" alt="코드를 쓴다면: 9단계 전체 가이드(영어)"></picture></a> <a href="https://pstack.xiaoxiaodong.ai/en/skills/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ko-3-dark.svg"><img src="assets/doors/ko-3.svg" height="92" alt="프롬프트 배우기: 34개 스킬 해부(영어)"></picture></a>

<sub>무료 · 오픈 소스 · 10개 언어</sub>

![입문](https://img.shields.io/badge/%EC%9E%85%EB%AC%B8-3%EA%B0%95-8A9A8C?style=flat-square)
![가이드](https://img.shields.io/badge/%EA%B0%80%EC%9D%B4%EB%93%9C-9%EB%8B%A8%EA%B3%84-8A9A8C?style=flat-square)
![스킬](https://img.shields.io/badge/%EC%8A%A4%ED%82%AC-34%EA%B0%9C-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17%ED%8E%B8-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20%EA%B0%9C_%ED%95%AD%EB%AA%A9-9AA8C4?style=flat-square)
![언어](https://img.shields.io/badge/%EC%96%B8%EC%96%B4-10%EA%B0%9C-9AA8C4?style=flat-square)
![도구](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="데모: /poteto-mode 프롬프트 한 줄을 입력하면 AI가 버그 수정 단계를 나열하고 하나씩 체크한 뒤, 수정 전후의 증거를 보여 준다">
</p>

<p align="center">
  <a href="#-왜-필요한가">왜 필요한가</a> ·
  <a href="#-pstack은-좋지만-혼자-익히기는-어렵다">어려운 점</a> ·
  <a href="#-이-가이드가-도와주는-것">이 가이드의 장점</a> ·
  <a href="#-어떻게-일하나">작동 방식</a> ·
  <a href="#-3분-만에-시작하기">시작하기</a> ·
  <a href="#️-스킬-34개를-한-장에">스킬 맵</a> ·
  <a href="#-실제-프로젝트에서">실제 프로젝트</a> ·
  <a href="#-밤새-맡겨-두기">밤새 맡기기</a> ·
  <a href="#-로컬에서-실행하기">로컬 실행</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/ko/">온라인으로 읽기</a>
</p>

## 😵 왜 필요한가

AI로 코드를 써 봤다면 아마 이런 일을 겪어 봤을 겁니다.

- "수정했습니다, 이제 괜찮을 거예요"라고 합니다. 실행해 보면 여전히 고장 나 있습니다.
- "아직 안 돼요"라고 하면 "죄송합니다" 하고 다른 곳을 고칩니다. 다섯 번 주고받고 나면 오후가 통째로 사라집니다.
- 버튼 하나만 바꿔 달라고 했는데, 파일을 열 개 넘게 건드립니다.
- 새 대화를 열면 어제 빠졌던 구멍에 또 빠집니다.

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="비교: pstack 없이는 AI가 바로 코드를 고치고 재현과 검증을 건너뛴다. pstack을 쓰면 다섯 단계를 모두 거치고 수정 전후의 증거를 보여 준다">
</p>

모델이 멍청해서가 아닙니다. 방법 없이 일하기 때문입니다. 이해하지 못한 코드를 고치고, 돌려 보지도 않고 다 됐다고 합니다. pstack은 poteto(React 코어 팀 멤버, Cursor 재직)가 매일 직접 코드를 쓸 때 사용하는 Agent Skills 묶음입니다. **모델은 그대로입니다. 바뀌는 것은 일하는 순서와 기준입니다:**

| | 보통의 AI | pstack을 설치하면 |
|---|---|---|
| 손대기 전 | 바로 고친다 | 목표를 자기 말로 다시 설명하고, `/how`로 먼저 코드를 읽는다 |
| 버그 수정 | 겉에 조건문 하나 추가 | 먼저 버그를 다시 일으켜 보고, **처음 잘못되는 지점**을 찾은 뒤 고친다 |
| "다 됐다"고 할 때 | "이제 괜찮을 거예요" | 실제 명령 출력, 저장된 값, 전후 비교를 붙인다 |
| 코드 양 | 고칠수록 늘어난다 | 지울 수 있으면 지우고, 가장 작은 변경으로 해결한다 |
| 같은 실수 | 다음에 또 한다 | `/correct`로 저장소 자체를 고쳐서, 다음 AI가 같은 실수를 할 수 없게 한다 |
| 병렬 작업 | 여러 AI가 한 폴더를 두고 다툰다 | 각자 자기 worktree를 써서, 여러 개를 동시에 안심하고 돌린다 |

> [!NOTE]
> pstack은 도우미 AI를 더 많이 보내고 여러 모델이 서로의 결과를 따져 보게 하므로 **더 느리고 토큰도 더 씁니다**. 작은 변경에는 쓰지 마세요. 아끼는 방법은 [비용 줄이기](https://pstack.xiaoxiaodong.ai/en/howto/cost/)(영어)를 보세요.

## 🧗 pstack은 좋지만, 혼자 익히기는 어렵다

poteto는 pstack을 자기가 쓰려고 만들었습니다. 공식 문서는 읽는 사람이 이미 숙련된 엔지니어라고 가정합니다.

- **첫날부터 쏟아지는 이름**: 스킬 34개, 플레이북 23개, 원칙 24개, 전부 전문 용어입니다. 정말 필요한 건 어느 것일까요?
- **첫걸음이 안 보인다**: 어느 버전을 설치하지? 설정이 필요한가? 무슨 명령을 입력하지?
- **명령만 안다고 되는 게 아니다**: 프롬프트에 '완료'가 무엇인지 적지 않으면 여전히 엇나갑니다. 좀 더 꼼꼼하게 엇나갈 뿐이죠.
- **답을 읽을 수가 없다**: 길고 기술적입니다. 어느 줄이 중요하고 어디를 건너뛰어도 되는지 알 수 없습니다.

설치하고, 한 번 써 보고, "별 차이 없네" 하고 그만두는 사람이 많습니다.

## ✨ 이 가이드가 도와주는 것

- **처음부터 20분이면 쓸 수 있다**: 입문 3강, 길은 하나뿐. 단계마다 무엇이 보여야 하는지, 안 보이면 어떻게 하는지 적혀 있습니다.
- **필요한 것만 배운다**: 명령은 `/poteto-mode` 하나, 그리고 세 부분으로 된 메시지 하나: **원하는 것 · 완성된 모습 · 끝나면 보여 줄 것**. 나머지는 모두 "필요할 때 찾아보면 됨"이라고 표시해 두었습니다.
- **상황마다 복사해서 바로 쓰는 프롬프트**: 버그 수정, 기능 추가, 리팩터링, 낯선 코드베이스 넘겨받기, 자기 전에 일 맡기기. 꺾쇠괄호(< >) 부분만 바꿔서 보내면 됩니다.
- **답 읽는 법을 배운다**: 다시 정리한 목표, 할 일 목록, 검증 결과가 어디 있는지, 잘했는지 어떻게 판단하는지, 엇나갔을 때 보낼 한 줄까지.
- **고수에게서 프롬프트 쓰는 법을 배운다**: 스킬 34개의 전문을 읽고, 각각 몇 문장씩 뜯어봅니다. 그 문장이 AI에게 무엇을 시키는지, 왜 그렇게 썼는지, 어떻게 가져다 쓰는지.
- **쉬운 말**: 모든 페이지가 첫 줄에서 그 페이지가 무엇을 도와주는지 말하고, 낯선 용어는 마우스를 올리면 설명이 나옵니다.
- **어느 나라에서든 읽을 수 있다**: 홈페이지와 입문 강의는 10개 언어로 되어 있어, 자기 언어로 시작할 수 있습니다.
- **늘 최신 상태**: 현재 pstack 릴리스와 대조해 확인했고, 모든 명령은 공식 저장소와 같습니다.

## 🧭 어떻게 일하나

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="pstack의 작동 방식: 원하는 것을 말하면 /poteto-mode가 플레이북을 고르고, 단계별로 스킬을 호출하고, 증거와 함께 돌아온다">
</p>

기억할 명령은 `/poteto-mode` 하나뿐입니다. **무엇을 원하는지**와 **어떻게 되면 완료인지**만 분명히 말하세요. 23개의 "플레이북"(버그 수정, 기능 추가, 리팩터링, 성능 조사……) 중 하나를 골라 단계를 할 일 목록에 옮겨 적고, 한 단계씩 다른 스킬을 호출합니다. 하지 않기로 한 단계는 조용히 사라지지 않고 `skip: 이유`로 표시됩니다.

## ⚡ 3분 만에 시작하기

**1. 설치** (사용하는 도구에 맞게 하나 고르세요)

```bash
# Claude Code (명령에 pstack: 접두사가 붙습니다. 예: /pstack:poteto-mode)
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex, OpenCode 등 (Node.js 22.20+; 전역 설치는 -g 추가)
npx skills add backnotprop/pstack
```

**2. 모델 고르기**: 새 대화에서 `/setup-pstack`을 한 번 실행하세요. "검증 스킬"을 만들지 물으면 **예**를 고르세요. Claude Code에서는 세션 모델과 역할별 모델 조합을 [추천 설정 세 가지](https://pstack.xiaoxiaodong.ai/en/howto/claude-code/#how-to-set-it-up-well)에서 확인하세요.

**3. 첫 번째 작업**: 실제 일이지만 크지 않은 것을 골라, 동료에게 일을 맡기듯 말하세요:

```text
/poteto-mode 새로고침 후 즐겨찾기가 가끔 두 번 나타납니다. 먼저 재현하고, 아직 코드는 고치지 마세요.
완료 기준: 즐겨찾기를 연속으로 열 번 눌러도 목록과 chrome.storage에 각각 한 개만 있어야 합니다.
수정 전과 수정 후 storage의 실제 내용을 보여 주세요.
```

> [!TIP]
> 좋은 프롬프트에는 최대 다섯 가지가 들어갑니다: **목표**, **어떻게 되면 완료인지**, **보고 싶은 증거**, **이미 알고 있는 것**, **건드리면 안 되는 것**. 빼는 편이 나은 것은 두 가지입니다: 구체적으로 어떻게 할지, 그리고 원인에 대한 당신의 추측. 자세한 내용은 [3단계](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/)(영어)를 보세요.

## 🗺️ 스킬 34개를 한 장에

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="pstack 스킬 맵: 일곱 그룹의 스킬 34개와 원칙 24개">
</p>

평소에는 `/poteto-mode`만 입력하면 됩니다. 나머지는 필요할 때 알아서 부릅니다. 특정 스킬을 이름으로 부르고 싶거나 AI가 언급한 이름을 찾아보고 싶다면 [스킬 레퍼런스](https://pstack.xiaoxiaodong.ai/en/skills/)(영어)를 보세요. 스킬마다 쉬운 한 줄 설명, 언제 쓰는지, 그대로 복사할 수 있는 예문, 함께 설치할 스킬이 있습니다. 스킬을 열면 SKILL.md 전문과 "문장에서 배울 점"을 읽을 수 있습니다. 원문에서 몇 문장을 골라, 각 문장이 AI에게 무엇을 하게 하는지, 왜 그렇게 썼는지, 내 프롬프트에 어떻게 가져다 쓸지 설명합니다.

## 🛠 실제 프로젝트에서

모든 가이드에 그대로 복사해 쓸 수 있는 프롬프트가 있고, 예시는 Chrome 확장 프로그램, Astro 웹사이트, Cloudflare 회원 사이트 같은 실제 상황입니다.

| 지금 하려는 일 | 읽을 글 | 한 줄 요점 |
|---|---|---|
| 버그 수정 | [재현하고, 고치고, 증명하기](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | 고치기 전에 먼저 버그를 다시 일으킨다 |
| 기능 추가 | [기존 것을 망가뜨리지 않고](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | 어떤 기존 동작이 조금도 바뀌면 안 되는지 말한다 |
| 리팩터링 | [구조는 바꾸고 동작은 그대로](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | 지금의 출력을 먼저 기록하고, 바꾼 뒤 그대로임을 증명한다 |
| 너무 느리다 | [숫자로 말하기](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | 느낌이 아니라 측정값을 준다 |
| 낯선 프로젝트 인수 | [손대기 전에 이해하기](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | "아직 코드는 고치지 마"라고 하면 조사만 한다 |
| 제출 전에 불안하다 | [여러 모델에게 흠 잡게 하기](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | 실패를 실제로 재현할 수 있는 문제만 남긴다 |
| 문서 작성 | [README, PR 설명](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | 남이 쓸 코드라면 README부터 쓴다 |
| 큰 마이그레이션 | [자기 전에 맡기기](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | "4시간 동안 해"가 아니라, 통과와 실패가 분명한 완료 조건을 준다 |

그 밖에 [그대로 복사해 쓰는 프롬프트](https://pstack.xiaoxiaodong.ai/en/howto/recipes/), [한 문장으로 다시 궤도에 올리기](https://pstack.xiaoxiaodong.ai/en/howto/steer/), [어떤 스킬을 써야 할지 모르겠을 때](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/)도 있습니다. (모두 영어)

## 🌙 밤새 맡겨 두기

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="AI에게 밤새 맡기기: 매 회차마다 완료 조건을 확인하고, 가장 작은 변경을 하고, 검증하고, 커밋하거나 버리고, 로그를 한 줄 남긴다. 아침에는 결정 로그를 읽는다">
</p>

앞의 모든 단계가 여기서 보상받습니다. **스스로 검증할 수 있는** AI여야 안심하고 혼자 일하게 둘 수 있습니다. 자기 전에 "계약서"를 건네세요: 목표, 통과와 실패가 분명한 완료 조건, 새 worktree, 결정 로그, 막혔을 때의 탈출구. 아침에는 `/show-me-your-work` 답변의 "needs attention" 부분부터 읽으세요. 밤새 한 일을 다시 다 읽는 게 아니라 결정만 검토하면 됩니다. 자세한 내용은 [7단계](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/)(영어)를 보세요.

## 📚 사이트에 있는 것

| 섹션 | 내용 |
|---|---|
| [입문 과정](https://pstack.xiaoxiaodong.ai/ko/start/1-why/) | 3강, 20분, 코딩 몰라도 됨: 무엇을 해 주나 → 설치하기 → 처음 써 보기 |
| [전체 가이드](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) | 코드를 쓰는 사람을 위한 9단계: 무엇인가 → 설치 → 모델 고르기 → 첫 작업 → 먼저 이해하기 → 설계·구현·정리 → 검증과 전달 → 밤새 맡기기 → 익숙해지면 |
| [스킬 레퍼런스](https://pstack.xiaoxiaodong.ai/en/skills/) | 스킬 34개, 각각 전문과 문장 해설 포함 |
| [How-to](https://pstack.xiaoxiaodong.ai/en/howto/) | 17편, 한 편에 한 가지 일 |
| [Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/) | 개념 20개: 한 문장 → 비유 → pstack에서는 → 흔한 오해. 원칙 24개와 플레이북 23개 대조표 포함 |
| [FAQ](https://pstack.xiaoxiaodong.ai/en/faq/) | 돈이 드나요? Cursor를 꼭 써야 하나요? 내 코드를 함부로 고치지 않나요? |
| 언어 | 홈페이지와 입문 강의: 10개 언어. 전체 가이드, 스킬, How-to, Wiki, FAQ: English와 中文 |

페이지 오른쪽 위에서 <kbd>⌘</kbd> <kbd>K</kbd>로 사이트 전체를 검색할 수 있습니다. 본문에서 **형광펜**과 **굵은 밑줄**은 핵심이고, 점선 밑줄이 있는 용어에 마우스를 올리면 한 줄 설명이 나옵니다.

## 🧑‍💻 로컬에서 실행하기

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # dist/에 출력
npm run release    # 빌드 후 Cloudflare에 배포
```

```text
src/data/nav.js        사이트 구조: 가이드, How-to 목록, 용어집 (유일한 원본)
src/data/skills.js     스킬 레퍼런스 데이터
src/data/wiki.js       Wiki 항목
src/data/faq.js        FAQ
src/pages/start/       입문 과정 3강 (MDX)
src/pages/guide/       가이드 (MDX)
src/pages/howto/       How-to (MDX)
public/xxd/            Xiaoxiaodong UI Kit (CDN 없이 사본 포함)
tools/build_assets.py  README 일러스트, SVG 애니메이션, 공유 이미지 생성 (social.svg → social.png / public/og.png)
```

내용 수정, 페이지 추가, 글쓰기 규칙은 [docs/MAINTAINING.md](docs/MAINTAINING.md)(중국어)를 보세요. README의 이미지는 모두 `python3 tools/build_assets.py`로 생성됩니다. 문구나 색을 바꿨다면 다시 실행하세요.

## 🙌 감사의 말

- [pstack](https://github.com/cursor/plugins/tree/main/pstack)은 [poteto](https://x.com/poteto)가 만들었습니다. 이 사이트는 범용 미러인 [backnotprop/pstack](https://github.com/backnotprop/pstack)을 사용합니다. 가이드 내용은 그 README와 docs/guide를 바탕으로 썼으며, 명령과 동작은 공식 저장소가 기준입니다.
- 사이트 골격은 [Xiaoxiaodong VPS 튜토리얼 사이트](https://vps.xiaoxiaodong.ai)에서 왔고, 인터페이스는 [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai)을, 일러스트 색은 [ghostty-tint](https://github.com/nevertoday/ghostty-tint)에서 빌려 왔습니다.

이 사이트는 비공식 입문 가이드입니다. 설명이 불분명하거나 따라 했는데 잘 안 되면 [Issue를 열어](https://github.com/nevertoday/xxd-pstack/issues) 주세요.

## 📄 라이선스

튜토리얼 글과 사이트 코드는 [MIT](LICENSE)입니다. `public/xxd/`의 Xiaoxiaodong UI Kit 빌드 결과물은 여기에 포함되지 않으며, 자체 [LICENSE](public/xxd/LICENSE)를 따릅니다 (비상업적 사용은 무료, 상업적 사용은 라이선스 필요).

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)

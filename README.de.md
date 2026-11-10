<div align="center">

# pstack für Einsteiger

[中文](./README.md) · [English](./README.en.md) · [한국어](./README.ko.md) · [日本語](./README.ja.md) · [العربية](./README.ar.md) · [Español](./README.es.md) · [Français](./README.fr.md) · [Русский](./README.ru.md) · **Deutsch** · [Português](./README.pt.md)

**Lass die KI Code schreiben wie ein verlässlicher Senior Engineer: erst verstehen, dann ändern, dann Belege zeigen.**

Eine Einsteigeranleitung für [pstack](https://github.com/backnotprop/pstack) in einfachen Worten: vom ersten Installationsbefehl bis dahin, es in einem echten Projekt die ganze Nacht arbeiten zu lassen.

### 👉 [Online lesen: pstack.xiaoxiaodong.ai/en](https://pstack.xiaoxiaodong.ai/en/)

Die Tutorial-Website gibt es auf Englisch und Chinesisch (chinesische Version: <https://pstack.xiaoxiaodong.ai>).

![Leitfaden](https://img.shields.io/badge/Leitfaden-9_Schritte-8A9A8C?style=flat-square)
![Skills](https://img.shields.io/badge/Skills-34-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17_Anleitungen-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20_Eintr%C3%A4ge-9AA8C4?style=flat-square)
![Tools](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demo: Du tippst einen /poteto-mode-Prompt; die KI listet die Schritte zur Fehlerbehebung auf, hakt sie einzeln ab und zeigt am Ende Belege für vorher und nachher">
</p>

<p align="center">
  <a href="#-warum-du-es-brauchst">Warum</a> ·
  <a href="#-so-arbeitet-es">So arbeitet es</a> ·
  <a href="#-in-drei-minuten-loslegen">Loslegen</a> ·
  <a href="#️-34-skills-auf-einer-karte">Skill-Karte</a> ·
  <a href="#-in-echten-projekten">Echte Projekte</a> ·
  <a href="#-über-nacht-arbeiten-lassen">Über Nacht</a> ·
  <a href="#-lokal-starten">Lokal starten</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/en/">Online lesen</a>
</p>

## 😵 Warum du es brauchst

Wer schon mit KI programmiert hat, kennt das wahrscheinlich: Sie legt sofort los, ändert etwas an einer plausibel wirkenden Stelle und meldet dann: „Behoben, sollte jetzt passen.“ Du führst es aus, und es ist immer noch kaputt.

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="Vergleich: Ohne pstack ändert die KI sofort den Code und überspringt Reproduzieren und Verifizieren; mit pstack geht sie alle fünf Schritte durch und zeigt Belege für vorher und nachher">
</p>

pstack ist das Paket an Agent Skills, das poteto (Mitglied des React-Kernteams, arbeitet bei Cursor) jeden Tag beim eigenen Programmieren nutzt. **Das Modell bleibt dasselbe. Was sich ändert, sind die Reihenfolge der Arbeit und der Anspruch daran:**

| | Typische KI | Mit pstack |
|---|---|---|
| Bevor Code angefasst wird | Ändert direkt | Formuliert das Ziel in eigenen Worten und liest den Code zuerst mit `/how` |
| Einen Bug beheben | Fügt an der Oberfläche eine Prüfung ein | Reproduziert zuerst, findet **die erste Stelle, an der es schiefgeht**, und behebt dann |
| „Fertig“ sagen | „Sollte jetzt passen“ | Fügt echte Befehlsausgaben, gespeicherte Werte und Vorher-nachher-Vergleiche ein |
| Codemenge | Wird immer mehr | Erstes Prinzip: löschen, was geht, und mit der kleinsten Änderung lösen |
| Paralleles Arbeiten | Mehrere KIs streiten sich um einen Ordner | Jede bekommt ihren eigenen Worktree, so laufen mehrere gefahrlos gleichzeitig |

> [!NOTE]
> pstack schickt mehr Subagenten los und lässt mehrere Modelle an der Arbeit der anderen herumkritteln, deshalb ist es **langsamer und verbraucht mehr Tokens**. Das ist der Preis für Gründlichkeit. Für kleine Änderungen brauchst du es nicht. Wie man spart, steht unter [Kosten im Griff](https://pstack.xiaoxiaodong.ai/en/howto/cost/) (auf Englisch).

## 🧭 So arbeitet es

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="So arbeitet pstack: Du sagst, was du willst, /poteto-mode wählt ein Playbook, ruft Schritt für Schritt Skills auf und kommt mit Belegen zurück">
</p>

Du musst dir nur einen Befehl merken, `/poteto-mode`, und klar sagen, **was du willst** und **was als fertig gilt**. Es wählt eines von 23 „Playbooks“ (Bug beheben, Feature hinzufügen, refaktorieren, Performance untersuchen ...), überträgt die Schritte in eine To-do-Liste und ruft Schritt für Schritt die anderen Skills auf. Schritte, die es auslassen will, verschwinden nicht stillschweigend, sondern werden mit `skip: Grund` markiert.

## ⚡ In drei Minuten loslegen

**1. Installieren** (wähle die Variante für dein Tool)

```bash
# Claude Code (Befehle bekommen das Präfix pstack:, z. B. /pstack:poteto-mode)
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex, OpenCode und andere (Node.js 22.20+; mit -g global installieren)
npx skills add backnotprop/pstack
```

**2. Modelle wählen**: Führe in einer neuen Unterhaltung einmal `/setup-pstack` aus. Wenn es fragt, ob ein „Verifikations-Skill“ erstellt werden soll, antworte mit **ja**.

**3. Deine erste Aufgabe**: Nimm etwas Echtes, aber nicht Großes, und erkläre es so, wie du einem Kollegen Arbeit übergeben würdest:

```text
/poteto-mode Nach einem Neuladen erscheinen Favoriten manchmal doppelt. Reproduziere es zuerst; ändere noch keinen Code.
Fertig heißt: Nach zehn Klicks hintereinander auf Favorit enthalten die Liste und chrome.storage jeweils genau einen Eintrag.
Zeig mir den tatsächlichen Inhalt von storage vor und nach dem Fix.
```

> [!TIP]
> Ein guter Prompt enthält höchstens fünf Dinge: **das Ziel**, **was als fertig gilt**, **welche Belege du sehen willst**, **was du schon weißt** und **echte Einschränkungen**. Zwei Dinge lässt du besser weg: wie genau es zu tun ist, und deine Vermutung zur Ursache. Mehr dazu in [Schritt 3](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/) (auf Englisch).

## 🗺️ 34 Skills auf einer Karte

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="pstack-Skill-Karte: 34 Skills in sieben Gruppen, dazu 24 Prinzipien">
</p>

Im Alltag tippst du nur `/poteto-mode`; die anderen ruft es selbst auf, wenn es sie braucht. Wenn du einen Skill gezielt beim Namen aufrufen oder einen Namen nachschlagen willst, den die KI erwähnt hat, schau in die [Skill-Referenz](https://pstack.xiaoxiaodong.ai/en/skills/) (auf Englisch): Zu jedem Skill gibt es eine Erklärung in einfachen Worten, wann man ihn nutzt, ein Beispiel zum Kopieren und was man dazu installieren sollte.

## 🛠 In echten Projekten

Jede Anleitung enthält Prompts, die du direkt kopieren kannst, mit Beispielen aus echten Szenarien wie einer Chrome-Erweiterung, einer Astro-Website oder einer Mitgliederseite auf Cloudflare.

| Deine Aufgabe | Lies das | Der Kern in einem Satz |
|---|---|---|
| Einen Bug beheben | [Reproduzieren, beheben, beweisen](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | „Erst reproduzieren“ ist eine Vorgabe, keine Höflichkeit |
| Ein Feature hinzufügen | [Ohne Altes kaputt zu machen](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | Sag, welches bestehende Verhalten sich um kein einziges Byte ändern darf |
| Refaktorieren | [Neue Struktur, gleiches Verhalten](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | Erst die aktuelle Ausgabe festhalten, danach beweisen, dass sie gleich blieb |
| Es ist zu langsam | [Schneller machen, mit Zahlen](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | Gib ihm einen Messwert, kein Gefühl |
| Ein fremdes Projekt übernehmen | [Erst verstehen, dann anfassen](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | „Ändere noch keinen Code“ beschränkt es aufs Untersuchen |
| Unsicher vor dem Einreichen | [Mehrere Modelle nach Schwächen suchen lassen](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | Nur Probleme behalten, die sich als echter Fehlschlag zeigen lassen |
| Doku schreiben | [READMEs, PR-Beschreibungen](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | Bei Code, den andere nutzen, zuerst die README schreiben |
| Eine große Migration | [Vor dem Schlafengehen übergeben](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | „Arbeite 4 Stunden“ ist keine Fertig-Bedingung |

Außerdem gibt es [Prompts zum Kopieren](https://pstack.xiaoxiaodong.ai/en/howto/recipes/), [Mit einem Satz zurück auf Kurs](https://pstack.xiaoxiaodong.ai/en/howto/steer/) und [Welcher Skill passt?](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/) (alles auf Englisch).

## 🌙 Über Nacht arbeiten lassen

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="Die KI über Nacht arbeiten lassen: In jeder Runde prüft sie die Fertig-Bedingung, macht die kleinste Änderung, verifiziert, committet oder verwirft und schreibt eine Zeile ins Log; morgens liest du das Entscheidungslog">
</p>

Hier zahlen sich alle vorherigen Schritte aus: Nur eine KI, die **ihre eigene Arbeit verifizieren kann**, kannst du beruhigt allein arbeiten lassen. Gib ihr vor dem Schlafengehen einen „Vertrag“: das Ziel, eine Fertig-Bedingung, die eindeutig erfüllt ist oder nicht, einen frischen Worktree, ein Entscheidungslog und einen Notausgang für den Fall, dass sie feststeckt. Lies morgens zuerst den Teil „needs attention“ in der Antwort von `/show-me-your-work`. Du prüfst Entscheidungen, statt die ganze Nacht nachzulesen. Mehr dazu in [Schritt 7](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/) (auf Englisch).

## 📚 Was es auf der Website gibt

| Bereich | Inhalt |
|---|---|
| [Leitfaden](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) | 9 Schritte, der Reihe nach: was es ist → Installation → Modelle wählen → erste Aufgabe → erst verstehen → entwerfen, bauen, aufräumen → verifizieren und ausliefern → über Nacht → mach es zu deinem |
| [Skill-Referenz](https://pstack.xiaoxiaodong.ai/en/skills/) | 34 Skills, je eine Karte |
| [How-to](https://pstack.xiaoxiaodong.ai/en/howto/) | 17 Anleitungen, je eine Aufgabe |
| [Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/) | 20 Begriffe: ein Satz → ein Vergleich → in pstack → häufige Irrtümer; mit Tabellen der 24 Prinzipien und 23 Playbooks |
| [FAQ](https://pstack.xiaoxiaodong.ai/en/faq/) | Kostet das Geld? Muss ich Cursor nutzen? Pfuscht es mir im Code herum? |

Mit <kbd>⌘</kbd> <kbd>K</kbd> oben rechts auf jeder Seite durchsuchst du die ganze Website. Im Text markieren **Textmarker** und **dicke Unterstreichung** das Wichtigste, und gepunktet unterstrichene Begriffe zeigen beim Darüberfahren eine Erklärung in einem Satz.

## 🧑‍💻 Lokal starten

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # Ausgabe nach dist/
npm run release    # bauen und auf Cloudflare deployen
```

```text
src/data/nav.js        Website-Struktur: Leitfaden, How-to-Liste, Glossar (einzige Quelle)
src/data/skills.js     Daten der Skill-Referenz
src/data/wiki.js       Wiki-Einträge
src/data/faq.js        FAQ
src/pages/guide/       Leitfaden (MDX)
src/pages/howto/       How-to (MDX)
public/xxd/            Xiaoxiaodong UI Kit (eigene Kopie, kein CDN)
tools/build_assets.py  Erzeugt README-Illustrationen, SVG-Animationen und das Vorschaubild (social.svg → social.png / public/og.png)
```

Inhalte bearbeiten, Seiten hinzufügen und Schreibregeln: siehe [docs/MAINTAINING.md](docs/MAINTAINING.md) (auf Chinesisch). Alle Bilder in der README werden mit `python3 tools/build_assets.py` erzeugt; nach Änderungen an Text oder Farben einfach erneut ausführen.

## 🙌 Danksagung

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) stammt von [poteto](https://x.com/poteto); diese Website nutzt [backnotprop/pstack](https://github.com/backnotprop/pstack), einen allgemeinen Mirror. Der Leitfaden basiert auf dessen README und docs/guide; für Befehle und Verhalten gilt das offizielle Repository.
- Das Gerüst der Website stammt von der [Xiaoxiaodong-VPS-Tutorial-Website](https://vps.xiaoxiaodong.ai), die Oberfläche nutzt das [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai), und die Farben der Illustrationen sind von [ghostty-tint](https://github.com/nevertoday/ghostty-tint) entliehen.

Dies ist eine inoffizielle Einsteigeranleitung. Wenn etwas unklar ist oder die Schritte nicht funktionieren, [eröffne bitte ein Issue](https://github.com/nevertoday/xxd-pstack/issues).

## 📄 Lizenz

Tutorial-Texte und Website-Code stehen unter [MIT](LICENSE). Der Build des Xiaoxiaodong UI Kit in `public/xxd/` ist davon ausgenommen und hat eine eigene [LICENSE](public/xxd/LICENSE) (kostenlos für nichtkommerzielle Nutzung, kommerzielle Nutzung erfordert eine Lizenz).

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)

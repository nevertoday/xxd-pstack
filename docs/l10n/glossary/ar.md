| English term | Arabic rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill (مهارة وكيل) | English + gloss on first use — gloss: `مهارة وكيل (مجلد يحتوي على ملف تعليمات يعلّم الذكاء الاصطناعي إنجاز نوع محدد من المهام)`. Keep `Agent Skill` / `Agent Skills` when referring to the specification or format; use `مهارة` afterwards. |
| skill | مهارة (ج: مهارات) | translate — Established on the site (`34 مهارة`, `كل المهارات`). Always keep specific skill names in English (e.g. `مهارة /how`). |
| SKILL.md | `SKILL.md` | keep English — Filename; always keep verbatim as inline code. |
| harness | harness (الأداة المشغّلة للذكاء الاصطناعي) | English + gloss on first use — gloss: `الأداة التي تشغّل الذكاء الاصطناعي (مثل Claude Code وCursor وCodex)`. Use `أداة harness` or `الأداة المشغّلة` when definite. |
| playbook | خطة عمل (ج: خطط عمل) | translate — Established on the site (`22 خطة عمل`, `يختار /poteto-mode خطة عمل`). Shorten to `خطة` / `خطط` when already clear from context. |
| poteto-mode | poteto-mode | keep English — Never translate skill or command names (`/poteto-mode`, `/pstack:poteto-mode`, `$poteto-mode`); describe its role as `المفتاح` when explaining it to beginners. |
| subagent | وكيل فرعي (ج: وكلاء فرعيون) | translate — Add `(subagent)` on first technical mention so developers link it to the English term; use `مساعد إضافي من الذكاء الاصطناعي` when the source uses plain-words "helper AI". |
| worktree | worktree (مجلد عمل مستقل) | English + gloss on first use — gloss: `مجلد عمل ثانٍ لنفس مستودع Git`. Keep `worktree` afterwards; write `مجلد worktree` / `مجلدات worktree` when definite or plural. |
| todo list | قائمة المهام | translate — Established on the site (`وينسخ خطواتها إلى قائمة المهام كما هي`). |
| verification skill | مهارة التحقق (ج: مهارات التحقق) | translate — Consistent with established `مهارة` and `تحقّق`. |
| formal verification | formal verification (التحقق الصوري) | English + gloss on first use — gloss: `التحقق الصوري (فحص صحة القاعدة في كل الحالات الممكنة بدل الاكتفاء بأمثلة)`. Avoid `التحقق الرسمي`, which can be misread as "official". |
| decision log | سجل القرارات | translate — Natural and clear; add `(decision log)` in brackets only if referring to a specific log name or Wiki term. |
| principles | المبادئ الهندسية / المبادئ | translate — Established on the site (`24 مبدأً هندسيًا`). Never translate individual principle names (`prove it works`, `fix root causes`, `build the lever`, etc.). |
| tokens | tokens (وحدات استهلاك الذكاء الاصطناعي) | English + gloss on first use — gloss: `وحدات قياس استهلاك الذكاء الاصطناعي وفوترته`. Keep `tokens` afterwards (`عدد tokens`, `استهلاك tokens`); avoid translating as `رموز` alone. |
| reasoning budget | ميزانية التفكير | translate — Clear, idiomatic rendering; optionally add `(reasoning budget)` on first mention in cost or Wiki pages. |
| PR | PR (طلب دمج تغييرات) | English + gloss on first use — gloss: `طلب دمج تغييرات (Pull Request)`. Keep `PR` (`طلب PR`, `طلبات PR`) afterwards, matching developer usage. |
| slash command | slash command (أمر يبدأ بـ `/`) | English + gloss on first use — gloss: `أمر يبدأ بالشرطة المائلة / في المحادثة`. Afterwards use `slash command` or `أمر يبدأ بـ /` / `أوامر /`. |
| model roles | أدوار النماذج | translate — Singular: `دور النموذج`. Clear and natural for role-based model routing. |
| Custom Mode | Custom Mode (الوضع المخصّص في Cursor) | English + gloss on first use — gloss: `الوضع المخصّص الدائم في Cursor`. Keep `Custom Mode` in English because it is a Cursor UI label. |
| fix a bug (playbook) | إصلاح خطأ برمجي | translate — Or `إصلاح خطأ` in concise lists (consistent with `أعد إظهار الخطأ` on the home page). Keep English verbatim if formatted as a code slug. |
| add a feature (playbook) | إضافة ميزة | translate — Concise playbook name. Keep English verbatim if formatted as a code slug. |
| refactor (playbook) | refactor (إعادة هيكلة الكود) | English + gloss on first use — gloss: `إعادة هيكلة الكود دون تغيير سلوكه`. Arabic developers commonly keep `refactor`; use `إعادة الهيكلة` when an Arabic noun reads more smoothly. |
| perf issue (playbook) | مشكلة أداء | translate — Plain equivalent for performance issue. Keep English verbatim if formatted as a code slug. |
| investigation (playbook) | تقصّي مشكلة | translate — Prefer `تقصّي` / `تقصّي مشكلة` over `تحقيق` so it sounds technical rather than legal. |
| prototype (playbook) | نموذج أولي | translate — Standard Arabic term; optionally add `(prototype)` on first mention. |
| babysit (playbook) | babysit (متابعة المهمة حتى تكتمل) | English + gloss on first use — gloss: `متابعة المهمة أو طلب PR وإصلاح أي عطل حتى يكتمل`. Never translate literally. |
| shipping (playbook) | الإطلاق والنشر | translate — Use `الإطلاق والنشر` or `تسليم ونشر العمل` in prose; keep `shipping` verbatim when it appears as a playbook identifier or inline code. |
| review panel | لجنة المراجعة | translate — Clear rendering for multiple models reviewing one change. |
| budget (`/setup-pstack` choice) | الميزانية (`large` / `medium` / `small`) | translate — Translate `budget` as `الميزانية`, but keep the interactive option labels `large`, `medium`, `small` in English with Arabic glosses (`كبيرة` / `متوسطة` / `صغيرة`) on first mention. |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | `xhigh` / `high` / `medium` / `low` | keep English — Keep the four level names verbatim; render "reasoning effort" as `مستوى جهد التفكير` (or `مستوى التفكير`). |
| checkpoint | نقطة تحقّق | translate — Used for the progress checklist the reader ticks off; use `نقطة حفظ` only if referring to saved runtime state. |
| reproduce / repro | إعادة إظهار الخطأ | translate — Established on the site (`أعد إظهار الخطأ أولًا`). For the shorthand noun `repro`, use `حالة إعادة إظهار (repro)`. |
| root cause | السبب الجذري | translate — Standard technical phrase. Keep the principle name `fix root causes` in English. |
| verify / verification | يتحقّق / التحقّق | translate — Established on the site (`يتحقّق قبل أن يسلّمك العمل`, `تحقّق`). |
| evidence | دليل (ج: أدلة) | translate — Use `أدلة` or `أدلة التحقّق` for screenshots, command output, and recordings. |
| diff | diff (فروقات التعديل في الكود) | English + gloss on first use — gloss: `فروقات التعديل في الكود`. Keep `diff` afterwards (`عرض diff`, `مراجعة diff`). |
| commit | commit (حفظ التغييرات في Git) | English + gloss on first use — gloss: `حفظ مجموعة تغييرات في سجل Git`. Keep `commit` afterwards (`إجراء commit`, `رسالة commit`). |
| branch | فرع (branch) | translate — Standard in written Arabic Git guides (`الفرع الرئيسي`, `فرع جديد`); add `(branch)` on first mention so developers map it immediately. |
| merge | دمج (فعل: يدمج) | translate — Universal in Arabic Git writing (e.g. `دمج PR`, `دمج الفرع`). |
| CI | CI (التكامل المستمر) | English + gloss on first use — gloss: `التكامل المستمر (الفحوصات والاختبارات التلقائية عند رفع الكود)`. Keep `CI` afterwards (`فحوصات CI`). |
| lint | lint (فحص تنسيق الكود وجودته) | English + gloss on first use — gloss: `فحص جودة الكود وتنسيقه تلقائيًا`. Keep `lint` afterwards (`فحص lint`, `أخطاء lint`). |
| test | اختبار (ج: اختبارات) | translate — Universal in Arabic development tutorials (`تشغيل الاختبارات`, `كتابة اختبار`). |
| codemod | codemod (أداة تعديل تلقائي واسعة للكود) | English + gloss on first use — gloss: `أداة تعديل تلقائي واسعة النطاق على الكود`. Keep `codemod` afterwards. |
| migration | ترحيل (migration) | translate — Standard for database or codebase migrations (`ترحيل البيانات`, `ترحيل الكود`); add `(migration)` on first mention. |
| stack (of PRs) | stack (سلسلة مترابطة من طلبات PR) | English + gloss on first use — gloss: `سلسلة مترابطة من طلبات PR الصغيرة المبنية فوق بعضها`. Keep `stack` or `سلسلة طلبات PR` afterwards; avoid `مكدس`. |
| harness adapter | موائم harness | translate — Keep `harness` in English and translate `adapter` as `موائم` (glossing on first use as `موائم يكيّف pstack للعمل مع أداة تشغيل معيّنة`). |
| mirror (backnotprop/pstack) | نسخة pstack المرآة / النسخة المرآة | translate — Established on the site (`نسخة pstack المرآة`). |
| official version | النسخة الرسمية / pstack الرسمي | translate — Established on the site (`pstack الرسمي`, `الأصل الرسمي`). |
| marketplace | متجر الإضافات | translate — Established on the site (`أضف متجر الإضافات`). |
| plugin | إضافة (ج: إضافات) | translate — Established on the site (`متجر الإضافات`, `صفحات أو إضافات`). |
| main conversation / chat | المحادثة الرئيسية / المحادثة | translate — Consistent with existing `تحادث الذكاء الاصطناعي`; contrasts clearly with `وكيل فرعي`. |
| helper AI | مساعد إضافي من الذكاء الاصطناعي | translate — Established on the site (`مساعدون إضافيون من الذكاء الاصطناعي`); use for plain-words references to subagents. |
| prompt | طلب / توجيه (prompt) | translate — Use `رسالة` or `طلب` in everyday and beginner prose (matching existing `رسالة` and `طلبك`), and `توجيه` with `(prompt)` on first technical use; avoid `موجّه` and `مطالبة`. |
| copy-paste prompt | طلب جاهز للنسخ واللصق | translate — Or `رسالة جاهزة للنسخ واللصق` in beginner-facing steps. |
| Full guide (9 steps) | الدليل الكامل (9 خطوات) | translate — Established on the site (`الدليل الكامل: 9 خطوات`); drop `(بالإنجليزية)` once the Arabic section is live. |
| Beginner track | مسار المبتدئين | translate — Established on the site (`مسار المبتدئين`). |
| How-to | How-to | keep English — Established in the site navigation (`How-to: كيف تفعلها بالضبط`); write `قسم How-to` or `أدلة How-to` in running prose. |
| Wiki | Wiki | keep English — Established in the site navigation (`Wiki: ما معنى هذا؟`); write `قسم Wiki` or `صفحات Wiki` in running prose. |
| FAQ | الأسئلة الشائعة | translate — Established on the site (`الأسئلة الشائعة`). |
| Skills reference | مرجع المهارات | translate — Natural section title matching `مهارات` (keep `كل المهارات: 34 مهارة` where the nav label uses that phrasing). |
| overnight run | تشغيل ليلي / تشغيل طوال الليل | translate — Use `التشغيل الليلي` as a noun and `تشغيله طوال الليل` in verbal phrasing. |
| let it run on its own | اتركه يعمل وحده | translate — Short, natural phrasing matching the site's plain conversational tone. |
| steer / pull it back on track | توجيهه / إعادته إلى المسار الصحيح | translate — Imperative: `وجّهه` / `أعده إلى المسار الصحيح`. |
| unslop | unslop (تنقية النص من أسلوب الذكاء الاصطناعي) | English + gloss on first use — gloss: `إزالة الطابع الآلي وتنقية النص من أسلوب الذكاء الاصطناعي`. Keep `/unslop` verbatim when referring to the skill. |
| AI-sounding text ("slop") | نص بطابع الذكاء الاصطناعي (slop) | translate — Render as `نص بطابع الذكاء الاصطناعي` or `كتابة تبدو آلية`, keeping `«slop»` on first mention to connect with `/unslop`. |
| Stuck? | توقفت عند خطوة؟ | translate — Matches the existing site phrasing (`توقفت عند خطوة`) and sounds natural as a help-section heading. |
| You should see | يجب أن ترى | translate — Established on the site (`comp.callout.ok: "يجب أن ترى"`). |

- **Register and address**: Write in plain, friendly Modern Standard Arabic (فصحى معاصرة بسيطة) with short, direct sentences—no colloquial dialect and no stiff bureaucratic prose—addressing the reader directly in second-person masculine singular (`اكتب`, `افتح`, `تستطيع`), matching existing pages.
- **No gender for poteto and consistent `pstack` agreement**: Never use `هو` or `هي` for `poteto`; restructure sentences passively or nominally (`من تطوير poteto`, `بحسب poteto`). Treat `أداة pstack` as feminine (`أداة pstack تفحص أكثر، فهي أبطأ`) and bare `pstack` as masculine (`ثبّته`, `استخدمه`), matching existing copy.
- **Punctuation, quotes, and digits**: Use Arabic punctuation (`،` `؛` `؟`) and guillemets `« »` for quotations and UI/speech strings (never straight `"` inside Arabic prose or MDX attributes), and always use Western Arabic digits (`0–9`, e.g., `34 مهارة`, `9 خطوات`) rather than Eastern Arabic-Indic digits.
- **Blending Arabic and English terms**: Never prefix `الـ` directly onto Latin words (avoid `الـ PR` or `الـ harness`); pair them with an Arabic head noun instead (`طلب PR`, `أداة harness`, `فحوصات CI`). Attach `لـ ` and `بـ ` with a tatweel and space before Latin names (`لـ Cursor`, `بـ pstack`), as on the existing site.
- **Light diacritics and idiomatic choices**: Use sparse diacritics only where helpful for clarity or tanwin (`تعلّم`, `جرّب`, `تحقّق`, `ثبّته`, `أولًا`, `قليلًا`), and avoid machine-translation calques (`مطالبة`/`موجّه` for prompt, `مجالسة` for babysit, `رموز` alone for tokens).

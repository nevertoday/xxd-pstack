<div dir="rtl">

<div align="center">

# دليل pstack للمبتدئين

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · **العربية**

### يقول لك الذكاء الاصطناعي: "تم الإصلاح". تفتحه، فتجده ما زال معطّلًا.

مع [pstack](https://github.com/backnotprop/pstack)، يجرّب الذكاء الاصطناعي عمله بنفسه قبل أن يقول لك إنه انتهى.<br>هذا الدليل يشرح pstack بكلمات بسيطة، ويمكنك أن تتعلّمه حتى لو لم تكتب سطر كود من قبل.

<a href="https://pstack.xiaoxiaodong.ai/ar/start/1-why/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ar-1-dark.svg"><img src="assets/doors/ar-1.svg" height="92" alt="لم تكتب كودًا من قبل: 3 دروس · 20 دقيقة"></picture></a> <a href="https://pstack.xiaoxiaodong.ai/en/guide/0-what/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ar-2-dark.svg"><img src="assets/doors/ar-2.svg" height="92" alt="تكتب الكود: دليل من 9 خطوات (بالإنجليزية)"></picture></a> <a href="https://pstack.xiaoxiaodong.ai/en/skills/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ar-3-dark.svg"><img src="assets/doors/ar-3.svg" height="92" alt="تعلّم كتابة الطلبات: تفكيك 34 مهارة (بالإنجليزية)"></picture></a>

<sub>مجاني · مفتوح المصدر · 10 لغات</sub>

![مسار المبتدئين](https://img.shields.io/badge/%D9%85%D8%B3%D8%A7%D8%B1_%D8%A7%D9%84%D9%85%D8%A8%D8%AA%D8%AF%D8%A6%D9%8A%D9%86-3_%D8%AF%D8%B1%D9%88%D8%B3-8A9A8C?style=flat-square)
![الدليل](https://img.shields.io/badge/%D8%A7%D9%84%D8%AF%D9%84%D9%8A%D9%84-9_%D8%AE%D8%B7%D9%88%D8%A7%D8%AA-8A9A8C?style=flat-square)
![المهارات](https://img.shields.io/badge/%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA-34-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17_%D8%AF%D9%84%D9%8A%D9%84%D9%8B%D8%A7-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20_%D9%85%D8%AF%D8%AE%D9%84%D9%8B%D8%A7-9AA8C4?style=flat-square)
![اللغات](https://img.shields.io/badge/%D8%A7%D9%84%D9%84%D8%BA%D8%A7%D8%AA-10-9AA8C4?style=flat-square)
![الأدوات](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="عرض توضيحي: تكتب أمر /poteto-mode واحدًا، فيسرد الذكاء الاصطناعي خطوات إصلاح الخلل ويؤشّر عليها واحدة تلو الأخرى، ثم يقدّم دليلًا على الحال قبل الإصلاح وبعده">
</p>

<p align="center">
  <a href="#-لماذا-تحتاج-إليه">لماذا</a> ·
  <a href="#-pstack-رائعة-لكن-تعلّمها-وحدك-صعب">الصعوبة</a> ·
  <a href="#-كيف-يساعدك-هذا-الدليل">المزايا</a> ·
  <a href="#-كيف-يعمل">كيف يعمل</a> ·
  <a href="#-ابدأ-في-ثلاث-دقائق">البدء</a> ·
  <a href="#️-34-مهارة-في-خريطة-واحدة">خريطة المهارات</a> ·
  <a href="#-في-مشاريع-حقيقية">مشاريع حقيقية</a> ·
  <a href="#-دعه-يعمل-طوال-الليل">طوال الليل</a> ·
  <a href="#-التشغيل-محليًا">التشغيل محليًا</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/ar/">اقرأ على الإنترنت</a>
</p>

## 😵 لماذا تحتاج إليه

إذا كتبت كودًا بمساعدة الذكاء الاصطناعي، فعلى الأرجح مررت بهذا:

- يقول لك: "تم الإصلاح، يُفترض أن كل شيء بخير الآن". تشغّله، فتجده ما زال معطّلًا.
- تقول له: "ما زال معطّلًا". يعتذر ويغيّر شيئًا آخر. بعد خمس جولات، يكون نصف يومك قد ضاع.
- طلبت منه تغيير زر واحد، فعدّل قرابة اثني عشر ملفًا.
- في محادثة جديدة، يقع في الحفرة نفسها التي وقع فيها بالأمس.

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="مقارنة: بدون pstack يعدّل الذكاء الاصطناعي الكود فورًا ويتخطى إعادة إنتاج المشكلة والتحقق؛ مع pstack ينفّذ الخطوات الخمس كلها ويقدّم دليلًا على الحال قبل الإصلاح وبعده">
</p>

المشكلة ليست أن النموذج غبي، بل أنه يعمل بلا منهج: يغيّر كودًا لم يفهمه، ويعلن أن العمل انتهى دون أن يجرّبه. pstack هي مجموعة Agent Skills التي يستخدمها poteto (عضو في الفريق الأساسي لـ React ويعمل في Cursor) كل يوم لكتابة الكود. **النموذج يبقى كما هو. الذي يتغيّر هو ترتيب العمل والمعيار الذي يلتزم به:**

| متى | الذكاء الاصطناعي المعتاد | مع pstack |
|---:|---:|---:|
| قبل لمس الكود | يعدّل مباشرة | يعيد صياغة الهدف بكلماته، ويقرأ الكود أولًا بـ `/how` |
| إصلاح خلل | يضيف فحصًا على السطح | يجعل الخلل يحدث مرة أخرى أولًا، ويجد **أول موضع يحدث فيه الخطأ**، ثم يصلح |
| عندما يقول "انتهيت" | "يُفترض أن كل شيء بخير الآن" | يلصق مخرجات الأوامر الحقيقية والقيم المخزّنة ومقارنات قبل وبعد |
| حجم الكود | يزداد باستمرار | يحذف ما يمكن حذفه، ويحلّ المشكلة بأصغر تغيير |
| الخطأ نفسه | يكرّره في المرة القادمة | يغيّر `/correct` المستودع نفسه، فلا يستطيع الذكاء الاصطناعي التالي أن يكرّره |
| العمل المتوازي | عدة نماذج تتنازع على مجلد واحد | لكلٍّ منها worktree خاص، فيمكنك تشغيل عدة نماذج معًا بأمان |

> [!NOTE]
> يرسل pstack مساعدين أكثر من الذكاء الاصطناعي، ويجعل عدة نماذج تبحث عن الثغرات في عمل بعضها، لذلك هو **أبطأ ويستهلك tokens أكثر**. لا تستخدمه للتغييرات الصغيرة. لطرق التوفير راجع [خفض التكاليف](https://pstack.xiaoxiaodong.ai/en/howto/cost/) (بالإنجليزية).

## 🧗 pstack رائعة، لكن تعلّمها وحدك صعب

كتب poteto أداة pstack لاستخدامه الشخصي، والتوثيق الرسمي يفترض أنك مهندس متمرّس أصلًا:

- **سيل من الأسماء من اليوم الأول**: 34 مهارة، و23 دليل عمل، و24 مبدأً، وكلها مصطلحات تقنية. أيّها تحتاج فعلًا؟
- **لا خطوة أولى واضحة**: أي نسخة تثبّت؟ هل تحتاج إلى إعداد؟ أي أمر تكتب؟
- **معرفة الأمر لا تكفي**: إذا لم تقل في طلبك ما معنى "انتهى"، فسينحرف رغم ذلك، لكنه ينحرف بعناية أكبر.
- **ردود لا تفهمها**: طويلة وتقنية، ولا تعرف أي سطر مهم وأي سطر يمكنك تخطّيه.

كثيرون يثبّتونها ويجرّبونها مرة واحدة، ثم يقولون "لا فرق كبير" ويتركونها.

## ✨ كيف يساعدك هذا الدليل

- **من الصفر إلى الاستخدام في 20 دقيقة**: ثلاثة دروس للمبتدئين، وطريق واحد. كل خطوة تقول لك ماذا يجب أن ترى، وماذا تفعل إن لم تره.
- **تعلّم ما تحتاجه فقط**: أمر واحد هو `/poteto-mode`، ورسالة واحدة من ثلاثة أجزاء: **ماذا أريد · كيف يبدو حين ينتهي · ماذا تُريني بعده**. وكل ما عدا ذلك عليه علامة "ارجع إليه عند الحاجة".
- **أمر جاهز للنسخ لكل موقف**: إصلاح خلل، إضافة ميزة، إعادة هيكلة، استلام مشروع لا تعرفه، تسليم العمل قبل النوم. غيّر ما بين القوسين < > وأرسل.
- **تعلّم قراءة ردوده**: أين تجد إعادة صياغته للهدف وقائمة مهامه وفحوصه، وكيف تعرف هل أحسن العمل، وما الجملة الواحدة التي ترسلها حين ينحرف.
- **تعلّم كتابة الأوامر من خبير**: اقرأ النص الكامل للمهارات الـ 34، مع تفكيك بضع جمل من كل مهارة: ماذا تجعل الذكاء الاصطناعي يفعل، ولماذا صيغت هكذا، وكيف تستعيرها.
- **كلمات بسيطة**: كل صفحة تبدأ بسطر واحد عمّا تساعدك على إنجازه، والمصطلحات غير المألوفة تشرح نفسها عند تمرير المؤشر فوقها.
- **مقروء في كل مكان**: الصفحة الرئيسية ودروس المبتدئين متوفرة بـ 10 لغات، فتبدأ بلغتك.
- **محدَّث دائمًا**: روجع على إصدار pstack الحالي، وكل أمر مطابق للمستودع الرسمي.

## 🧭 كيف يعمل

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="كيف يعمل pstack: تقول ما تريد، فيختار /poteto-mode دليل عمل، ويستدعي المهارات خطوة بخطوة، ويعود ومعه الدليل">
</p>

لا تحتاج إلى تذكّر سوى أمر واحد، `/poteto-mode`، وأن تقول بوضوح **ماذا تريد** و**متى يُعدّ العمل منتهيًا**. يختار واحدًا من 23 "دليل عمل" (playbook): إصلاح خلل، إضافة ميزة، إعادة هيكلة، تحسين الأداء...، وينسخ خطواته إلى قائمة مهام، ثم يستدعي المهارات الأخرى خطوة بخطوة. والخطوات التي يقرر تخطيها لا تختفي بصمت، بل تُكتب بجانبها `skip: السبب`.

## ⚡ ابدأ في ثلاث دقائق

**1. التثبيت** (اختر ما يناسب أداتك)

</div>

```bash
# Claude Code (commands get a pstack: prefix, e.g. /pstack:poteto-mode)
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex, OpenCode and others (Node.js 22.20+; add -g to install globally)
npx skills add backnotprop/pstack
```

الأوامر أدناه مكتوبة بطريقة Cursor. مع إضافة Claude Code يحتاج كل أمر إلى `pstack:` في أوله (`/pstack:setup-pstack`، `/pstack:poteto-mode`)، وبدونها لا يتعرّف عليه Claude Code. وفي Codex تكتب `$poteto-mode`. في الموقع تختار أداتك فتتغيّر الأوامر تلقائيًا.

<div dir="rtl">

**2. اختيار النماذج**: في محادثة جديدة، شغّل `/setup-pstack` مرة واحدة. وعندما يسألك هل يُنشئ "مهارة تحقق" (verification skill)، أجب **نعم**. في Claude Code، راجع [ثلاثة إعدادات مقترحة](https://pstack.xiaoxiaodong.ai/en/howto/claude-code/#how-to-set-it-up-well) لتوزيع النماذج على الأدوار.

**3. مهمتك الأولى**: اختر شيئًا حقيقيًا لكنه ليس كبيرًا، واشرحه كما لو كنت تسلّم العمل لزميل:

</div>

```text
/poteto-mode تظهر المفضلة أحيانًا مرتين بعد تحديث الصفحة. أعد إنتاج المشكلة أولًا، ولا تغيّر الكود بعد.
معيار الانتهاء: بعد الضغط على زر المفضلة عشر مرات متتالية، يحتوي كلٌّ من القائمة و chrome.storage على إدخال واحد فقط.
أرني المحتوى الفعلي لـ storage قبل الإصلاح وبعده.
```

<div dir="rtl">

> [!TIP]
> الأمر الجيد يحتوي خمسة أشياء على الأكثر: **الهدف**، و**متى يُعدّ منتهيًا**، و**الدليل الذي تريد رؤيته**، و**ما تعرفه مسبقًا**، و**ما يجب ألا يُمسّ**. وهناك شيئان من الأفضل عدم كتابتهما: كيف ينفّذ بالضبط، وتخمينك للسبب. التفاصيل في [الخطوة 3](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/) (بالإنجليزية).

## 🗺️ 34 مهارة في خريطة واحدة

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="خريطة مهارات pstack: 34 مهارة في سبع مجموعات، إضافة إلى 24 مبدأ">
</p>

في الاستخدام اليومي تكتب `/poteto-mode` فقط، وهو يستدعي البقية عند الحاجة. إذا أردت استدعاء مهارة باسمها، أو البحث عن اسم ذكره الذكاء الاصطناعي، فراجع [مرجع المهارات](https://pstack.xiaoxiaodong.ai/en/skills/) (بالإنجليزية): لكل مهارة شرح بسيط في سطر واحد، ومتى تُستخدم، ومثال جاهز للنسخ، وما يجب تثبيته معها. افتح أي مهارة لتقرأ ملف SKILL.md كاملًا وقسم "ماذا تعلّمنا صياغتها": جمل قليلة من النص الأصلي، وما تجعل كل جملة الذكاء الاصطناعي يفعله، ولماذا كُتبت بهذه الطريقة، وكيف تستعيرها في أوامرك.

## 🛠 في مشاريع حقيقية

في كل دليل أوامر يمكنك نسخها كما هي، وأمثلتها من حالات حقيقية مثل إضافة Chrome وموقع Astro وموقع أعضاء على Cloudflare.

| العمل الذي بين يديك | اقرأ هذا | الفكرة في سطر |
|---:|---:|---:|
| إصلاح خلل | [أعد إنتاجه، أصلحه، أثبت ذلك](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | اجعل الخلل يحدث مرة أخرى قبل إصلاح أي شيء |
| إضافة ميزة | [دون كسر ما هو موجود](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | قل أي سلوك قائم يجب ألا يتغير إطلاقًا |
| إعادة هيكلة | [بنية جديدة، والسلوك نفسه](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | سجّل المخرجات الحالية أولًا، ثم أثبت أنها لم تتغير |
| البطء | [أسرع، بالأرقام](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | أعطه قياسًا، لا انطباعًا |
| استلام مشروع غير مألوف | [افهم قبل أن تلمس](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | "لا تغيّر الكود بعد" تحصره في التحقيق فقط |
| القلق قبل التسليم | [دع عدة نماذج تبحث عن الثغرات](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | أبقِ فقط المشكلات التي يمكن إظهار فشلها فعليًا |
| كتابة التوثيق | [ملفات README ووصف PR](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | للكود الذي سيستخدمه غيرك، اكتب README أولًا |
| ترحيل كبير | [سلّمه إياه قبل النوم](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | شرط انتهاء إما أن ينجح أو يفشل، لا "اعمل 4 ساعات" |

وهناك أيضًا [أوامر جاهزة للنسخ](https://pstack.xiaoxiaodong.ai/en/howto/recipes/)، و[أعده إلى المسار بجملة واحدة](https://pstack.xiaoxiaodong.ai/en/howto/steer/)، و[لا أعرف أي مهارة أستخدم](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/) (كلها بالإنجليزية).

## 🌙 دعه يعمل طوال الليل

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="ترك الذكاء الاصطناعي يعمل طوال الليل: في كل دورة يتحقق من شرط الانتهاء، ويجري أصغر تغيير، ويتحقق، ثم يعتمد التغيير أو يتخلى عنه، ويكتب سطرًا في السجل؛ وفي الصباح تقرأ سجل القرارات">
</p>

هنا تؤتي كل الخطوات السابقة ثمارها: الذكاء الاصطناعي الذي **يستطيع التحقق من عمله بنفسه** هو وحده الذي يمكنك أن تتركه يعمل وحده مطمئنًا. قبل النوم، أعطه "عقدًا": الهدف، وشرط انتهاء واضح النجاح أو الفشل، وworktree جديدًا، وسجل قرارات، ومخرج طوارئ إذا علق. وفي الصباح اقرأ أولًا قسم "needs attention" في رد `/show-me-your-work`. أنت تراجع القرارات بدل أن تعيد قراءة الليلة كلها. التفاصيل في [الخطوة 7](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/) (بالإنجليزية).

## 📚 ماذا يوجد في الموقع

- **[مسار المبتدئين](https://pstack.xiaoxiaodong.ai/ar/start/1-why/)**: 3 دروس، 20 دقيقة، بلا برمجة · ماذا يفعل لك ← تثبيته ← استخدامه أول مرة
- **[الدليل الكامل](https://pstack.xiaoxiaodong.ai/en/guide/0-what/)**: 9 خطوات لمن يكتب الكود · ما هو ← التثبيت ← اختيار النماذج ← المهمة الأولى ← الفهم أولًا ← التصميم والبناء والتنظيف ← التحقق والتسليم ← طوال الليل ← بعد أن تعتاد عليه
- **[مرجع المهارات](https://pstack.xiaoxiaodong.ai/en/skills/)**: 34 مهارة، لكل منها نصها الكامل وتحليل لصياغتها
- **[How-to](https://pstack.xiaoxiaodong.ai/en/howto/)**: 17 دليلًا، كل دليل لمهمة واحدة
- **[Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/)**: 20 مفهومًا · جملة واحدة ← تشبيه ← في pstack ← أخطاء شائعة؛ مع جداول المبادئ الـ 24 وأدلة العمل الـ 23
- **[الأسئلة الشائعة](https://pstack.xiaoxiaodong.ai/en/faq/)**: هل يكلّف مالًا؟ هل يجب أن أستخدم Cursor؟ هل سيعبث بالكود الخاص بي؟
- **اللغات**: الصفحة الرئيسية ودروس المبتدئين · 10 لغات. الدليل الكامل والمهارات وHow-to وWiki والأسئلة الشائعة · English و中文

اضغط <kbd>⌘</kbd> <kbd>K</kbd> أعلى أي صفحة للبحث في الموقع كله. في النص، **قلم التظليل** و**الخط السفلي العريض** يحددان النقاط المهمة، والمصطلحات التي تحتها خط منقّط تُظهر شرحًا من سطر واحد عند تمرير المؤشر فوقها.

## 🧑‍💻 التشغيل محليًا

</div>

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # outputs to dist/
npm run release    # build and deploy to Cloudflare
```

```text
src/data/nav.js        Site structure: guide, How-to list, glossary (single source)
src/data/skills.js     Data for the skill reference
src/data/wiki.js       Wiki entries
src/data/faq.js        FAQ
src/pages/start/       Beginner track, 3 lessons (MDX)
src/pages/guide/       Guide (MDX)
src/pages/howto/       How-to (MDX)
public/xxd/            Xiaoxiaodong UI Kit (bundled copy, no CDN)
tools/build_assets.py  Generates README illustrations, SVG animations and the share image (social.svg → social.png / public/og.png)
```

<div dir="rtl">

لتعديل المحتوى وإضافة الصفحات وقواعد الكتابة راجع [docs/MAINTAINING.md](docs/MAINTAINING.md) (بالصينية). كل الصور في README تُولَّد بالأمر `python3 tools/build_assets.py`؛ أعد تشغيله بعد تغيير النصوص أو الألوان.

## 🙌 شكر وتقدير

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) من تطوير [poteto](https://x.com/poteto)؛ ويستخدم هذا الموقع [backnotprop/pstack](https://github.com/backnotprop/pstack)، وهي نسخة مرآة عامة. كُتب الدليل استنادًا إلى ملف README الخاص بها وإلى docs/guide، والمرجع في الأوامر والسلوك هو المستودع الرسمي.
- هيكل الموقع مأخوذ من [موقع دروس Xiaoxiaodong VPS](https://vps.xiaoxiaodong.ai)، والواجهة مبنية بـ [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai)، وألوان الرسوم مستعارة من [ghostty-tint](https://github.com/nevertoday/ghostty-tint).

هذا دليل غير رسمي للمبتدئين. إذا وجدت شيئًا غير واضح، أو لم تنجح الخطوات معك، [افتح Issue](https://github.com/nevertoday/xxd-pstack/issues).

## 📄 الترخيص

نصوص الدليل وكود الموقع مرخّصة بموجب [MIT](LICENSE). ملفات Xiaoxiaodong UI Kit المبنية في `public/xxd/` غير مشمولة، ولها [LICENSE](public/xxd/LICENSE) خاص بها (مجاني للاستخدام غير التجاري، والاستخدام التجاري يتطلب ترخيصًا).

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)

</div>

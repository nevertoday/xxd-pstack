<div align="center">

# Guia de pstack para iniciantes

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · **Português** · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### A IA diz "corrigido". Você abre. Continua quebrado.

O [pstack](https://github.com/backnotprop/pstack) faz a IA testar o próprio trabalho antes de dizer que terminou.<br>Este guia explica o pstack em linguagem simples. Dá para aprender mesmo se você nunca escreveu uma linha de código.

<a href="https://pstack.xiaoxiaodong.ai/pt/"><img src="assets/btn/pt.svg" width="560" alt="Comece a aprender: Grátis · pronto em 20 minutos · 10 idiomas"></a>

![Para iniciantes](https://img.shields.io/badge/Para_iniciantes-3_li%C3%A7%C3%B5es-8A9A8C?style=flat-square)
![Guia](https://img.shields.io/badge/Guia-9_passos-8A9A8C?style=flat-square)
![Skills](https://img.shields.io/badge/Skills-34-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17_guias-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20_verbetes-9AA8C4?style=flat-square)
![Idiomas](https://img.shields.io/badge/Idiomas-10-9AA8C4?style=flat-square)
![Ferramentas](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demonstração: você digita um prompt /poteto-mode; a IA lista os passos para corrigir o bug, marca um por um e termina com provas de antes e depois">
</p>

<p align="center">
  <a href="#-por-que-você-precisa-disso">Por quê</a> ·
  <a href="#-o-pstack-é-ótimo-mas-difícil-de-aprender-sozinho">A dificuldade</a> ·
  <a href="#-como-este-guia-ajuda">Destaques</a> ·
  <a href="#-como-ele-trabalha">Como funciona</a> ·
  <a href="#-comece-em-três-minutos">Começar</a> ·
  <a href="#️-34-skills-em-um-mapa">Mapa de skills</a> ·
  <a href="#-em-projetos-reais">Projetos reais</a> ·
  <a href="#-deixe-o-trabalhar-a-noite-toda">A noite toda</a> ·
  <a href="#-rodar-localmente">Rodar localmente</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/pt/">Ler online</a>
</p>

## 😵 Por que você precisa disso

Se você já programou com IA, provavelmente já passou por isto:

- Ela diz "Corrigido, agora deve estar tudo certo". Você roda. Continua quebrado.
- Você diz "continua quebrado". Ela pede desculpas e muda outra coisa. Cinco rodadas depois, lá se foi a sua tarde.
- Você pediu para mudar um botão. Ela mexeu em uma dúzia de arquivos.
- Numa conversa nova, ela cai no mesmo buraco em que caiu ontem.

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="Comparação: sem pstack, a IA edita o código na hora e pula a reprodução e a verificação; com pstack, ela faz os cinco passos e mostra provas de antes e depois">
</p>

O modelo não é burro. Ele só trabalha sem método: muda código que não entendeu e diz que terminou sem testar. O pstack é o pacote de Agent Skills que poteto (membro da equipe principal do React, trabalha na Cursor) usa todos os dias para escrever código. **O modelo continua o mesmo. O que muda é a ordem em que ele trabalha e o padrão que ele segue:**

| | A IA de sempre | Com pstack |
|---|---|---|
| Antes de mexer no código | Edita direto | Reformula o objetivo com as próprias palavras e lê o código primeiro com `/how` |
| Corrigir um bug | Coloca uma verificação na superfície | Primeiro faz o bug acontecer de novo, encontra **o primeiro ponto em que dá errado** e só então corrige |
| Ao dizer "pronto" | "Agora deve estar tudo certo" | Cola a saída real dos comandos, os valores salvos e comparações de antes e depois |
| Quantidade de código | Só aumenta | Apaga o que puder e resolve com a menor mudança possível |
| O mesmo erro | Comete de novo na próxima vez | `/correct` muda o próprio repositório, para que a próxima IA não consiga repetir o erro |
| Trabalho em paralelo | Várias IAs brigam pela mesma pasta | Cada uma usa seu próprio worktree, então dá para rodar várias ao mesmo tempo sem medo |

> [!NOTE]
> O pstack dispara mais IAs auxiliares e faz vários modelos procurarem falhas no trabalho uns dos outros, então ele é **mais lento e gasta mais tokens**. Não use para mudanças pequenas. Para economizar, veja [Controlar os custos](https://pstack.xiaoxiaodong.ai/en/howto/cost/) (em inglês).

## 🧗 O pstack é ótimo, mas difícil de aprender sozinho

poteto escreveu o pstack para uso próprio. A documentação oficial parte do princípio de que você já é um engenheiro sênior:

- **Uma parede de nomes logo no primeiro dia**: 34 skills, 23 playbooks, 24 princípios, tudo em jargão. De quais você precisa de verdade?
- **Nenhum primeiro passo óbvio**: qual versão instalar? Precisa configurar alguma coisa? Qual comando digitar?
- **Saber o comando não basta**: se o seu prompt não diz o que é "pronto", a IA sai do rumo do mesmo jeito. Só que com mais cuidado.
- **Respostas que você não consegue ler**: longas e técnicas. Não dá para saber qual linha importa e qual dá para pular.

Muita gente instala, testa uma vez, acha que "não muda tanta coisa assim" e desiste.

## ✨ Como este guia ajuda

- **Do zero ao uso em 20 minutos**: três lições para iniciantes, um só caminho. Cada passo diz o que você deve ver e o que fazer se não vir.
- **Aprenda só o que precisa**: um comando, `/poteto-mode`, e uma mensagem em três partes: **O que eu quero · Como fica quando estiver pronto · O que me mostrar ao terminar**. Todo o resto está marcado como "consulte quando precisar".
- **Um prompt pronto para copiar em cada situação**: corrigir um bug, adicionar um recurso, refatorar, assumir um código desconhecido, passar o trabalho adiante antes de dormir. Troque as partes entre `< >` e envie.
- **Aprenda a ler as respostas**: onde achar a reformulação do pedido, a lista de tarefas e as verificações, como saber se ela trabalhou bem e que frase mandar quando ela sair do rumo.
- **Aprenda a escrever prompts com um especialista**: leia o texto completo das 34 skills, com algumas frases de cada uma destrinchadas: o que a linha faz a IA fazer, por que foi escrita assim e como aproveitar a ideia.
- **Linguagem simples**: cada página começa com uma linha dizendo no que ela ajuda, e os termos desconhecidos se explicam quando você passa o mouse.
- **Para ler em qualquer lugar do mundo**: a página inicial e as lições para iniciantes estão em 10 idiomas, então você pode começar no seu.
- **Sempre atualizado**: conferido com a versão atual do pstack; todos os comandos batem com o repositório oficial.

**Por onde começar**

- **Nunca escreveu código**: as [3 lições para iniciantes](https://pstack.xiaoxiaodong.ai/pt/start/1-why/), 20 minutos. Aprenda a pedir para a IA criar pequenas páginas e ferramentas para você, e a saber se ela acertou.
- **Você programa**: o [guia em 9 passos](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) e 17 guias práticos, da primeira tarefa até deixá-lo trabalhando sozinho a noite toda.
- **Quer conversar melhor com a IA**: cada uma das [34 skills](https://pstack.xiaoxiaodong.ai/en/skills/) vem com o texto completo e uma análise de como foi escrita. Veja como um especialista escreve prompts.

## 🧭 Como ele trabalha

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="Como o pstack trabalha: você diz o que quer, /poteto-mode escolhe um playbook, chama as skills passo a passo e volta com provas">
</p>

Você só precisa lembrar de um comando, `/poteto-mode`, e dizer com clareza **o que quer** e **o que conta como pronto**. Ele escolhe um dos 23 "playbooks" (corrigir bug, adicionar recurso, refatorar, investigar desempenho...), copia os passos para uma lista de tarefas e chama as outras skills um passo de cada vez. Os passos que ele decide pular não somem em silêncio: ficam marcados como `skip: motivo`.

## ⚡ Comece em três minutos

**1. Instale** (escolha a opção da sua ferramenta)

```bash
# Claude Code (os comandos ganham o prefixo pstack:, por exemplo /pstack:poteto-mode)
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex, OpenCode e outros (Node.js 22.20+; adicione -g para instalar globalmente)
npx skills add backnotprop/pstack
```

**2. Escolha os modelos**: numa conversa nova, rode `/setup-pstack` uma vez. Quando ele perguntar se deve gerar uma "skill de verificação", responda **sim**. No Claude Code, veja [três configurações recomendadas](https://pstack.xiaoxiaodong.ai/en/howto/claude-code/#how-to-set-it-up-well) para combinar o modelo da sessão com cada papel.

**3. Sua primeira tarefa**: escolha algo real, mas não muito grande, e explique como se estivesse passando o trabalho para um colega:

```text
/poteto-mode Às vezes os favoritos aparecem duplicados depois de recarregar. Reproduza primeiro; não mude código ainda.
Pronto significa: depois de clicar em Favorito dez vezes seguidas, a lista e o chrome.storage têm exatamente uma entrada cada.
Mostre o conteúdo real do storage antes e depois da correção.
```

> [!TIP]
> Um bom prompt tem no máximo cinco coisas: **o objetivo**, **o que conta como pronto**, **que provas você quer ver**, **o que você já sabe** e **o que não pode ser tocado**. Duas coisas é melhor deixar de fora: como fazer exatamente e o seu palpite sobre a causa. Mais no [Passo 3](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/) (em inglês).

## 🗺️ 34 skills em um mapa

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="Mapa de skills do pstack: 34 skills em sete grupos, mais 24 princípios">
</p>

No dia a dia você só digita `/poteto-mode`; ele chama as outras quando precisa. Se quiser chamar uma pelo nome, ou consultar um nome que a IA mencionou, veja a [Referência de skills](https://pstack.xiaoxiaodong.ai/en/skills/) (em inglês): cada skill tem um resumo em linguagem simples, quando usar, um exemplo para copiar e com quais outras instalar. Abra uma skill para ler o SKILL.md completo e "o que a redação dela ensina": algumas frases do original, o que cada uma faz a IA fazer, por que foi escrita assim e como aproveitar a ideia nos seus próprios prompts.

## 🛠 Em projetos reais

Cada guia traz prompts que você pode copiar como estão, com exemplos de cenários reais como uma extensão do Chrome, um site em Astro e um site de membros na Cloudflare.

| O trabalho na sua frente | Leia isto | A ideia em uma frase |
|---|---|---|
| Corrigir um bug | [Reproduzir, corrigir, provar](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | Faça o bug acontecer de novo antes de corrigir qualquer coisa |
| Adicionar um recurso | [Sem quebrar o que já existe](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | Diga qual comportamento existente não pode mudar de jeito nenhum |
| Refatorar | [Nova estrutura, mesmo comportamento](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | Grave a saída atual primeiro e depois prove que ela não mudou |
| Está lento demais | [Deixar mais rápido, com números](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | Dê a ele uma medição, não uma impressão |
| Assumir um projeto desconhecido | [Entender antes de mexer](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | "Não mude código ainda" faz ele só investigar |
| Inseguro antes de enviar | [Deixar vários modelos procurarem falhas](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | Fique só com os problemas que dá para provar falhando |
| Escrever documentação | [READMEs, descrições de PR](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | Para código que outras pessoas vão usar, escreva o README primeiro |
| Uma migração grande | [Entregar antes de dormir](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | Uma condição de pronto que passa ou falha, não "trabalhe 4 horas" |

Também há [Prompts para copiar e colar](https://pstack.xiaoxiaodong.ai/en/howto/recipes/), [Trazer de volta ao rumo com uma frase](https://pstack.xiaoxiaodong.ai/en/howto/steer/) e [Não sei qual skill usar](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/) (tudo em inglês).

## 🌙 Deixe-o trabalhar a noite toda

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="Deixar a IA trabalhar a noite toda: a cada rodada ela verifica a condição de pronto, faz a menor mudança, verifica, faz commit ou descarta e anota uma linha no log; de manhã você lê o log de decisões">
</p>

É aqui que todos os passos anteriores compensam: só uma IA que **consegue verificar o próprio trabalho** pode ser deixada trabalhando sozinha com tranquilidade. Antes de dormir, entregue a ela um "contrato": o objetivo, uma condição de pronto que passa ou falha sem ambiguidade, um worktree novo, um log de decisões e uma saída de emergência para quando ela travar. De manhã, leia primeiro a parte "needs attention" da resposta do `/show-me-your-work`. Você revisa decisões em vez de reler a noite inteira. Mais no [Passo 7](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/) (em inglês).

## 📚 O que tem no site

| Seção | Conteúdo |
|---|---|
| [Trilha para iniciantes](https://pstack.xiaoxiaodong.ai/pt/start/1-why/) | 3 lições, 20 minutos, sem precisar programar: o que ele faz por você → instalar → usar pela primeira vez |
| [Guia completo](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) | 9 passos para quem programa: o que é → instalar → escolher modelos → primeira tarefa → entender primeiro → projetar, construir, limpar → verificar e entregar → a noite toda → quando você já estiver à vontade |
| [Referência de skills](https://pstack.xiaoxiaodong.ai/en/skills/) | 34 skills, cada uma com o texto completo e uma análise da redação |
| [How-to](https://pstack.xiaoxiaodong.ai/en/howto/) | 17 guias, uma tarefa cada |
| [Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/) | 20 conceitos: uma frase → uma analogia → no pstack → equívocos comuns; inclui tabelas dos 24 princípios e dos 23 playbooks |
| [Perguntas frequentes](https://pstack.xiaoxiaodong.ai/en/faq/) | Custa dinheiro? Preciso usar o Cursor? Ele vai bagunçar meu código? |
| Idiomas | Página inicial e lições para iniciantes: 10 idiomas. Guia completo, skills, how-tos, wiki e perguntas frequentes: English e 中文 |

Aperte <kbd>⌘</kbd> <kbd>K</kbd> no canto superior direito de qualquer página para buscar no site inteiro. No texto, o **marca-texto** e o **sublinhado grosso** indicam o essencial, e termos com sublinhado pontilhado mostram uma explicação de uma linha ao passar o mouse.

## 🧑‍💻 Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # gera a saída em dist/
npm run release    # compila e publica na Cloudflare
```

```text
src/data/nav.js        Estrutura do site: guia, lista de How-to, glossário (fonte única)
src/data/skills.js     Dados da referência de skills
src/data/wiki.js       Verbetes da Wiki
src/data/faq.js        Perguntas frequentes
src/pages/start/       Trilha para iniciantes, 3 lições (MDX)
src/pages/guide/       Guia (MDX)
src/pages/howto/       How-to (MDX)
public/xxd/            Xiaoxiaodong UI Kit (cópia própria, sem CDN)
tools/build_assets.py  Gera as ilustrações do README, as animações SVG e a imagem de compartilhamento (social.svg → social.png / public/og.png)
```

Para editar conteúdo, adicionar páginas e as regras de escrita, veja [docs/MAINTAINING.md](docs/MAINTAINING.md) (em chinês). Todas as imagens do README são geradas por `python3 tools/build_assets.py`; rode de novo depois de mudar textos ou cores.

## 🙌 Agradecimentos

- O [pstack](https://github.com/cursor/plugins/tree/main/pstack) é desenvolvido por [poteto](https://x.com/poteto); este site usa o [backnotprop/pstack](https://github.com/backnotprop/pstack), um mirror de uso geral. O guia foi escrito com base no README e no docs/guide dele; para comandos e comportamento, vale o repositório oficial.
- A estrutura do site vem do [site de tutoriais Xiaoxiaodong VPS](https://vps.xiaoxiaodong.ai), a interface usa o [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai) e as cores das ilustrações foram emprestadas do [ghostty-tint](https://github.com/nevertoday/ghostty-tint).

Este é um guia para iniciantes não oficial. Se algo não estiver claro, ou se seguir os passos não funcionar, [abra uma issue](https://github.com/nevertoday/xxd-pstack/issues).

## 📄 Licença

O texto do tutorial e o código do site estão sob a licença [MIT](LICENSE). O build do Xiaoxiaodong UI Kit em `public/xxd/` não está incluído; ele tem sua própria [LICENSE](public/xxd/LICENSE) (gratuito para uso não comercial; uso comercial exige licença).

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)

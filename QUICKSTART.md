# 🚀 Quick Start — Configurando seu Workspace Antigravity em 5 Minutos

Bem-vindo ao **agy-maker**! Este guia te leva do zero ao pronto para trabalhar com agentes de IA em 5 minutos.

---

## 1️⃣ Instalação Automática

Na raiz do seu projeto, execute:

```bash
npx github:mfbeira/agy-maker
```

Isso copia automaticamente:
- ✅ Estrutura `.agents/` (rules, agent, skills, workflows, memory)
- ✅ Documentação em `docs/`
- ✅ Arquivo `AGENTS.md` (ponto de entrada)
- ✅ Modelo `.env.example`

---

## 2️⃣ Personalize para Seu Projeto

Após a instalação, siga o **[CHECKLIST.md](./CHECKLIST.md)** para limpar e configurar conforme seu projeto:

- [ ] Renomear ou limpar agentes genéricos
- [ ] Ajustar regras globais (`00-global-rules.md`)
- [ ] Preencher memória do projeto (convenções, preferências, decisões)
- [ ] Criar seu primeiro agente especialista

---

## 3️⃣ Estrutura que Você Recebeu

```text
.agents/
├── rules/              📜 Regras mandatórias (ex: idioma, simplicidade)
├── agent/              🧠 Personas especializadas (frontend, backend, etc.)
├── skills/             🛠️ Catálogo de habilidades técnicas
├── workflows/          ⚡ Slash commands (/plan, /debug, /create, etc.)
└── memory/             💾 ADRs, convenções, preferências (cross-session)

docs/
├── pt-br/              🇧🇷 Guias em Português
├── en/                 🇺🇸 English Documentation
└── setup/              ⚙️ Configuração de IDE e ambiente

AGENTS.md              🎯 Ponto de entrada para Antigravity IDE
```

---

## 4️⃣ Primeiros Passos

### Passo A: Leia o AGENTS.md
O arquivo [AGENTS.md](./AGENTS.md) é o **ponto de entrada** para todo agente de IA atuar neste workspace. Ele define:
- Qual é o papel da IA (Engenheiro Sênior)
- Quais diretrizes seguir (PT-BR, Clean Code, Progressive Disclosure)
- Onde encontrar regras, skills, workflows e memória

### Passo B: Explore os Exemplos
Dentro de cada diretório do `.agents/`, você encontra:
- **`README.md`:** Guia de uso e estrutura
- **Exemplos de arquivo:** Como criar seus próprios agentes, skills e workflows

Exemplos prontos para copiar/adaptar:
- [`.agents/agent/orchestrator.md`](./.agents/agent/orchestrator.md) — Agente coordenador multidisciplinar
- [`.agents/skills/example-skill/`](./.agents/skills/example-skill/) — Estrutura completa de uma skill
- [`.agents/workflows/example.md`](./.agents/workflows/example.md) — Template de workflow

### Passo C: Preencha a Memória do Projeto
Edite os arquivos em `.agents/memory/` para "treinar" a IA com o contexto do seu projeto:

1. **[project-conventions.md](./.agents/memory/project-conventions.md)** — Padrões de código e nomenclatura
2. **[tech-decisions.md](./.agents/memory/tech-decisions.md)** — Decisões arquiteturais (ADRs)
3. **[user-preferences.md](./.agents/memory/user-preferences.md)** — Preferências pessoais de trabalho
4. **[feedback-history.md](./.agents/memory/feedback-history.md)** — Histórico de alinhamentos e correções

---

## 5️⃣ Usando no Google Antigravity IDE / Gemini CLI

Depois de personalizar, qualquer agente de IA (Claude, Gemini, etc.) lerá automaticamente:

1. **[AGENTS.md](./AGENTS.md)** — Instruções globais
2. **[`.agents/rules/`](./.agents/rules/)** — Regras mandatórias
3. **[`.agents/memory/MEMORY.md`](./.agents/memory/MEMORY.md)** — Contexto persistente
4. **[`.agents/agent/`](./.agents/agent/)** — Especialistas disponíveis
5. **[`.agents/skills/`](./.agents/skills/)** — Skills carregadas sob demanda
6. **[`.agents/workflows/`](./.agents/workflows/)** — Comandos disponíveis (ex: `/plan`, `/debug`)

---

## 6️⃣ Próximos Passos

### ✨ Crie Seu Primeiro Agente Especialista

1. Copie o exemplo em [`.agents/agent/orchestrator.md`](./.agents/agent/orchestrator.md)
2. Renomeie para algo específico (ex: `backend-specialist.md`)
3. Defina o papel, diretrizes e skills necessárias

**Exemplo:** Você está em um projeto Node.js? Crie um `backend-specialist.md` que carregue skills de API patterns, banco de dados e testes automaticamente.

### 🛠️ Crie Sua Primeira Skill Modular

1. Copie a pasta `.agents/skills/example-skill/`
2. Renomeie para sua skill (ex: `react-patterns/`)
3. Edite `SKILL.md` com instruções práticas

**Exemplo:** Uma skill `testing-strategies/` que defina padrões de testes unitários, integração e E2E para seu projeto.

### ⚡ Crie Seu Primeiro Workflow

1. Copie [`.agents/workflows/example.md`](./.agents/workflows/example.md)
2. Renomeie para seu comando (ex: `feature.md` → `/feature`)
3. Defina os passos, agente responsável e critérios de aceitação

**Exemplo:** Um workflow `/feature` que guie desde o planejamento até a integração de novas funcionalidades.

---

## 🔗 Documentação Completa

- 📖 [Guia de Regras](./.agents/rules/README.md) — Como criar e organizar regras
- 🧠 [Guia de Agentes](./.agents/agent/README.md) — Personas e subagentes especializados
- 🛠️ [Guia de Skills](./.agents/skills/README.md) — Habilidades técnicas modulares
- ⚡ [Guia de Workflows](./.agents/workflows/README.md) — Slash commands e automações
- 💾 [Guia de Memória](./.agents/memory/README.md) — Sistema de memória persistente

---

## ❓ Perguntas Frequentes

**P: Eu tenho que usar todos os módulos?**  
R: Não. Use o que sua equipe/projeto precisar. Comece simples e expanda conforme necessário.

**P: Posso modificar AGENTS.md?**  
R: Sim! Personalize conforme as necessidades do seu projeto. O arquivo é um ponto de entrada, não uma restrição.

**P: Como adiciono novas regras?**  
R: Crie um `.md` em `.agents/rules/` e referencie no `AGENTS.md`. Veja [Guia de Regras](./.agents/rules/README.md).

**P: Qual é o ciclo de vida de uma skill?**  
R: Progressive Disclosure → Skill é carregada sob demanda quando mencionada ou necessária. Não polui o contexto inicial.

---

## 💡 Dica Pro

Mantenha `.agents/memory/MEMORY.md` sempre atualizado. Este é o arquivo que será lido **em cada nova sessão** com agentes de IA. Quanto mais rich for esse contexto, melhor a IA entenderá seu projeto.

---

**Pronto? Siga o [CHECKLIST.md](./CHECKLIST.md) e personalize seu workspace! 🎯**

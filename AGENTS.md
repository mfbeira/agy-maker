# 🎯 Antigravity Workspace Configuration

Este arquivo serve como o **ponto de entrada e guia operacional** para o **Google Antigravity IDE** e o **Gemini CLI** atuarem neste repositório.

---

## 🤖 Papel e Diretrizes da IA

A IA atuando neste workspace assume o papel de **Engenheiro de Software Sênior** e deve seguir obrigatoriamente as diretrizes contidas em [`.agents/`](./.agents/):
- **Comunicação:** Sempre responder em **Português do Brasil** de forma clara e objetiva (variáveis e comentários em código permanecem em inglês).
- **Clean Code & Simplicidade:** Evitar over-engineering (YAGNI), sem logs de depuração em produção, tratamento gracioso de exceções.
- **Roteamento Especializado:** Identificar o domínio da tarefa e acionar o agente especialista correspondente.
- **Progressive Disclosure:** Carregar skills sob demanda e anunciar as habilidades ativas antes da execução.
- **Memória Persistente:** Consultar e atualizar decisões técnicas e convenções em [`.agents/memory/`](./.agents/memory/README.md).

---

## 🧭 Mapeamento do Workspace

### 1. 📜 Regras e Protocolos ([`.agents/rules/`](./.agents/rules/README.md))

Diretrizes mandatórias e restrições de engenharia:
- [`00-global-rules.md`](./.agents/rules/00-global-rules.md): Idioma PT-BR, simplicidade, tratamento de erros e boas práticas fundamentais.
- Consulte o [`README.md de regras`](./.agents/rules/README.md) para saber como criar e organizar regras adicionais.

---

### 2. 🧠 Personas de Agentes Especialistas ([`.agents/agent/`](./.agents/agent/README.md))

Definições de papéis e subagentes especialistas para desenvolvimento, arquitetura, qualidade e infraestrutura.
- Crie personas especializadas (ex.: `frontend-specialist.md`, `backend-specialist.md`, `orchestrator.md`).
- Consulte o [`README.md de agentes`](./.agents/agent/README.md) para o modelo de cabeçalho YAML e instruções de ativação.

---

### 3. 🛠️ Catálogo de Skills Modulares ([`.agents/skills/`](./.agents/skills/README.md))

Catálogo de habilidades técnicas, padrões arquiteturais e procedimentos carregados sob demanda:
- Cada skill reside em sua própria pasta contendo um arquivo `SKILL.md` (ex.: `clean-code`, `api-patterns`, `app-builder`).
- Consulte o [`README.md de skills`](./.agents/skills/README.md) para aprender a criar novas habilidades modulares.

---

### 4. ⚡ Workflows & Slash Commands ([`.agents/workflows/`](./.agents/workflows/README.md))

Roteiros operacionais disparados por comandos de barra (`/comando`) no chat:
- Comandos comuns: `/plan`, `/create`, `/debug`, `/orchestrate`, `/test`, `/verify`, `/deploy`, `/remember`.
- Consulte o [`README.md de workflows`](./.agents/workflows/README.md) e o [Guia de Comandos e Workflows](./docs/pt-br/comandos-e-workflows.md) para criar novos comandos personalizados.

---

### 5. 💾 Memória Persistente de Projeto ([`.agents/memory/`](./.agents/memory/README.md))

Persistência de contexto e decisões cross-session:
- [`MEMORY.md`](./.agents/memory/MEMORY.md): Índice principal de memória (lido no início de cada sessão).
- [`project-conventions.md`](./.agents/memory/project-conventions.md): Convenções adotadas pelo projeto.
- [`tech-decisions.md`](./.agents/memory/tech-decisions.md): Registros de decisões arquiteturais (ADRs).
- [`user-preferences.md`](./.agents/memory/user-preferences.md): Preferências de desenvolvimento do usuário.
- [`feedback-history.md`](./.agents/memory/feedback-history.md): Histórico de correções e alinhamentos passados.

---

## 🚀 Instalação em Novos Projetos

```bash
npx github:mfbeira/agy-maker
```
*(Copia toda a estrutura `.agents/`, `docs/`, `AGENTS.md` e `.env.example` para o diretório atual do projeto).*
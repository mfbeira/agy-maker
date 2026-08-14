# ⚡ Documentação: Descoberta e Execução de Comandos e Workflows

Este documento explica detalhadamente como o **Antigravity IDE** e o **Gemini CLI** localizam, interpretam e executam os comandos de barra (*Slash Commands*) a partir da pasta de configurações do workspace.

---

## 📍 1. Onde a IDE Identifica os Comandos?

No Antigravity IDE, os comandos de barra são descobertos e carregados automaticamente a partir do diretório:

```text
📁 .agents/workflows/
```

Cada arquivo `.md` (Markdown) dentro desta pasta representa diretamente um **Slash Command**.

### 🔗 Mapeamento Nome do Arquivo → Comando:

| Arquivo Físico | Comando no Chat / Terminal | Função |
| :--- | :--- | :--- |
| `.agents/workflows/plan.md` | `/plan` | Ativa o modo de planejamento em 4 fases sem código. |
| `.agents/workflows/create.md` | `/create` | Inicia o fluxo completo de criação de um novo app/feature. |
| `.agents/workflows/debug.md` | `/debug` | Inicia investigação sistemática de causas-raiz. |
| `.agents/workflows/orchestrate.md` | `/orchestrate` | Coordena múltiplos agentes em paralelo para tarefas complexas. |
| `.agents/workflows/test.md` | `/test` | Gera e roda testes automatizados no padrão AAA. |
| `.agents/workflows/verify.md` | `/verify` | Valida o código por execução real antes de finalizar. |
| `.agents/workflows/deploy.md` | `/deploy` | Executa checklist de pré-vôo, segurança e deploy. |
| `.agents/workflows/preview.md` | `/preview` | Gerencia e inspeciona servidores de desenvolvimento local. |
| `.agents/workflows/remember.md` | `/remember` | Salva decisões e convenções na memória permanente. |
| `.agents/workflows/status.md` | `/status` | Exibe o status e progresso da sessão atual. |
| `.agents/workflows/brainstorm.md` | `/brainstorm` | Exploração socrática de ideias antes de planejar. |
| `.agents/workflows/enhance.md` | `/enhance` | Evolução e acréscimo de novas features. |
| `.agents/workflows/coordinate.md` | `/coordinate` | Despacho paralelo com síntese inteligente. |

---

## ⚙️ 2. Como Funciona a Descoberta Automática?

1. **Varredura Hierárquica:** Ao abrir o workspace ou iniciar uma sessão de chat, a engine do Antigravity IDE faz uma varredura do diretório atual até a raiz do repositório procurando por pastas `.agents/workflows/` (ou `.agent/workflows/`).
2. **Registro de Slash Commands:** A IDE lê os metadados de cada arquivo `.md` e registra o comando no motor de autocomplete do chat.
3. **Autocomplete no Chat:** Ao digitar `/` na caixa de mensagem, o IDE exibe a lista dos comandos disponíveis com suas respectivas descrições.
4. **Injeção de Contexto:** Quando você envia `/create app de tarefas`, o conteúdo do arquivo `create.md` é injetado como instrução operacional de alta prioridade, substituindo a variável `$ARGUMENTS` pelo texto que você digitou (`app de tarefas`).

---

## 📝 3. Anatomia de um Arquivo de Workflow

Um arquivo de comando em `.agents/workflows/<nome>.md` é composto por duas partes:

```markdown
---
name: create
description: Inicia a criação de um novo aplicativo orquestrando agentes e skills.
version: 1.0.0
requires_agents: orchestrator, project-planner
requires_skills: app-builder, design-spec, verify-changes
artifact_outputs: implementation-plan, changed-files, verification-report
---

# /create - Criação de Aplicação

$ARGUMENTS

---

## 🎯 Objetivo
Descrever o que este comando faz...

## 📋 Passos Obrigatórios
1. Análise da requisição ($ARGUMENTS).
2. Carregar o agente `project-planner` e as skills necessárias.
3. Criar o plano `{slug}.md`.
4. Executar a implementação e validar.
```

### Campos do Frontmatter YAML:
- **`name`** (obrigatório): O identificador do comando (ex: `create`).
- **`description`** (obrigatório): A descrição que aparece no menu de autocomplete da IDE.
- **`requires_agents`** (opcional): Agentes especialistas que devem ser acionados durante a execução.
- **`requires_skills`** (opcional): Skills que a IA deve carregar obrigatoriamente para este workflow.
- **`artifact_outputs`** (opcional): Tipos de artefatos que o comando deve gerar.
- **`$ARGUMENTS`**: Variável dinâmica que recebe os argumentos digitados pelo usuário após o comando.

---

## 🧩 4. Comparativo: Comandos vs. Skills vs. Regras vs. Agentes

Para entender a arquitetura completa do Antigravity:

| Componente | Localização | Como é Ativado? | Propósito |
| :--- | :--- | :--- | :--- |
| **Comandos / Workflows** | `.agents/workflows/*.md` | **Manual (pelo Usuário)** via `/comando [args]` | Define um roteiro/runbook passo a passo para um fluxo específico. |
| **Regras (Rules)** | `.agents/rules/*.md` e `AGENTS.md` | **Automático (Sempre Ativo)** | Diretrizes globais e restrições (PT-BR, Clean Code, Anti-Slop). |
| **Skills** | `.agents/skills/*/SKILL.md` | **Sob Demanda (Progressive Disclosure)** | Conhecimentos técnicos e procedimentos profundos (ex: React, APIs, Docker). |
| **Agentes (Personas)** | `.agents/agent/*.md` | **Auto-Roteado ou por Workflow** | Papel e postura de especialista (ex: DBA, Especialista Frontend, Auditor). |

---

## 🛠️ 5. Como Criar um Novo Comando Customizado

Para adicionar um novo comando ao seu projeto, basta criar um novo arquivo `.md` dentro de `.agents/workflows/`:

### Exemplo: Criando o comando `/api-doc`
Crie o arquivo `.agents/workflows/api-doc.md`:

```markdown
---
name: api-doc
description: Analisa os endpoints da aplicação e gera uma documentação Swagger/OpenAPI ou Markdown.
version: 1.0.0
requires_agents: backend-specialist, documentation-writer
requires_skills: api-patterns, documentation-templates
---

# /api-doc - Gerador de Documentação de API

$ARGUMENTS

## Passos:
1. Localizar todas as rotas e controllers em `src/` ou `api/`.
2. Analisar métodos HTTP, parâmetros, payload e respostas.
3. Gerar arquivo `docs/API.md` padronizado.
```

**Resultado:** Imediatamente, ao digitar `/api-doc` no chat da IDE, o comando estará disponível!

# ⚡ Diretório de Workflows e Slash Commands (`.agents/workflows/`)

Este diretório armazena os **guias operacionais e procedimentos estruturados de workflows** que podem ser acionados via **Slash Commands** (comandos com barra como `/plan`, `/create`, `/debug`, `/test`, etc.) no Antigravity IDE e Gemini CLI.

---

## 🎯 Finalidade

Workflows definem fluxos de trabalho passo a passo para tarefas complexas, garantindo consistência, qualidade e adesão aos padrões de engenharia de software da equipe.

---

## 🚀 Como Funcionam os Slash Commands

Quando você digita um comando com barra no chat do Antigravity (ex.: `/debug O login falha com status 401`), a IDE:
1. Localiza o arquivo `.agents/workflows/<comando>.md`.
2. Carrega as instruções do workflow e o agente especialista responsável.
3. Executa o roteiro estruturado definido no workflow.

---

## 📋 Workflows Comuns

| Comando | Arquivo | Finalidade |
| :--- | :--- | :--- |
| `/brainstorm` | `brainstorm.md` | Exploração estruturada de ideias e arquitetura antes do código. |
| `/plan` | `plan.md` | Planejamento em fases (sem código antes de validar o plano). |
| `/create` | `create.md` | Criação guiada de novas aplicações do zero. |
| `/enhance` | `enhance.md` | Adição de novas features e evolução de sistemas existentes. |
| `/orchestrate` | `orchestrate.md` | Orquestração de múltiplos agentes em paralelo para tarefas complexas. |
| `/debug` | `debug.md` | Investigação sistemática de causa-raiz e correção orientada por evidências. |
| `/test` | `test.md` | Criação e execução de baterias de testes (Unitários, Integração, E2E). |
| `/verify` | `verify.md` | Verificação prática executando comandos e testes no terminal. |
| `/deploy` | `deploy.md` | Checklist de pré-vôo, segurança e deploy para produção. |
| `/preview` | `preview.md` | Gerenciamento de servidores de desenvolvimento local. |
| `/remember` | `remember.md` | Persistência de novas decisões técnicas e convenções na memória. |

---

## ✍️ Como Criar um Novo Workflow

1. Crie um arquivo Markdown dentro de `.agents/workflows/` com o nome do comando (ex.: `audit.md` para acionar `/audit`).
2. Defina os passos sequenciais, agente recomendado, skills necessárias e critérios de aceitação.

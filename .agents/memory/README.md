# 💾 Sistema de Memória Persistente (`.agents/memory/`)

Este diretório armazena a **memória persistente cross-session** do projeto. Ele permite que a IA recorde convenções, decisões arquiteturais (ADRs), preferências do desenvolvedor e histórico de alinhamentos entre diferentes sessões de desenvolvimento.

---

## 🎯 Finalidade

Sem um sistema de memória, a cada nova sessão o assistente de IA "esquece" decisões tomadas anteriormente. O diretório `memory/` resolve esse problema servindo como uma fonte única da verdade para o contexto contínuo do projeto.

---

## 📂 Arquitetura da Memória

```text
.agents/memory/
├── MEMORY.md                 # Índice principal carregado no início de cada sessão
├── project-conventions.md    # Padrões e convenções de código do projeto
├── tech-decisions.md         # Registro de Decisões de Arquitetura (ADRs)
├── user-preferences.md       # Preferências pessoais de desenvolvimento do usuário
└── feedback-history.md       # Correções e alinhamentos passados para evitar erros repetidos
```

---

## 🔍 Como Funciona o `MEMORY.md`

O arquivo `MEMORY.md` funciona como um índice rápido de ponteiros (tópicos de uma linha apontando para os arquivos temáticos detalhados):

```markdown
# Memory Index

## Project
- [project] Adotado Next.js App Router com TypeScript → tech-decisions.md
- [convention] Usar Tailwind CSS v4 para estilização → project-conventions.md
- [preference] Sempre responder em Português do Brasil → user-preferences.md
```

Ao iniciar uma sessão, a IA lê o `MEMORY.md` e, caso precise de mais detalhes sobre um tópico específico, abre o arquivo correspondente.

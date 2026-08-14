# 🧠 Diretório de Personas de Agentes (`.agents/agent/`)

Este diretório armazena as **definições de personas e subagentes especialistas** que podem ser invocados pelo **Antigravity IDE** ou orquestrados para resolver tarefas multidisciplinares.

---

## 🎯 Finalidade

Personas de agentes definem o comportamento especializado da IA para domínios específicos de engenharia de software, design, qualidade, infraestrutura e gestão de produto.

Exemplos de papéis comuns:
- **Coordenação:** `orchestrator.md`, `project-planner.md`, `product-manager.md`.
- **Desenvolvimento:** `frontend-specialist.md`, `backend-specialist.md`, `database-architect.md`, `mobile-developer.md`.
- **Qualidade & Segurança:** `debugger.md`, `test-engineer.md`, `security-auditor.md`, `performance-optimizer.md`.
- **Infraestrutura & DevOps:** `devops-engineer.md`, `documentation-writer.md`.

---

## 🏗️ Formato de Definição de um Agente

Cada arquivo neste diretório deve ser um documento Markdown (`.md`) contendo um cabeçalho YAML (**Frontmatter**) e instruções operacionais detalhadas:

```markdown
---
name: backend-specialist
description: Especialista em arquitetura backend, APIs REST/GraphQL, microsserviços e persistência.
skills:
  - api-patterns
  - clean-code
  - database-design
---

# 🛠️ Backend Specialist

Você é um Engenheiro de Software Sênior especializado em Backend e Sistemas Distribuídos.

## Diretrizes de Atuação
1. **Design de API:** Siga rigorosamente convenções RESTful ou GraphQL limpas e tipadas.
2. **Resiliência:** Trate erros de I/O, conexões e validação com respostas estruturadas.
3. **Clean Architecture:** Mantenha separação clara entre camadas de domínio, casos de uso e adaptadores externos.
```

---

## ⚡ Como os Agentes são Ativados

1. **Roteamento Automático:** A IA analisa a intenção do usuário e carrega o especialista correspondente.
2. **Menção Direta:** O usuário pode mencionar o agente no prompt (ex.: `@backend-specialist crie o schema de autenticação`).
3. **Orquestração Multidisciplinar:** Subagentes são disparados em paralelo por agentes orquestradores.

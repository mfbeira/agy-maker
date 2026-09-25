# ✅ Checklist de Configuração Inicial — Personalizando seu Workspace Antigravity

Depois de executar `npx github:mfbeira/agy-maker`, use este checklist para limpar e configurar a base conforme **seu projeto específico**.

---

## 📋 Fase 1: Limpeza de Arquivos de Template (Obrigatório)

- [ ] **Remover exemplos genéricos**
  - [ ] Deletar [`.agents/agent/orchestrator.md`](./.agents/agent/orchestrator.md) (use como referência, não deixe no projeto)
  - [ ] Deletar pasta [`.agents/skills/example-skill/`](./.agents/skills/example-skill/)
  - [ ] Deletar [`.agents/workflows/example.md`](./.agents/workflows/example.md)

- [ ] **Limpar documentação de exemplo**
  - [ ] Revisar e adaptar [`.agents/memory/project-conventions.md`](./.agents/memory/project-conventions.md)
  - [ ] Revisar e adaptar [`.agents/memory/tech-decisions.md`](./.agents/memory/tech-decisions.md)
  - [ ] Revisar e adaptar [`.agents/memory/user-preferences.md`](./.agents/memory/user-preferences.md)
  - [ ] Deletar ou completar [`.agents/memory/feedback-history.md`](./.agents/memory/feedback-history.md)

---

## 🎯 Fase 2: Configurar AGENTS.md (Obrigatório)

Edite [AGENTS.md](./AGENTS.md) para refletir **seu projeto específico**:

- [ ] **Atualizar seção "Papel da IA"**
  - [ ] Mudar de "Engenheiro de Software Sênior" para o papel adequado (ex: "Full-Stack Developer", "DevOps Engineer", "Data Scientist")
  - [ ] Adicionar domínios específicos (ex: "especializado em Node.js", "com foco em segurança")

- [ ] **Personalizar seções do workspace**
  - [ ] Adicionar links para documentação específica do projeto
  - [ ] Remover seções de `.agents/` que seu projeto não usa
  - [ ] Adicionar referências a ferramentas/frameworks específicas (React, Django, PostgreSQL, etc.)

- [ ] **Atualizar exemplos de skills/workflows**
  - [ ] Listar skills que seu projeto **definitivamente** usará (ex: "typescript-patterns", "react-best-practices")
  - [ ] Listar workflows que existem no projeto (ex: "/feature", "/hotfix", "/release")

---

## 🧠 Fase 3: Definir Agentes Especialistas (Recomendado)

Crie personas para cada domínio do projeto (use [`.agents/agent/README.md`](./.agents/agent/README.md) como guia):

- [ ] **Identificar domínios principais**
  - [ ] Quais tecnologias/domínios principais? (Backend, Frontend, DevOps, QA, etc.)
  - [ ] Cada domínio precisa de um agente especialista?

- [ ] **Criar agentes especializados**
  - [ ] `backend-specialist.md` (se houver backend)
  - [ ] `frontend-specialist.md` (se houver frontend)
  - [ ] `devops-engineer.md` (se houver infraestrutura)
  - [ ] `test-engineer.md` (se houver foco em qualidade)
  - [ ] Outros: `database-architect.md`, `security-auditor.md`, etc.

- [ ] **Definir cada agente com:**
  - [ ] Nome descritivo (`name:` no YAML)
  - [ ] Descrição de responsabilidades (`description:`)
  - [ ] Lista de skills que carrega automaticamente (`skills:`)
  - [ ] Instruções operacionais detalhadas

---

## 🛠️ Fase 4: Criar Skills Modulares (Opcional mas Recomendado)

Skills são **habilidades técnicas reutilizáveis**. Crie uma para cada padrão recorrente:

- [ ] **Identificar padrões recorrentes**
  - [ ] Quais padrões repetem no código? (autenticação, validação, API patterns)
  - [ ] Quais frameworks/libraries seu projeto usa? (React, Express, PostgreSQL)
  - [ ] Quais processos são repetitivos? (CI/CD, deploy, testes)

- [ ] **Criar skills conforme necessário**
  - [ ] `clean-code/` — Padrões pragmáticos de código limpo
  - [ ] `typescript-patterns/` — Padrões TypeScript específicos
  - [ ] `api-design/` — Convenções de APIs REST/GraphQL
  - [ ] `testing-strategies/` — Padrões de testes (unitário, integração, E2E)
  - [ ] `database-patterns/` — Patterns de ORM/queries/migrations
  - [ ] Outras conforme necessário

- [ ] **Estrutura de cada skill**
  ```text
  .agents/skills/minha-skill/
  ├── SKILL.md              # (Obrigatório) Metadados YAML + instruções
  ├── scripts/              # (Opcional) Scripts de automação
  ├── references/           # (Opcional) Documentação profunda
  └── examples/             # (Opcional) Exemplos de código
  ```

---

## ⚡ Fase 5: Criar Workflows (Opcional)

Workflows são **roteiros estruturados** acionados por slash commands (ex: `/plan`, `/debug`, `/feature`):

- [ ] **Identificar workflows importantes**
  - [ ] Como se planeja uma feature? (`/feature`)
  - [ ] Como se cria um bugfix? (`/hotfix`)
  - [ ] Como se faz refactoring? (`/refactor`)
  - [ ] Como se prepara um deploy? (`/deploy`)

- [ ] **Criar workflows**
  - [ ] Um `.md` para cada comando em `.agents/workflows/`
  - [ ] Usar [`.agents/workflows/README.md`](./.agents/workflows/README.md) como guia
  - [ ] Incluir: passos, agente recomendado, skills necessárias, critérios de aceitação

---

## 💾 Fase 6: Preencher Memória do Projeto (Muito Importante)

A memória é o **contexto persistente** carregado em cada sessão com agentes de IA:

- [ ] **[project-conventions.md](./.agents/memory/project-conventions.md)**
  - [ ] Nomenclatura: variáveis, funções, componentes, arquivos
  - [ ] Estilo de commits (Conventional Commits? Custom?)
  - [ ] Convenções de branches (feature/, fix/, etc.)
  - [ ] Organização de pastas
  - [ ] Padrões de código específicos

- [ ] **[tech-decisions.md](./.agents/memory/tech-decisions.md)**
  - [ ] ADR-001: Stack tecnológico (Node.js + React, Python + FastAPI, etc.)
  - [ ] ADR-002: Arquitetura (Monolito, Microsserviços, Serverless?)
  - [ ] ADR-003: Banco de dados (SQL, NoSQL, Cache?)
  - [ ] ADR-004: CI/CD (GitHub Actions, GitLab CI, Jenkins?)
  - [ ] Adicionar mais conforme necessário

- [ ] **[user-preferences.md](./.agents/memory/user-preferences.md)**
  - [ ] Idioma de comunicação (PT-BR, EN, outro?)
  - [ ] Estilo de resposta (conciso, detalhado, com exemplos?)
  - [ ] Nível de detalhe esperado (junior-friendly, senior-focused?)
  - [ ] Preferências de tools/IDEs

- [ ] **[feedback-history.md](./.agents/memory/feedback-history.md)**
  - [ ] Histórico de correções ("não fazer X", "sempre fazer Y")
  - [ ] Incidentes passados e aprendizados
  - [ ] Decisões que foram validadas pela prática

- [ ] **Atualizar [MEMORY.md](./.agents/memory/MEMORY.md)**
  - [ ] Index principal — ponteiros para tópicos específicos
  - [ ] Deve ser curto (< 150 caracteres por linha)
  - [ ] Serve como "resumo" que será lido em cada sessão

---

## 🔒 Fase 7: Configurar Variáveis de Ambiente

- [ ] **Renomear `.env.example` → `.env`**
  - Só em ambiente local (NUNCA no git!)

- [ ] **Preencher valores necessários**
  - [ ] `OLLAMA_API_URL` (se usar Ollama localmente)
  - [ ] `GOOGLE_API_KEY` (se usar Gemini)
  - [ ] Outras APIkeys conforme seu projeto

- [ ] **Adicionar variáveis específicas do projeto**
  - [ ] Database URLs
  - [ ] URLs de staging/produção
  - [ ] Credenciais de integrações
  - [ ] Feature flags, etc.

- [ ] **Garantir `.env` está no `.gitignore`**
  ```
  .env
  .env.local
  .env.*.local
  ```

---

## 📖 Fase 8: Documentação do Projeto (Obrigatório)

- [ ] **Atualizar README.md do projeto**
  - [ ] Adicionar seção "Como trabalhar com agentes de IA neste projeto"
  - [ ] Link para [QUICKSTART.md](./QUICKSTART.md)
  - [ ] Link para [AGENTS.md](./AGENTS.md)

- [ ] **Expandir `docs/pt-br/`**
  - [ ] Documentação específica de arquitetura
  - [ ] Guias de setup/instalação
  - [ ] Padrões de desenvolvimento
  - [ ] Troubleshooting

- [ ] **Documentar workflows criados**
  - [ ] Listar comandos disponíveis (ex: `/feature`, `/debug`, `/deploy`)
  - [ ] Explicar quando usar cada um

---

## 🎬 Fase 9: Testar a Configuração (Final)

- [ ] **Verificar estrutura de pastas**
  ```bash
  tree -L 2 .agents/
  ```

- [ ] **Validar sintaxe YAML**
  - [ ] Todos os `.md` com frontmatter têm YAML válido?

- [ ] **Testar com agente de IA**
  - [ ] Abrir Claude/Gemini e referenciar AGENTS.md
  - [ ] IA consegue ler AGENTS.md e entender estrutura?
  - [ ] IA consegue localizar skills/workflows/agentes?

- [ ] **Verificar memória**
  - [ ] MEMORY.md é legível e útil?
  - [ ] Preferências estão claras?
  - [ ] Decisões arquiteturais fazem sentido?

---

## 🚀 Fase 10: Próximos Passos

- [ ] **Adicione este checklist ao README.md** para futuros contribuidores
- [ ] **Crie branches dedicadas** para alterações significativas (ver [project-conventions.md](./.agents/memory/project-conventions.md))
- [ ] **Faça seu primeiro commit**
  ```bash
  git add .agents/ docs/ AGENTS.md QUICKSTART.md CHECKLIST.md
  git commit -m "chore: configurar estrutura Antigravity para projeto específico"
  ```

---

## 💡 Dicas Finais

1. **Comece pequeno:** Não precisa de todos os agentes/skills/workflows no dia 1.
2. **Evolua iterativamente:** Adicione skills e workflows conforme descobrir padrões recorrentes.
3. **Mantenha memória atualizada:** A memória é o "cérebro" do projeto. Vale a pena investir nela.
4. **Documente decisões:** Cada ADR economizará 10 conversas futuras com agentes de IA.
5. **Use exemplos como template:** Copie, adapte e delete o que não precisa.

---

**Após completar este checklist, seu workspace estará limpo, personalizado e pronto para trabalhar com agentes de IA! 🎯**

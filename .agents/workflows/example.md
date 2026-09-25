---
name: example
description: Workflow de exemplo - use como template para criar seus próprios slash commands
agent: orchestrator
---

# ⚡ Example Workflow — Template para Slash Commands

Este arquivo serve como **template** para criar novos workflows (slash commands) no seu projeto.

Quando você digita `/example` no chat do Antigravity IDE ou Gemini CLI, este workflow é acionado.

---

## 📌 O que é um Workflow?

Um **Workflow** é um roteiro estruturado (passo a passo) para tarefas complexas e repetitivas:
- Define **sequência de ações** (passos claros)
- Especifica **agente responsável** (quem executa)
- Lista **skills necessárias** (habilidades carregadas)
- Inclui **critérios de aceitação** (como validar sucesso)

---

## 🚀 Como Usar Este Template

1. **Copie este arquivo** para `.agents/workflows/seu-comando.md`
2. **Renomeie conforme o comando** (ex: `feature.md` → `/feature`, `hotfix.md` → `/hotfix`)
3. **Preencha o frontmatter YAML:**
   - `name:` — nome do comando (sem `/`)
   - `description:` — uma linha descrevendo o propósito
   - `agent:` — qual agente executa (ex: `orchestrator`, `backend-specialist`)
4. **Escreva os passos** seguindo a estrutura abaixo

---

## 📝 Estrutura de um Workflow

```markdown
---
name: seu-comando
description: Descrição breve do que faz
agent: orchestrator                           # ou outro especialista
skills:                                       # Skills carregadas
  - clean-code
  - testing-strategies
---

# 📋 Seu Comando (/seu-comando)

## Objetivo
O que este workflow alcança.

## Pré-Requisitos
O que é necessário antes de começar.

## Passos
1. Passo 1
2. Passo 2
...

## Skills Utilizadas
- skill-1: Para quê?
- skill-2: Para quê?

## Critérios de Aceitação
- [ ] Critério 1
- [ ] Critério 2

## Troubleshooting
Se X não funcionar, faça Y.
```

---

## 🎯 Exemplo Prático: Workflow `/feature`

Aqui está um exemplo real de um workflow bem estruturado:

```markdown
---
name: feature
description: Criar uma nova feature do zero até a integração
agent: orchestrator
skills:
  - clean-code
  - testing-strategies
  - api-design
---

# ⚡ Feature Workflow (/feature)

## Objetivo
Guiar a criação completa de uma feature: planejamento → implementação → testes → integração.

## Pré-Requisitos
- [ ] Feature está bem definida (story/issue no tracking)?
- [ ] Dependências identificadas?
- [ ] Pessoa designada para cada domínio (Backend, Frontend, etc.)?

## Passos

### Fase 1: Planejamento (Orquestrador)
1. Decomponha a feature em subtarefas
2. Identifique dependências críticas
3. Liste domínios envolvidos (Backend? Frontend? DevOps?)
4. Defina critérios de aceitação

### Fase 2: Design (Especialistas)
1. **Backend Dev:** Design do Schema + API
2. **Frontend Dev:** Mockups + componentes
3. **DevOps:** Variáveis de ambiente necessárias
4. **QA:** Casos de teste

### Fase 3: Implementação (Especialistas em Paralelo)
1. Backend implementa serviço + endpoints
2. Frontend consome APIs
3. DevOps configura ambiente
4. Testes são escritos

### Fase 4: Integração (Orquestrador)
1. Merge de todas as branches
2. Teste completo E2E
3. Deploy em staging

### Fase 5: Validação (QA)
1. Testes exploratórios
2. Verificação de critérios de aceitação
3. Feedback para ajustes

## Skills Utilizadas
- `clean-code`: Garantir código limpo durante implementação
- `testing-strategies`: Padrões de testes unitário, integração e E2E
- `api-design`: Design de endpoints REST/GraphQL

## Critérios de Aceitação
- [ ] Feature funciona conforme especificação
- [ ] Código passa em linter e segue convenções
- [ ] Testes cobrem casos principais
- [ ] Documentação atualizada
- [ ] Nenhuma regressão em features existentes
- [ ] Deploy em staging é bem-sucedido

## Troubleshooting

**P: Uma subtarefa está bloqueada**
- Escalpe para agente responsável ou reviewr humano

**P: Conflitos de merge**
- Orquestrador coordena resolução com envolvidos

**P: Testes falhando**
- Volte à Fase 3, revise implementação
```

---

## 🔧 Exemplos de Workflows Comuns

Aqui estão workflows que **geralmente valem a pena criar**:

| Comando | Agente | Quando Usar |
|---------|--------|-------------|
| `/feature` | `orchestrator` | Criar feature completa |
| `/hotfix` | `orchestrator` | Criar bugfix urgente |
| `/refactor` | `backend-specialist` | Limpar/reorganizar código |
| `/debug` | `orchestrator` | Investigar bug complexo |
| `/release` | `orchestrator` | Preparar release para produção |
| `/deploy` | `devops-engineer` | Deploy manual/monitoramento |
| `/document` | `documentation-writer` | Atualizar documentação |
| `/test` | `test-engineer` | Planejamento e execução de testes |
| `/security-audit` | `security-auditor` | Revisar por vulnerabilidades |
| `/onboard` | `orchestrator` | Onboarding de novo desenvolvedor |

---

## 📋 Padrões de Workflow

### Pattern 1: Decisão (Simples)
Para workflows que são puramente decisórios:

```markdown
## Passos
1. Analise requisito
2. Decida sobre abordagem
3. Comunique decisão
4. Documente em MEMORY.md
```

### Pattern 2: Execução (Linear)
Para workflows com passos sequenciais:

```markdown
## Passos
1. Preparação
2. Desenvolvimento
3. Testes
4. Integração
5. Validação
```

### Pattern 3: Orquestração (Paralela)
Para workflows com tarefas independentes:

```markdown
## Passos (Paralelo)
- [ ] Backend Dev: implementar service
- [ ] Frontend Dev: implementar UI
- [ ] DevOps: configurar infra

## Pós-Paralelo
- Integrar e validar
```

---

## ✅ Checklist de Qualidade para seu Workflow

Antes de finalizar:

- [ ] **Nome é único** e descritivo?
- [ ] **Descrição cabe em uma linha**?
- [ ] **Agente responsável está claro**?
- [ ] **Passos são sequenciais** e práticos?
- [ ] **Skills necessárias estão listadas**?
- [ ] **Critérios de aceitação são testáveis**?
- [ ] **Troubleshooting cobre casos comuns**?
- [ ] **Frontmatter YAML é válido**?

---

## 🚨 Anti-Padrões: O Que NÃO Fazer

❌ **Workflow genérico demais**
- "general-work" — não especifica nada

❌ **Passos vagos**
- "Fazer código", "Testar" — sem detalhe

❌ **Sem critérios de aceitação**
- Impossível saber quando terminou

❌ **Referencia skills que não existem**
- Documente realmente quais skills são necessárias

---

## 💡 Dicas Pro

1. **Workflows são documentação em ação** — Mantenha atualizado com a prática real.
2. **Comece com workflows críticos** — Feature, Hotfix e Release.
3. **Itere:** Conforme equipe trabalha, refine os passos.
4. **Cross-funcional:** Um bom workflow não deixa ninguém desligado.

---

## 🔗 Referências

- [Guia de Workflows](./../../../.agents/workflows/README.md) — Estrutura e boas práticas
- [Guia de Agentes](./../../../.agents/agent/README.md) — Quem pode ser agente
- [Guia de Skills](./../../../.agents/skills/README.md) — Habilidades disponíveis
- [AGENTS.md](./../../../AGENTS.md) — Contexto global do projeto

---

**Pronto para criar seu workflow? Copie este arquivo, adapte conforme seu processo, e bora! 🚀**

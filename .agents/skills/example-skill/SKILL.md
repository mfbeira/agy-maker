---
name: example-skill
description: Skill de exemplo - use como template para criar suas próprias skills modulares
---

# 🛠️ Example Skill — Template para Criar suas Skills

Esta skill serve como **template** para criar novas skills no seu projeto.

---

## 📌 O que é uma Skill?

Uma **Skill** é um pacote autocontido de:
- Instruções técnicas focadas em um desafio específico
- Checklists e validações
- Scripts de automação (opcional)
- Referências e exemplos (opcional)

Skills são **carregadas sob demanda** por agentes, não poluindo o contexto inicial.

---

## 🚀 Como Usar Este Template

1. **Copie esta pasta** para `.agents/skills/sua-nova-skill/`
2. **Renomeie `SKILL.md`** (nome já em caixa)
3. **Preencha o frontmatter YAML:**
   - `name:` — identificador único (kebab-case)
   - `description:` — uma linha descrevendo o propósito
4. **Escreva as instruções** seguindo a estrutura abaixo
5. **Adicione exemplos** e referências em pastas opcionais

---

## 📝 Estrutura Recomendada de uma Skill

```
.agents/skills/minha-skill/
├── SKILL.md                 # Este arquivo (obrigatório)
├── scripts/                 # (Opcional) Automação
│   ├── validator.js
│   └── formatter.py
├── references/              # (Opcional) Documentação profunda
│   ├── advanced-patterns.md
│   └── edge-cases.md
└── examples/                # (Opcional) Exemplos de código
    ├── good-example.ts
    └── bad-example.ts
```

---

## 🎯 Exemplo de Conteúdo Skill

### Para uma Skill de Validação/Patterns:

```markdown
# 🔍 Validation Patterns

## Princípios
1. Sempre validar em entrada (não confiar em dados exteriores)
2. Retornar erros estruturados (não strings genéricas)
3. Validação no servidor, nunca confiar apenas no cliente

## Regras
- **Campos obrigatórios:** Usar `required: true`
- **Tipos:** Sempre tipar campos (TypeScript, Zod, etc.)
- **Mensagens:** Mensagens de erro devem ser úteis para o usuário

## Checklist
- [ ] Validadores centralizados em um local
- [ ] Testes unitários para cada validador
- [ ] Documentação de regras de negócio
```

### Para uma Skill de Arquitetura/Design:

```markdown
# 🏗️ Microservices Architecture

## Requisitos de Design
1. Cada serviço tem responsabilidade única
2. Comunicação via APIs, nunca via banco de dados compartilhado
3. Logs centralizados e traceable

## Padrões
- Event-driven communication
- Circuit breaker para resiliência
- Health checks e monitoring

## Decisões Esperadas
- Qual sistema de fila? (RabbitMQ, Kafka, SQS?)
- Como fazer observabilidade? (ELK, Datadog, Prometheus?)
```

### Para uma Skill de Tooling/Automação:

```markdown
# ⚡ CI/CD Pipeline Automation

## Objetivo
Automatizar build, test e deploy

## Pipeline Stage
1. **Lint & Format:** ESLint, Prettier
2. **Build:** TypeScript compilation, bundling
3. **Test:** Unit + Integration + E2E
4. **Security:** SAST, dependency scan
5. **Deploy:** Staging, then Production

## Scripts Fornecidos
- `validate.sh` — Rodar linters e testes localmente
- `build.sh` — Compilar projeto
```

---

## 💾 Estrutura Esperada do Frontmatter YAML

```yaml
---
name: minha-skill                    # (Obrigatório) kebab-case, único
description: Descrição breve aqui   # (Obrigatório) Uma linha
tags: ["backend", "typescript"]     # (Opcional) Para categorização
version: "1.0.0"                    # (Opcional) Semver
---
```

---

## ✅ Checklist de Qualidade para sua Skill

Antes de finalizar uma skill:

- [ ] **Nome é único** e descritivo?
- [ ] **Descrição cabe em uma linha**?
- [ ] **Instruções são práticas** (não teóricas demais)?
- [ ] **Há exemplos de código** (se aplicável)?
- [ ] **Há checklist** de validação?
- [ ] **Frontmatter YAML é válido**?
- [ ] **Links para referências** funcionam?
- [ ] **Scripts, se houver, são testados**?

---

## 🔗 Como Usar sua Skill

### Opção 1: Carregada por um Agente
No cabeçalho YAML de um agente (ex: `.agents/agent/backend-specialist.md`):
```yaml
skills:
  - minha-skill          # Carrega automaticamente
  - outra-skill
```

### Opção 2: Mencionada em um Prompt
Usuário ou agente menciona:
> "Ativa a skill `minha-skill` e..." → Skill é carregada

### Opção 3: Acionada por um Workflow
Um workflow (ex: `.agents/workflows/feature.md`) carrega a skill:
```markdown
## Skills Necessárias
- minha-skill
- testing-strategies
```

---

## 📚 Exemplos Reais de Skills para Criar

Aqui estão skills que **geralmente valem a pena**:

| Skill | Quando Criar | Exemplo |
|---|---|---|
| `clean-code` | Sempre | Padrões pragmáticos, sem over-engineering |
| `typescript-patterns` | Projeto TypeScript | Tipos genéricos, utility types, narrowing |
| `testing-strategies` | Projeto com testes | Unit, Integration, E2E patterns |
| `api-design` | Projeto com APIs | REST, GraphQL, versionamento |
| `database-patterns` | Projeto com BD | ORM, migrations, transactions |
| `react-patterns` | Projeto React | Hooks, composition, performance |
| `devops-checklist` | Projeto com Deploy | CI/CD, observabilidade, secrets |
| `security-audit` | Projeto com dados sensíveis | OWASP, XSS, SQL injection, auth |

---

## 🚨 Anti-Padrões: O Que NÃO Fazer

❌ **Skill genérica demais**
- "general-programming" — muito vaga, não carrega bem

❌ **Skill copiada de tutoriais**
- Sem contexto do projeto, sem referência local

❌ **Skill desatualizada**
- Se refere a versões antigas de frameworks

❌ **Skill sem exemplos**
- Só teoria, difícil aplicar na prática

---

## 💡 Dicas Pro

1. **Comece pequeno:** Uma skill bem focada é melhor que várias genéricas.
2. **Reutilize:** Skill é reusável entre agentes e workflows.
3. **Evolua:** Adicione exemplos conforme o projeto descobrir novos padrões.
4. **Documente decisões:** Se a skill encapsula uma decisão importante, referencie em `MEMORY.md`.

---

## 🔗 Referências

- [Guia de Skills](./../../../.agents/skills/README.md) — Estrutura e boas práticas
- [Guia de Agentes](./../../../.agents/agent/README.md) — Como agentes carregam skills
- [AGENTS.md](./../../../AGENTS.md) — Contexto global do projeto

---

**Pronto para criar sua skill? Copie esta pasta, adapte conforme seu projeto, e bora codar! 🚀**

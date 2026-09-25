# Registro de Decisões de Arquitetura (ADRs)

Registre aqui decisões arquiteturais importantes tomadas durante a evolução do projeto. Cada ADR previne "reinventação da roda" e facilita onboarding.

---

## ADR-001: Padrão de Arquitetura de Agentes

- **Status:** ✅ Aceito
- **Data:** 2025-01-01 (ajuste conforme necessário)
- **Contexto:** Necessidade de padronizar regras, skills e memória para o Antigravity IDE e Gemini CLI.
- **Decisão:** Adotar a estrutura `.agents/` modular e desacoplada.
- **Benefícios:**
  - Progressive Disclosure (skills carregadas sob demanda)
  - Reutilização entre projetos
  - Fácil onboarding de novos desenvolvedores
- **Trade-offs:**
  - Requer manutenção de documentação
  - Todos devem seguir a estrutura
- **Referências:** [AGENTS.md](./../../AGENTS.md), [Guia de Agentes](../agent/README.md)

---

## Seu Próximo ADR

Quando tomar uma **decisão arquitetural importante**, documente aqui:

```markdown
## ADR-00X: Título descritivo

- **Status:** 🟡 Proposto | ✅ Aceito | ⚠️ Revisão | ❌ Descartado
- **Data:** AAAA-MM-DD
- **Proponente:** Nome (ou deixe em branco)
- **Contexto:** Qual era o problema? Por que foi necessário decidir?
- **Decisão:** Qual foi a escolha feita?
- **Benefícios:**
  - Benefício 1
  - Benefício 2
- **Trade-offs:**
  - Trade-off 1
  - Trade-off 2
- **Consequências:**
  - O que muda no projeto?
  - Outros módulos afetados?
- **Alternativas Consideradas:**
  - Alternativa 1 (por quê não escolheu?)
  - Alternativa 2
- **Referências:** Links para código, documentação, ou issue
```

---

## Exemplos de Decisões Arquiteturais Típicas

Aqui estão ADRs que **geralmente vale a pena documentar**:

### 🏗️ Stack Tecnológico
```markdown
## ADR-00X: Adotar Node.js + TypeScript + Express

- **Contexto:** Precisávamos de backend rápido e type-safe.
- **Decisão:** Node.js (JavaScript rápido) + TypeScript (type safety) + Express (framework minimalista).
- **Benefícios:** Rápida prototipagem, ecossistema npm rico, uma linguagem para backend e frontend.
```

### 🗄️ Banco de Dados
```markdown
## ADR-00X: PostgreSQL como primary database

- **Contexto:** Dados relacionais, ACID compliance necessário.
- **Decisão:** PostgreSQL (SQL robusto) + Prisma ORM (type-safe queries).
- **Trade-offs:** Mais overhead que NoSQL, mas maior reliability.
```

### 🔄 CI/CD
```markdown
## ADR-00X: GitHub Actions para CI/CD

- **Contexto:** Projeto no GitHub, necessário automação de build/test/deploy.
- **Decisão:** GitHub Actions (nativo ao GitHub, sem custo extra).
- **Benefícios:** Integração nativa, linter + testes em PR, auto-deploy em produção.
```

### 🔐 Autenticação
```markdown
## ADR-00X: OAuth 2.0 com providers externos

- **Contexto:** Não queremos gerenciar senhas.
- **Decisão:** OAuth 2.0 (Google, GitHub) + JWT para sessions.
- **Benefícios:** Maior segurança, menos responsabilidade, melhor UX.
```

### 📦 Versionamento
```markdown
## ADR-00X: Semantic Versioning (Semver) + CHANGELOG

- **Contexto:** Projeto será usado como biblioteca (npm package).
- **Decisão:** MAJOR.MINOR.PATCH (ex: 1.2.3) + CHANGELOG.md.
- **Benefícios:** Claro para usuários qual mudança é breaking.
```

---

## 💡 Quando Documentar um ADR?

✅ **Documente:**
- Decisões que afetam múltiplos módulos
- Trade-offs importantes (performance vs simplicity, reliability vs speed)
- Escolhas de frameworks/libraries principais
- Decisões de arquitetura (monolito vs microsserviços, etc.)
- Protocolo de segurança

❌ **Não precisa documentar:**
- Mudanças pequenas (renomear variável, adicionar função auxiliar)
- Decisões reversíveis e de baixo impacto
- Configurações que mudam frequentemente

---

## 🔗 Referências

Consulte também:
- [Project Conventions](./project-conventions.md) — Padrões de código
- [User Preferences](./user-preferences.md) — Preferências pessoais
- [AGENTS.md](./../../AGENTS.md) — Contexto global do projeto

---

**Lembre-se:** Uma ADR bem documentada economiza horas de explicação futura! 📝

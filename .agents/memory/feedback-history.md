# Histórico de Feedback e Alinhamentos

Registre aqui correções, alinhamentos e padrões que emergiram da prática. Isso evita repetição de erros e reforça decisões validadas.

---

## 📝 Como Registrar Feedback

Cada entrada deve ter:
1. **A regra:** O que fazer ou não fazer
2. **Por quê:** O contexto ou incidente que levou a isso
3. **Como aplicar:** Em que situação isso se aplica

---

## ✅ Feedback Validado (Fazer Sempre)

### Padrão: Type-Safe Queries
- **Regra:** Usar ORM com type safety (Prisma, TypeORM) em vez de SQL strings
- **Por quê:** Incidente onde erro de typo em SQL string passou pela integração
- **Como:** Todos os queries de banco devem usar tipagem
- **Referência:** [tech-decisions.md](./tech-decisions.md#adr-banco-de-dados)

### Padrão: Branches para Features
- **Regra:** Criar branch dedicada para cada feature/fix significativo
- **Por quê:** Histórico de commits fica limpo, easy to revert se necessário
- **Como:** Nunca committe diretamente em `main`, mesmo "quick fixes"
- **Referência:** [project-conventions.md](./project-conventions.md#-branches)

### Padrão: Error Handling Estruturado
- **Regra:** Sempre retornar erros estruturados, nunca strings genéricas
- **Por quê:** Usuário final precisa saber se é erro de validação, BD, ou API
- **Como:** `{ status: "error", code: "VALIDATION_FAILED", message: "..." }`

---

## ⚠️ Anti-Padrões (NÃO Fazer)

### Anti-Padrão: Over-Abstraction Prematura
- **Regra:** Não crie abstrações para "código que poderia ser reutilizado"
- **Por quê:** Código não foi testado em múltiplos contextos, abstração pode estar errada
- **Como:** Permita 3 instâncias do mesmo padrão antes de abstrair
- **Referência:** YAGNI — You Aren't Gonna Need It

### Anti-Padrão: Console.log em Produção
- **Regra:** Remover todos os `console.log` antes de merge
- **Por quê:** Poluem logs, vazam informações sensíveis, afetam performance
- **Como:** Usar logger estruturado (Winston, Pino, etc.)
- **Referência:** [user-preferences.md](./user-preferences.md#-preferências-de-código)

### Anti-Padrão: Comentários Óbvios
- **Regra:** Comentários apenas para "WHY", nunca para "WHAT"
- **Por quê:** Código deve ser auto-explicativo; comentário desatualizado confunde
- **Como:**
  ```ts
  // ❌ Ruim
  // Get user by ID
  const user = await getUser(id);

  // ✅ Bom
  // Fetch from cache first to avoid DB hit for popular users
  const user = await getUser(id);
  ```

### Anti-Padrão: Tratamento Genérico de Erros
- **Regra:** Nunca ignore erros com `try/catch` vazio
- **Por quê:** Problemas desaparecem silenciosamente, impossível debugar
- **Como:** Sempre logar erro ou retornar de forma estruturada

---

## 🔄 Decisões Confirmadas pela Prática

Aqui registramos decisões que foram testadas e validadas:

### ✅ TypeScript Strict Mode
- **Confirmado:** Sempre vale a pena
- **Benefício:** Catch bugs em compile time
- **Custo:** Setup inicial, documentação de tipos

### ✅ Testes Unitários para Services
- **Confirmado:** Alto ROI
- **Benefício:** Refactoring seguro, documentação viva
- **Custo:** Tempo de escrita

### ✅ Commits Atômicos (Conventional Commits)
- **Confirmado:** Facilita git blame e revert
- **Benefício:** Histórico legível, easy to bisect
- **Custo:** Disciplina ao committar

---

## 🚀 Lições Aprendidas

### Lição: Entender Requisitos Antes de Codar
- **Contexto:** Começou implementação sem validar com stakeholders
- **Resultado:** Retrabalho, 3 semanas perdidas
- **Ação:** Criar requisitos claros em planning phase (workflows `/plan`)
- **Impacto:** Evitar futuros retrabalhos

### Lição: Documentar ADRs Imediatamente
- **Contexto:** Decisão tomada verbalmente, esquecida após 2 semanas
- **Resultado:** Novo dev implementa diferente, conflito
- **Ação:** Toda decisão arquitetural → ADR em `tech-decisions.md` no mesmo dia
- **Impacto:** Onboarding mais rápido, decisões rastreáveis

---

## 📊 Tendências de Feedback

Padrões que emergiram ao longo do tempo:

- **Frequência de erros de tipo:** ↓ Após adotar TypeScript strict mode
- **Tempo de review de PR:** ↓ Após adoptar Conventional Commits
- **Regressões em produção:** ↓ Após exigir testes de integração
- **Confusão do novo dev:** ↓ Após documentar AGENTS.md

---

## 🔗 Referências Relacionadas

- [Project Conventions](./project-conventions.md) — Padrões praticados
- [Tech Decisions](./tech-decisions.md) — Decisões arquiteturais
- [User Preferences](./user-preferences.md) — Preferências pessoais
- [AGENTS.md](./../../AGENTS.md) — Contexto global do projeto

---

**Dica:** Revise este arquivo regularmente durante refinement/retrospectives. Padrões evoluem! 📈

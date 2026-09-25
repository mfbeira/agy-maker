# Convenções do Projeto

Defina aqui os padrões e convenções adotadas pelo projeto (estilo de código, nomenclatura, organização de arquivos, etc.).

---

## 📝 Nomenclatura

- **Variáveis e Funções:** Inglês, `camelCase` (ex: `getUserById`, `isLoading`)
- **Componentes:** Inglês, `PascalCase` (ex: `UserProfile`, `LoginForm`)
- **Arquivos e Pastas:** Inglês, `kebab-case` (ex: `user-profile.tsx`, `auth-service.ts`)
- **Constantes:** Inglês, `UPPER_SNAKE_CASE` (ex: `MAX_RETRIES`, `API_TIMEOUT_MS`)
- **Tipos/Interfaces:** Inglês, `PascalCase` (ex: `UserDTO`, `ApiResponse`)

---

## 🔀 Commits

- Seguir **Conventional Commits** (https://www.conventionalcommits.org/)
- Prefixos: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `perf:`, `ci:`, `style:`
- Exemplos:
  - `feat: adicionar autenticação OAuth`
  - `fix: corrigir validação de email`
  - `docs: atualizar README com exemplo de instalação`

---

## 🌿 Branches

- Padrão: `<tipo>/<descrição>` (ex: `feature/oauth-login`, `fix/email-validation`)
- Sempre criar branch para mudanças significativas
- Deletar branch após merge
- Nunca committar diretamente em `main`

---

## 📁 Organização de Arquivos

```
projeto/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── services/         # Lógica de negócio, APIs
│   ├── utils/            # Funções utilitárias
│   ├── types/            # Tipos e interfaces TypeScript
│   └── hooks/            # Custom hooks (React)
├── tests/                # Testes automatizados
├── docs/                 # Documentação
└── .agents/              # Configuração de agentes
```

---

## 🧪 Testes

- Testes unitários no mesmo nível que o código (ex: `user.ts` → `user.test.ts`)
- Cobertura mínima: 70% para código crítico
- E2E para fluxos de usuário principais

---

## 📚 Documentação

- Código limpo é autossuficiente (nomes descritivos, sem comentários óbvios)
- Comentários apenas para **WHY** (por quê, não o quê)
- README.md atualizado com instruções de setup
- ADRs documentadas em `MEMORY.md`

---

## ⚙️ Padrões de Código

- **Sem console.log em produção** — usar sistema de logging estruturado
- **Tratamento de erros:** Nunca engolir exceções silenciosamente
- **Async/Await:** Preferir a `callbacks` ou promises cruas
- **Type Safety:** Sempre tipar com TypeScript, sem `any`

---

## 🔗 Referências

Consulte também:
- [User Preferences](./user-preferences.md) — Preferências pessoais
- [Tech Decisions](./tech-decisions.md) — Decisões arquiteturais
- [AGENTS.md](./../../AGENTS.md) — Contexto global do projeto

# Preferências do Desenvolvedor

Registre aqui preferências pessoais de desenvolvimento, estilo de resposta esperado e comportamentos preferidos da IA.

---

## 🗣️ Comunicação

- **Idioma:** Português do Brasil (PT-BR)
- **Estilo:** Direto, objetivo, sem floreios
- **Exemplos:** Sempre bem-vindos, preferencialmente com código
- **Nível de Detalhe:** Resumido (sumarizações são bem-vindas)

---

## 💻 Preferências de Código

- **Linguagem Principal:** JavaScript / TypeScript
- **Tipagem:** Obrigatória (TypeScript, never `any`)
- **Estilo de Naming:** `camelCase` para variáveis/funções, `PascalCase` para componentes
- **Sem Comentários:** Código auto-explicativo, comentários apenas para "WHY"
- **Sem Console.log:** Usar logger estruturado em produção

---

## 🎯 Abordagem de Desenvolvimento

- **Minimalismo:** YAGNI — Não implemente para requisitos hipotéticos
- **Simplicidade:** Código simples > abstrações genéricas
- **Pragmatismo:** Trade-offs são aceitáveis, documentar decisões
- **Testes:** Unitários + Integração para código crítico (E2E opcionais)

---

## 🔧 Ferramentas Favoritas

- **IDE:** VS Code, JetBrains IDE
- **Git Workflow:** Feature branches, PR reviews, rebase when applicable
- **Debugging:** Breakpoints, logging estruturado
- **CI/CD:** GitHub Actions ou similar

---

## ⚡ Resposta da IA Esperada

- ✅ **DO:**
  - Código pronto para usar
  - Explicação concisa do "por quê"
  - Links para referências quando aplicável
  - Perguntar se não tem certeza

- ❌ **DON'T:**
  - Explicações genéricas de "o que é X"
  - Código com padrões desnecessários
  - Resumos longos de mudanças (mostrar o diff)
  - Sugerir "melhores práticas" genéricas

---

## 📋 Exemplo de Resposta Ideal

**Ruim:**
> Você pode usar a função `map()` para iterar sobre o array. A função `map()` é uma função que itera... [muita explicação genérica]

**Bom:**
> Mude `for` para `map()` pois o resultado será mais funcional:
> ```js
> const names = users.map(u => u.name);
> ```

---

## 🚀 Prioridades (do mais ao menos importante)

1. **Funciona** — Acima de tudo, o código deve funcionar
2. **Simples** — Fácil de entender e modificar
3. **Rápido** — Performance onde importa
4. **Bonito** — Código elegante é bônus

---

## 🔗 Referências

Consulte também:
- [Project Conventions](./project-conventions.md) — Padrões do projeto
- [Tech Decisions](./tech-decisions.md) — Decisões arquiteturais
- [AGENTS.md](./../../AGENTS.md) — Contexto global

---

**Dica:** Mantenha esta seção atualizada. Quanto mais precisa, melhor a IA trabalhará com você! 🎯

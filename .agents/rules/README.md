# 📜 Diretório de Regras (`.agents/rules/`)

Este diretório contém as **regras mandatórias, restrições e diretrizes de comportamento** seguidas pelos agentes e pela IA no workspace do **Antigravity IDE** e **Gemini CLI**.

---

## 🎯 Finalidade

O diretório `rules/` serve para:
- Definir convenções globais de codificação e comunicação (ex.: idioma padrão, simplicidade, ausência de logs de depuração em produção).
- Estabelecer restrições de arquitetura e design (ex.: anti-slop, proibição de clichês visuais, acessibilidade).
- Configurar protocolos de execução, validação e roteamento de requisições.

---

## 🏗️ Como Funciona a Hierarquia de Regras

As regras possuem prioridades de carregamento bem definidas:
1. **Tier 0 (Global Rules):** Regras universais sempre ativas (ex.: `00-global-rules.md`), aplicadas a qualquer interação ou tecnologia.
2. **Tier 1 (Protocolos e Roteamento):** Regras operacionais de carregamento de skills e seleção de especialistas.
3. **Tier 2 (Regras Condicionais/Contextuais):** Regras ativadas sob demanda dependendo do tipo de arquivo ou tarefa (ex.: regras de frontend ao editar CSS/React, regras de backend ao editar APIs/Banco).

---

## ✍️ Como Criar Novas Regras

1. Crie um arquivo `.md` neste diretório (ex.: `minha-regra.md`).
2. Utilize formatação Markdown direta com títulos claros e objetivos.
3. Se desejar que a regra seja universal, referencie-a no `AGENTS.md` ou prefixe-a com número de prioridade (ex.: `01-code-standards.md`).

---

## 📌 Arquivos Comuns

- `00-global-rules.md`: Regras globais de idioma (PT-BR), clean code e tratamento de exceções.
- `.gitkeep`: Mantém o diretório versionado no Git.

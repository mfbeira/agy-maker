# 🛠️ Catálogo de Skills Modulares (`.agents/skills/`)

Este diretório contém o **catálogo de habilidades modulares (skills)** que estendem as capacidades da IA e fornecem procedimentos práticos, checklists, padrões arquiteturais e scripts de validação.

---

## 🎯 O que é uma Skill?

Uma **Skill** é um pacote autocontido de instruções técnicas focado em resolver um desafio específico de engenharia ou design. Em vez de injetar dezenas de milhares de tokens desnecessariamente no contexto inicial, o Antigravity carrega as skills **sob demanda (Progressive Disclosure)**.

---

## 📁 Estrutura Padrão de uma Skill

Cada skill reside em sua própria pasta e possui obrigatoriamente um arquivo `SKILL.md`:

```text
.agents/skills/
└── clean-code/
    ├── SKILL.md              # (Obrigatório) Instruções e metadados YAML
    ├── scripts/              # (Opcional) Scripts de validação e automação
    │   └── lint_runner.py
    ├── references/           # (Opcional) Documentação e especificações profundas
    │   └── principles.md
    └── examples/             # (Opcional) Exemplos e referências de implementação
        └── good-patterns.ts
```

---

## 📝 Formato do Arquivo `SKILL.md`

O `SKILL.md` deve conter um cabeçalho YAML com `name` e `description`, seguido pelas instruções operacionais:

```markdown
---
name: clean-code
description: Padrões pragmáticos de código limpo - conciso, direto, sem over-engineering e sem comentários desnecessários.
---

# 🧹 Clean Code Skill

## Regras de Execução
1. **YAGNI:** Não implemente abstrações para requisitos futuros hipotéticos.
2. **Auto-explicativo:** O código deve documentar a si mesmo através de bons nomes de variáveis e funções.
3. **Erros:** Nunca engula exceções silenciosamente.
```

---

## ⚡ Como Criar e Usar Skills

1. Crie uma pasta dentro de `.agents/skills/` com o nome da sua skill (ex.: `auth-patterns`).
2. Crie o arquivo `SKILL.md` com a estrutura acima.
3. Adicione a skill ao cabeçalho `skills:` de qualquer agente em `.agents/agent/` ou acione-a diretamente em prompts e workflows.

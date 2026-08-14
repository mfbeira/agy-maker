# AGY Maker 🚀

Template e gerador de estrutura de workspace para **Google Antigravity IDE** e **Gemini CLI**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg)](https://nodejs.org)
[![Antigravity Compatible](https://img.shields.io/badge/Antigravity-Ready-purple.svg)](https://github.com/mfbeira/agy-maker)

---

## 📦 O que é o AGY Maker?

O **`agy-maker`** é uma estrutura esqueleto (*starter boilerplate*) padronizada que organiza regras de engenharia de software, personas de agentes especialistas, catálogo de skills modulares, workflows orientados a slash commands e memória persistente para ambientes de desenvolvimento assistidos por Inteligência Artificial.

---

## ⚡ Instalação Rápida

Na raiz de qualquer projeto novo ou existente, execute:

```bash
npx github:mfbeira/agy-maker
```

Ou execute localmente via clone:

```bash
git clone https://github.com/mfbeira/agy-maker.git
```

---

## 📂 Estrutura de Pastas e Finalidade

O repositório disponibiliza a arquitetura limpa com documentação completa em cada diretório:

```text
seu-projeto/
├── .agents/
│   ├── rules/          # 📜 Regras globais, padrões de código e restrições mandatórias
│   ├── agent/          # 🧠 Personas e subagentes especialistas (DBA, Frontend, Backend, etc.)
│   ├── skills/         # 🛠️ Catálogo de habilidades e procedimentos técnicos (SKILL.md)
│   ├── workflows/      # ⚡ Roteiros de automação e Slash Commands (/plan, /debug, /create)
│   └── memory/         # 💾 Memória persistente cross-session e ADRs (MEMORY.md)
├── docs/
│   ├── pt-br/          # 🇧🇷 Documentação e referências em Português
│   ├── en/             # 🇺🇸 Documentation in English
│   └── setup/          # ⚙️ Guias de configuração de ambiente e IDE
├── bin/
│   └── install.js      # 🚀 Script de instalação CLI para execução via npx
├── AGENTS.md           # 🎯 Ponto de entrada de instruções para o Antigravity IDE
├── .env.example        # 🔒 Modelo de configuração de variáveis de ambiente e chaves
└── package.json        # 📦 Manifesto de configuração do pacote npm
```

---

## 🧭 Como Funciona Cada Diretório

| Diretório | Documentação | Descrição |
| :--- | :--- | :--- |
| [`.agents/rules/`](./.agents/rules/README.md) | [Guia de Regras](./.agents/rules/README.md) | Contém regras mandatórias como `00-global-rules.md`, convenções de idioma e restrições. |
| [`.agents/agent/`](./.agents/agent/README.md) | [Guia de Agentes](./.agents/agent/README.md) | Define personas com cabeçalhos YAML e papéis especializados. |
| [`.agents/skills/`](./.agents/skills/README.md) | [Guia de Skills](./.agents/skills/README.md) | Habilidades técnicas modulares carregadas sob demanda (*Progressive Disclosure*). |
| [`.agents/workflows/`](./.agents/workflows/README.md) | [Guia de Workflows](./.agents/workflows/README.md) | Comandos de barra (*Slash Commands*) acionados diretamente no chat da IDE. |
| [`.agents/memory/`](./.agents/memory/README.md) | [Guia de Memória](./.agents/memory/README.md) | Armazena decisões arquiteturais (ADRs), convenções e preferências persistentes. |
| [`docs/`](./docs/README.md) | [Índice de Docs](./docs/README.md) | Documentação multilíngue e guias de setup. |

---

## 🎯 Como Usar no Google Antigravity IDE

1. **Roteamento Inteligente:** Ao receber uma solicitação, o assistente consulta o `AGENTS.md` e os diretórios em `.agents/` para aplicar as regras e personas adequadas.
2. **Slash Commands:** Digite `/` no chat para listar comandos disponíveis (como `/plan`, `/create`, `/debug`, `/test`, etc.).
3. **Criação de Novas Capacidades:** Basta criar novos arquivos `.md` dentro das respectivas pastas de `.agents/`.

---

## 📄 Licença

Distribuído sob a licença [MIT](./package.json).

# ⚙️ Guia de Setup e Instalação (`docs/setup/`)

Este guia detalha os pré-requisitos e instruções para configurar e utilizar o **AGY Maker** em novos projetos ou repositórios existentes.

---

## 📋 Pré-requisitos

1. **Node.js:** Versão 18.0.0 ou superior instalada (`node -v`).
2. **NPM:** Gerenciador de pacotes npm/npx (`npm -v`).
3. **Git:** Sistema de controle de versão configurado (`git --version`).
4. **Google Antigravity IDE ou Gemini CLI:** Ambiente de desenvolvimento com suporte ao protocolo de agentes.

---

## 🚀 Inicializando em um Novo Projeto

Para aplicar a estrutura do `agy-maker` em qualquer diretório de projeto:

```bash
# Navegue até a pasta do seu projeto
cd /caminho/do/seu/projeto

# Execute o instalador do agy-maker via npx
npx github:mfbeira/agy-maker
```

Após a execução, os seguintes arquivos e pastas serão copiados para o seu projeto:
- `.agents/` (pastas `rules/`, `skills/`, `workflows/`, `agent/`, `memory/`)
- `AGENTS.md`
- `.env.example`
- `docs/`

---

## 🔧 Personalização

1. **Ajuste o `.env`:** Copie `.env.example` para `.env` e configure suas chaves de API e credenciais locais.
2. **Defina Regras da Equipe:** Edite `.agents/rules/` para adicionar convenções de código do seu time.
3. **Crie Personas e Workflows:** Adicione novos fluxos em `.agents/workflows/` para automatizar rotinas da equipe.

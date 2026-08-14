# 🇺🇸 Documentation in English (EN)

Welcome to the **AGY Maker** documentation in English.

---

## 📦 What is AGY Maker?

**AGY Maker** is a lightweight starter template and scaffolding tool designed for **Google Antigravity IDE** and **Gemini CLI**. It provides a standardized `.agents/` folder architecture and `AGENTS.md` root configuration.

---

## 📂 Workspace Structure Overview

- **`.agents/rules/`**: Mandatory global and contextual coding/behavior rules.
- **`.agents/agent/`**: Specialized agent personas (frontend, backend, security, devops, etc.).
- **`.agents/skills/`**: Modular capabilities and technical procedures loaded on-demand.
- **`.agents/workflows/`**: Step-by-step procedures triggered via chat slash commands (`/plan`, `/create`, `/debug`, `/deploy`, etc.).
- **`.agents/memory/`**: Persistent cross-session memory and Architecture Decision Records (ADRs).
- **`AGENTS.md`**: Root operational entrypoint for the AI assistant.
- **`docs/`**: Multilingual documentation and setup guides.

---

## ⚡ Quick Start

```bash
# Initialize inside any existing or new project:
npx github:mfbeira/agy-maker
```

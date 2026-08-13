---
description: Regras Globais aplicáveis a todo o código gerado no workspace
trigger: always_on
---

# Regras Globais de Programação

- **Comunicação:** Sempre responda em Português do Brasil de forma clara e objetiva.
- **Simplicidade:** Mantenha o código simples. Evite abstrações desnecessárias (YAGNI).
- **Sem Logs em Produção:** Nunca adicione `console.log` para ambiente de produção, ao debugar remova-os depois.
- **Erros:** Todos os erros devem ser tratados graciosamente. Nada de engolir exceções.

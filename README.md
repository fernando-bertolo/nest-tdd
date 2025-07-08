# 🧪 Projeto de Treinamento: Testes Automatizados com Jest e NestJS

## 📋 Descrição
Este projeto é um ambiente de treinamento para praticar Test-Driven Development (TDD) utilizando Jest e NestJS. O foco principal é a implementação de um serviço de validação de cartões de crédito Visa por meio de testes automatizados.

---

## 🎯 Objetivos de Aprendizado

- **Praticar TDD** (Test-Driven Development)  
- **Dominar testes unitários** com Jest  
- **Implementar testes de integração** usando as utilities de teste do NestJS  
- **Validar regras de negócio** por meio de testes  
- **Trabalhar com mocks e assertions**  
- **Estruturar testes** de forma organizada e legível  

---

## 🏗️ Estrutura do Projeto
```
src/
├── app.controller.ts          # Controller principal
├── app.service.ts             # Service principal  
├── app.module.ts              # Módulo principal
├── main.ts                    # Ponto de entrada
└── services/
    └── visaCreditCard.service.ts  # Serviço de validação Visa
└── controllers/
    └── creditCard.controller.ts  # Controller Credit Card

test/
├── app.e2e-spec.ts           # Testes
└── visaCreditCard.service.spec.ts  # Testes unitários do serviço Visa
```


## 🛠️ Tecnologias Utilizadas
- **NestJS** - Framework Node.js para aplicações server-side
- **Jest** - Framework de testes JavaScript
- **TypeScript** - Linguagem de programação

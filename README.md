🧪 Projeto de Treinamento: Testes Automatizados com Jest e NestJS
📋 Descrição
Este projeto foi desenvolvido como um ambiente de treinamento para praticar Test-Driven Development (TDD) utilizando Jest e NestJS. O foco principal é o aprendizado de testes automatizados através da implementação de um serviço de validação de cartões de crédito Visa.

🎯 Objetivos de Aprendizado
✅ Praticar TDD (Test-Driven Development)
✅ Dominar testes unitários com Jest
✅ Implementar testes de integração com NestJS Testing
✅ Validar regras de negócio através de testes
✅ Trabalhar com mocks e assertions
✅ Estruturar testes de forma organizada e legível
🏗️ Estrutura do Projeto
src/
├── app.controller.ts          # Controller principal
├── app.service.ts             # Service principal  
├── app.module.ts              # Módulo principal
├── main.ts                    # Ponto de entrada
└── services/
    └── visaCreditCard.service.ts  # Serviço de validação Visa

test/
├── app.e2e-spec.ts           # Testes end-to-end
└── visaCreditCard.service.spec.ts  # Testes unitários do serviço Visa

Copy

Apply

🧪 Casos de Teste Implementados
VisaCreditCardService
O serviço de validação de cartões Visa implementa as seguintes validações:

✅ Cenários de Sucesso
Validação CVV correto: Deve aceitar CVV com exatamente 3 dígitos
Número Visa válido: Deve aceitar números que começam com 4
❌ Cenários de Erro
Número não-Visa: Deve rejeitar cartões que não começam com 4
CVV inválido: Deve rejeitar CVV com menos ou mais de 3 dígitos
describe('VisaCreditCardService', () => {
  // ✅ Teste de sucesso
  it('should validate CVV correct for Visa', () => {
    expect(service.processCard('4111111111111111', '123')).toBe(true);
  });

  // ❌ Teste de erro - Cartão não-Visa
  it('should throw error when card number is not Visa', () => {
    expect(() => service.processCard('5111111111111111', '123'))
      .toThrow('Number card invalid for VISA');
  });

  // ❌ Teste de erro - CVV inválido
  it('should throw error when CVV is invalid', () => {
    expect(() => service.processCard('4111111111111111', '12'))
      .toThrow('CVV invalid for VISA. Must be 3 digits');
  });
});

Copy

Apply

🛠️ Tecnologias Utilizadas
NestJS - Framework Node.js para aplicações server-side
Jest - Framework de testes JavaScript
TypeScript - Linguagem de programação
Supertest - Biblioteca para testes HTTP
🚀 Como Executar
Instalação
npm install

Copy

Execute

Executar Testes
# Testes unitários
npm run test

# Testes em modo watch
npm run test:watch

# Testes com coverage
npm run test:cov

# Testes end-to-end
npm run test:e2e

Copy

Execute

Executar Aplicação
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod

Copy

Execute

📚 Conceitos Praticados
1. Test-Driven Development (TDD)
Escrever testes antes da implementação
Ciclo Red-Green-Refactor
Validação de requisitos através de testes
2. Testes Unitários
Isolamento de componentes
Mocking de dependências
Assertions e expectativas
3. Testes de Integração
Testes end-to-end com Supertest
Validação de fluxos completos
Testes de API REST
4. Boas Práticas
Organização de testes com describe e it
Setup e teardown com beforeEach
Nomenclatura descritiva de testes
Cobertura de cenários positivos e negativos
🎓 Lições Aprendidas
✅ Sucessos
Implementação de validações robustas
Estruturação clara de testes
Uso adequado de exceptions do NestJS
🔧 Melhorias Identificadas
Implementar mais cenários de teste
Adicionar validações de formato de cartão
Expandir para outros tipos de cartão (Mastercard, American Express)
Implementar testes de performance
🔄 Próximos Passos
Expandir Validações

Algoritmo de Luhn para validação de cartão
Validação de data de expiração
Suporte a múltiplas bandeiras
Melhorar Testes

Adicionar testes parametrizados
Implementar factory de dados de teste
Adicionar testes de carga
Integração

API REST para validação
Documentação com Swagger
Middleware de validação
📖 Recursos de Estudo
NestJS Testing Documentation
Jest Documentation
TDD Best Practices
Objetivo Alcançado: Este projeto serviu como uma excelente base para praticar testes automatizados, proporcionando experiência hands-on com TDD, Jest e NestJS Testing utilities. 🎯✨
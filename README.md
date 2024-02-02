# App: Find A Friend API

Este projeto é uma API para conectar organizações de adoção de animais (ORGs) com potenciais adotantes. Ele permite que as ORGs se cadastrem, façam login e listem animais de estimação disponíveis para adoção. Os usuários podem visualizar detalhes dos animais de estimação e filtrar a lista de animais de estimação por cidade e outras características.

## Recursos

- Cadastro e login de ORGs 
- Cadastro de animais de estimação
- Visualização de detalhes de animais de estimação
- Listagem de animais de estimação disponíveis para adoção por cidade
- Filtragem de animais de estimação por características

### Regras da aplicação (Requisitos funcionais)

- [x] Deve ser possível se cadastrar como uma ORG
- [x] Deve ser possível realizar login como uma ORG

- [x] Deve ser possível cadastrar um pet
- [x] Deve ser possível visualizar detalhes de um pet para adoção
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [x] Deve ser possível filtrar pets por suas características


### Regras de negócio

- [x] Uma ORG precisa ter um endereço e um número de WhatsApp
- [x] Um pet deve estar ligado a uma ORG
- [x] Para listar os pets, obrigatoriamente precisamos informar a cidade
- [x] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
- [x] Todos os filtros, além da cidade, são opcionais
- [] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

## RNFs (Requisitos não-funcionais)

- [x] A senha  precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] Uma ORG deve ser identificado por um JWT (JSON Web Token);


## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd seu-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

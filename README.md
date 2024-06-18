<h1 align="center">Welcome to travel-agency-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="http://localhost:3000/api-docs/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> API para gerenciamento de agências de turismo em um programa de fidelidade.

### 🏠 [Homepage](http://localhost:3003)

## Introdução

A **travel-agency-api** é uma API desenvolvida para gerenciar o cadastro de agências de turismo em um sistema de fidelidade. Ela permite criar, ler, atualizar e deletar registros de agências, além de fornecer documentação completa dos endpoints com Swagger.

## Pré-requisitos

Antes de começar, você precisará ter instalado na sua máquina as seguintes ferramentas:

-   [Node.js v20.12.1](https://nodejs.org/en/)
-   [npm](https://www.npmjs.com/)
-   [SQLite3](https://www.sqlite.org/index.html)

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/felipemrvieira/travel-agency-api.git

cd travel-agency-api

npm install
```

## Configuração do Banco de Dados

Execute as migrações para configurar o banco de dados SQLite:

```sh
npx sequelize-cli db:migrate
```

## Executar o Servidor

```sh
npm run start
```

O servidor estará rodando em http://localhost:3000.

## Documentação da API

A documentação da API está disponível em http://localhost:3000/api-docs.

## Executar Testes Automatizados

```sh
npm run test
```

## Autor

👤 **Felipe Maciel**

-   Linkedin: [@felipemrvieira](hhttps://www.linkedin.com/in/felipemrvieira/)
-   Github: [@felipemrvieira](https://github.com/felipemrvieira)

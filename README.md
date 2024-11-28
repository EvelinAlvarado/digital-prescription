# Projeto +DIGITAL SAUDE

Front-end do projeto desenvolvido no âmbito do 1º Hackathon da Cont.

## Sobre o Project

Portal web de gerenciamento de receitas entre os médicos e farmácias, visando aprimorar o processo de compra de médicamos pelos pacientes.

## Imagem

![Imagem](https://i.imgur.com/PGwiAde.png)

## Stack utilizada

**Front-end:** React, Next.js, Tailwind CSS, Shadcn.

## Executando

Para executar o projeto execute os seguintes passos:

git clone https://github.com/will-cesar/react-crud-projetos.git
Instalando as dependências
npm install
Execução do React em ambiente de desenvolvimento
npm start
Execução do backend (Fake API)
npm run backend

### Clone o Repositório

```bash
git clone https://github.com/will-cesar/react-crud-projetos.git
```

### Instale as Dependências

```bash
npm install
```

### Informe o Endereço da API (Backend)

```bash
Entre Dentro de: src\services\api.ts
Insira o endereço da API em baseURL

Exemplo:

import axios from "axios";
export const API = axios.create({
  baseURL: "http://localhost:3334/"
});
```

### Execute o Projeto

```bash
npm run dev
```

## Autores

- [@EvelinAlvarado](https://www.github.com/EvelinAlvarado)
- [@leticiaveigacs](https://www.github.com/leticiaveigacs)
- [@rgvieiraoficial](https://www.github.com/rgvieiraoficial)
- [@GabrielGomesSantos](https://www.github.com/GabrielGomesSantos)

---

# Projeto +DIGITAL SAUDE

Back-end do projeto desenvolvido no âmbito do 1º Hackathon da Cont.

## Sobre o Project

Portal web de gerenciamento de receitas entre os médicos e farmácias, visando aprimorar o processo de compra de medicamentos pelos pacientes.

## Imagem

![Imagem](https://i.imgur.com/PGwiAde.png)

## Stack utilizada

**Back-end:** Node, TypeScript, Fastify, Prisma, ProstgreSQL e Docker.

## Executando

Para executar o projeto execute os seguintes passos:

### Clone o Repositório

```bash
git clone https://github.com/will-cesar/react-crud-projetos.git
```

### Variáveis

Criar arquivo .env e preencher com os valores adequados

Conteúdo do Arquivo .env

```bash
#Server Port
PORT=3334

#PostgreSQL
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

#Secret Token
SECRET_TOKEN=

#Prisma
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

```

### Subir o Docker

```bash
Docker Compose up
```

### Rodar as Migrations do Banco de Dados

```bash
npx prisma migrate dev
```

## Autores

- [@EvelinAlvarado](https://www.github.com/EvelinAlvarado)
- [@leticiaveigacs](https://www.github.com/leticiaveigacs)
- [@rgvieiraoficial](https://www.github.com/rgvieiraoficial)
- [@GabrielGomesSantos](https://www.github.com/GabrielGomesSantos)

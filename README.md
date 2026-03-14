## desafioKtech_backend
# 📦 User API - Node.js + Express + MongoDB

API REST desenvolvida como desafio técnico backend, utilizando Node.js, Express, MongoDB e TypeScript, com autenticação baseada em JWT e organização em camadas seguindo boas práticas de desenvolvimento.

# 🚀 Tecnologias utilizadas

- Node.js

- Express

- MongoDB

- Mongoose

- TypeScript

- JWT (Json Web Token)

- bcrypt

- dotenv

- Zod (validação de dados)

# 🧠 Arquitetura do projeto

O projeto segue uma estrutura organizada em camadas para facilitar manutenção e escalabilidade.

src

│

├── auth

│   ├── auth.controller.ts

│   ├── auth.service.ts

│   ├── auth.middleware.ts

│   └── jwt.strategy.ts

│

├── user

│   ├── user.controller.ts

│   ├── user.service.ts

│   ├── user.model.ts

│   ├── user.schema.ts

│   └── middlewares

│           └── validateUser.middleware.ts

├── routes

│   ├── router.ts

│   └── user

│         └── userActions.routes.ts

|         └── userActions.routes.ts

│

├── config

│   └── jwt.ts

|   └── database.ts

│

│   

│

├── app.ts

└── server.ts

Separação de responsabilidades:

|Camada | Responsabilidade                        |
|-------|-----------------------------------------|
|Routes |	Definição das rotas               |
|Controllers |	Manipulação da requisição/resposta|
|Services |	Regras de negócio                 |
|Models |	Estrutura do banco                |
|Middlewares |	Validações e autenticação         |

# ⚙️ Configuração do ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

        PORT=3500
        MONGO_URI=mongodb://localhost:3000/
        JWT_SECRET=EMCXDo1t6scQLOICdcWFQkyL

Descrição das variáveis:

|Variável | Descrição    |
|---------|--------------|
|PORT |	Porta em que a API será executada|
|MONGO_URI |	URI de conexão com o MongoDB|
|JWT_SECRET |	Chave secreta utilizada para gerar os tokens JWT|

# 🛠 Instalação do projeto

Clone o repositório:

        git clone https://github.com/seu-usuario/seu-repositorio.git

Entre na pasta do projeto:

        cd seu-repositorio

Instale as dependências:

        yarn

# ▶️ Rodando o projeto

Execute o projeto em modo desenvolvimento:

        yarn dev

Ou em produção:

        yarn build
        yarn start

A API estará disponível em http://localhost:3500

# 🗄 Configurando o MongoDB
- Opção 1 — MongoDB Local

Instale o MongoDB:

https://www.mongodb.com/try/download/community

Depois execute o serviço MongoDB.

A URI padrão geralmente é:

mongodb://localhost:27017

Caso utilize porta personalizada, ajuste a variável no .env.

- Opção 2 — Docker (alternativa rápida)

Caso possua Docker instalado:

docker run -d -p 3500:3500 --name mongodb mongo


# 🔐 Autenticação

A autenticação é feita utilizando JWT (JSON Web Token).

Fluxo de autenticação:

Registro de usuário
↓
Login
↓
Geração do JWT
↓
Token enviado no header Authorization
↓
Rotas protegidas

Header esperado:

        Authorization: Bearer TOKEN
        📡 Endpoints da API
        👤 Usuários
        Criar usuário
        POST /register

Body:

        {
          "name": "João",
          "email": "joao@email.com",
          "password": "123456"
        }
        Atualizar usuário
        PATCH /update 
        //Requer autenticação.

        Buscar usuário por ID
        GET /getUser/:id
        Listar usuários
        GET /getUsers
        Deletar usuário
        DELETE /delete 
        //Requer autenticação.

# 🔑 Autenticação
        Login
        POST /login

Body:

        {
          "email": "user@email.com",
          "password": "123456"
        }

Resposta:

        {
          "user": {
            "id": "64c923...",
            "name": "João",
            "email": "joao@email.com"
          },
          "token": "JWT_TOKEN"
        }

# 🧪 Testando a API

Você pode testar a API utilizando:

- Postman

- Insomnia

- Thunder Client (VSCode)

Base URL:

http://localhost:3500

Exemplo:

POST http://localhost:3500/register

# 🧹 Boas práticas aplicadas

✔ Estrutura em camadas

✔ Clean Code

✔ Separação de responsabilidades

✔ Hash de senha com bcrypt

✔ Autenticação JWT

✔ Uso de variáveis de ambiente

✔ Validação de dados

✔ Tratamento de erros

✔ TypeScript

# 📌 Melhorias futuras

- Documentação da API com Swagger

- Testes automatizados (Jest / Supertest)

- Refresh Token

- Rate Limiting

- Logs estruturados

- Dockerização da aplicação

# 👨‍💻 Autor

Desenvolvido como parte de um desafio técnico backend por Lucas de Matos.

<h1 align="center">
   API REST com Node.js
</h1>

## Descrição
Esta é uma API REST desenvolvida em Node.js que inclui autenticação JWT e documentação com Swagger. A API permite o cadastro, login e listagem de usuários armazenados em um banco de dados em memória.

## Tecnologias Utilizadas
- Node.js
- Express
- JWT (JSON Web Token)
- Swagger para documentação
- Nodemon (apenas em desenvolvimento)

## Instalação
1. Clone este repositório:
   ```sh
   git clone https://github.com/fulldevgabriel/desafio_backend_Node.js
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Execução
### Ambiente de Desenvolvimento
Para rodar a aplicação em modo de desenvolvimento, utilize o Nodemon:
```sh
npm run dev
```

### Ambiente de Produção
```sh
npm start
```

## Rotas Disponíveis

### Cadastro de Usuário
- **Rota:** `POST /api/user`
- **Descrição:** Cadastra um novo usuário.
- **Corpo da Requisição:**
  ```json
  {
    "userName": "Exemplo",
    "userEmail": "exemplo@email.com",
    "userPass": "123456",
    "confirmPass": "123456"
  }
  ```

### Login
- **Rota:** `POST /api/login`
- **Descrição:** Realiza login e retorna um token JWT.
- **Corpo da Requisição:**
  ```json
  {
    "userEmail": "exemplo@email.com",
    "userPass": "123456"
  }
  ```

### Listagem de Usuários
- **Rota:** `GET /users`
- **Descrição:** Retorna a lista de usuários cadastrados. Requer um token JWT válido.
- **Cabeçalho da Requisição:**
  ```
  Authorization: Bearer <seu_token_aqui>
  ```

## Documentação com Swagger
A documentação da API pode ser acessada através da rota:
```
GET /api-docs
```

## By
[Gabriel Ribeiro de Carvalho](https://devgabriel.blog/)

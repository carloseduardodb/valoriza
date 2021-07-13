<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=4567Q&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=4567Q&labelColor=000000" alt="NLW Together" />
</p>

## Coisas pra melhorar

- Tratar erros de entrada de forma mais rigida usando o class validator
- Organizar os controllers. (Separar por pastas)
- Adicionar envio de email e recuperação de senha.
- Adicionar testes unitários com Japa ou Jest.

<br />

## 💻 Projeto - Feito no Curso NLW - Together da Rocketseat

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

<br />

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Preencha arquivo `.env.example` com uma chave privada para gerar o token de autenticação.
- Crie um banco de dados para a aplicação. O drive padrão instalado é o `mysql`.
- Adicione o nome do banco de dados com a senha no arquivo `.env.example`
- Após preencher o arquivo `.env.example` renomeio para `.env` .
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ❤️ by Carlos Eduardo Dias Batista

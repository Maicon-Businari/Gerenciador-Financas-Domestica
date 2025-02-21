# Gerenciador de Finanças Domésticas

Este projeto é uma aplicação completa de gerenciamento de finanças pessoais, composta por uma API RESTful desenvolvida com Java, utilizando Spring Boot, Lombok e MySQL no back-end, e uma interface de usuário construída com React no front-end. A API permite operações para criar, ler, atualizar e excluir transações financeiras, além de gerar relatórios de despesas e receitas. No front-end, a aplicação utiliza React Router para navegação, Axios para realizar requisições à API e TypeScript para uma melhor tipagem de dados. Além disso, a aplicação inclui testes com Jest e React Testing Library para garantir a qualidade do código.

## Tecnologias Utilizadas

### Back-end
- **Java 23**
- **Spring Boot** (para construir a API RESTful)
- **Lombok** (para reduzir a verbosidade do código)
- **MySQL** (para gerenciamento de banco de dados relacional)
- **Spring Data JPA** (para facilitar a interação com o banco de dados)
- **Spring Web** (para a construção da API)

### Front-end
- **React (para construção da interface de usuário)**
- **React Router DOM (para navegação entre páginas)**
- **TypeScript (para tipagem estática e maior segurança no desenvolvimento)**
- **Axios (para fazer requisições HTTP para a API)**

## Funcionalidades

- **Cadastro de Usuarios**: Cadastro de Usuários: Permite o registro de usuários para associar transações futuras a cada um.
- **Cadastro de Transações**: ermite cadastrar transações financeiras, associadas ao tipo de usuário.
- **Relatórios financeiros**: Geração de relatórios com o total de receitas, despesas e saldo.

## Como Rodar

### Pré-requisitos

- Java 23
- MySQL
- Maven ou Gradle

### Passos para execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Maicon-Businari/Gerenciador-Financas-Domestica
    ```

2. **Crie um banco de dados no MySQL**

    Configure o arquivo application.properties com os dados do banco referentes ao seu banco
    
   ```
    spring.datasource.url=jdbc:mysql://localhost:3306/ nome_do_banco
    spring.datasource.username= "Seu login"
    spring.datasource.password= "Sua senha"
    spring.jpa.hibernate.ddl-auto=update
    ```


3. **Inciando o projeto back-end**
    Com o MySQL rodando e o banco de dados configurado, basta rodar os seguintes comandos dentro da pasta back-end para inciar a api-rest:
    
    ```
        mvnw install

        mvnw spring-boot:run
    ```
    A API estará disponível em http://localhost:8080.


3. **Inciando o projeto front-end**
    Com o back-end rodando e, basta rodar os seguintes comandos via console dentro da pasta front-end para a  aplicação web:
    
    ```
        npm install

        npm start
    ```
    A API estará disponível em http://localhost:3000.
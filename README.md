# Gerenciador de Finanças Domésticas

Este projeto é uma API RESTful desenvolvida com Java, utilizando Spring Boot, Lombok e MySQL. A API permite o gerenciamento de finanças pessoais, proporcionando operações para criar, ler, atualizar e excluir transações financeiras, bem como gerar relatórios de despesas e receitas.

## Tecnologias Utilizadas

- **Java 23**
- **Spring Boot** (para construir a API RESTful)
- **Lombok** (para reduzir a verbosidade do código)
- **MySQL** (para gerenciamento de banco de dados relacional)
- **Spring Data JPA** (para facilitar a interação com o banco de dados)
- **Spring Web** (para a construção da API)

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
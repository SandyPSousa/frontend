***Motion Log - Sistema de Rastreamento de Atividade Física***
Este projeto é uma aplicação web full-stack desenvolvida como parte da disciplina de Engenharia de Softwares Escaláveis. O Motion Log permite aos usuários registrar e acompanhar suas atividades físicas, promovendo um estilo de vida mais saudável e ativo. A arquitetura inicial é um monólito simples, projetado para evoluir para uma arquitetura de microsserviços em fases futuras.

***Funcionalidades Implementadas (Primeira Entrega)***
Gestão de Usuários:

Cadastro de novos usuários com nome, e-mail e senha.

Autenticação segura de usuários existentes.

Registro de Atividades:

Formulário para que usuários autenticados possam registrar uma nova atividade física.

Seleção de tipos de atividade pré-definidos (caminhada, corrida, ciclismo e natação).

Entrada de dados como duração (em minutos) e distância (em km).

Histórico de Atividades:

Visualização de todo o histórico de atividades registradas pelo usuário autenticado.

A lista de histórico é atualizada em tempo real após um novo registro.

***Tecnologias Utilizadas***
O projeto é dividido em duas partes principais: o backend e o frontend.

Backend (Servidor)
Java 17: Linguagem de programação principal.

Spring Boot: Framework para a criação da aplicação e da API REST.

Spring Data JPA (Hibernate): Para a persistência de dados e comunicação com o banco de dados.

Maven: Ferramenta para gestão de dependências e build do projeto.

H2 Database: Banco de dados em memória, utilizado para o ambiente de desenvolvimento.

Lombok: Para reduzir código boilerplate (repetitivo) nas entidades.

Frontend (Cliente)
React: Biblioteca para a construção da interface de usuário.

JavaScript (ES6+): Linguagem de programação principal.

Axios: Cliente HTTP para realizar as requisições à API do backend.

CSS3: Para a estilização dos componentes.

NPM (Node Package Manager): Gerenciador de pacotes do Node.js.

***Pré-requisitos***
Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas na sua máquina:

Java Development Kit (JDK) - Versão 17 ou superior

Apache Maven

Node.js e NPM

***Como Executar o Projeto***
Siga os passos abaixo para executar a aplicação localmente.

1. Backend (Servidor Spring Boot)
Clone o repositório:

git clone <url-do-seu-repositorio>

Navegue para a pasta do backend:

cd motionlog

Execute a aplicação:

Via IntelliJ IDEA: Abra a classe MotionlogApplication.java e clique no botão "Run".

Via terminal Maven:

mvn spring-boot:run

O servidor estará rodando em http://localhost:8080.

Você pode acessar o console do banco de dados H2 em http://localhost:8080/h2-console com as seguintes credenciais:

JDBC URL: jdbc:h2:mem:motionlogdb

Username: sa

Password: password

2. Frontend (Aplicação React)
Abra um novo terminal.

Navegue para a pasta do frontend:

cd frontend

Instale as dependências:

npm install

Inicie a aplicação de desenvolvimento:

npm start

A aplicação será aberta automaticamente no navegador em http://localhost:3000.

Desenvolvido por Sandy Pereira de Sousa.
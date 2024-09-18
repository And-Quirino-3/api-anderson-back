-- Criando o banco de dados
create database anderson;

--Criando a tabela
create table if not exists users(
    id serial primary key,
    name varchar(255),
    email varchar(255),
    password varchar(255)
)

--Criando um usuario
insert into users(name, email, password) 
values ( 'Anderson Quirino', 'anderson@email.com', '@nd12gol');
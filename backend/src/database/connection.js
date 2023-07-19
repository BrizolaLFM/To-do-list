const postgresql = require('pg');

require('dotenv').config();

const connection = new postgresql.Pool({ 
    user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD, 
    port: process.env.POSTGRE_PORTDB,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DB
});

module.exports = connection;

/*
 user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD, 
    port: process.env.POSTGRE_PORTDB,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DB


user: 'luizTarefas', 
    password: 'tarefas1234', 
    port: 5432, 
    host: 'localhost', 
    database: 'tarefas' 
    */

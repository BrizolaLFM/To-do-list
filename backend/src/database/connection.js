const postgresql = require('pg');

const connection = new postgresql.Pool({ 
    user: 'luizTarefas', 
    password: 'tarefas1234', 
    port: 5432, 
    host: 'localhost', 
    database: 'tarefas' 
});
module.exports = connection;

/*
 user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD, 
    port: process.env.POSTGRE_PORTA,
    host: process.env.POSTGRE_HOST,
    database: process.env.POSTGRE_DB


user: 'luizTarefas', 
    password: 'tarefas1234', 
    port: 5432, 
    host: 'localhost', 
    database: 'tarefas' 
    */

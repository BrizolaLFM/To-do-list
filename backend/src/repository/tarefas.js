const { json } = require('express');
const connection = require('../database/connection.js');
const { DateTime } = require("luxon");


const getAllTasksFromDb = async () => {
    const tasks = []
    const retornoDb = await connection.query('SELECT * FROM tarefas');
    retornoDb.rows.forEach(row => {
        tasks.push(row)
    });

    return tasks
};



const criaTarefa = async (task) => {
const { title } = task;
 const date = DateTime.now().setZone("America/Sao_Paulo");
 const dataFormat = date.toFormat('dd/MM/yyyy HH:mm');
const comandQuery = `INSERT INTO tarefas(title, status, created_at, updated_at) VALUES ('${title}', 'Pendente', '${dataFormat}', '${dataFormat}')`;
//Essa const foi criada apenas para a linha da const tarefaCriada não ficar tão extensa

const tarefaCriada = await connection.query(comandQuery);
/* Na constante "comandQuery" os ? indicam o valor de cada item de `tarefas`;
   Os números colocados entre [] na const tarefaCriada "[1, 2, 3, 4]", significa que cada número vai salvar uma coluna do DB-
   {Ex: 1 vai salvar title; 2 vai salvar status...}; //Bom os `números` que eu citei antes foram alterados e agora passararam
a ser os valores que eu quero inserir, como {title, status, created_at, ...} por exemplo;
*/
return tarefaCriada;
};



const deletaTarefa = async (id) => {
    console.log('ID a ser deletado:', id);
    const numId = Number(id);
    const removeTarefa = await connection.query(`DELETE FROM tarefas WHERE id = '${numId}'`);
    return removeTarefa;
};



const atualizaTask = async (id, task) => {
    const { title, status } = task;
    const numId = Number(id);
    const comandQuery = (`UPDATE tarefas SET title = '${title}', status = '${status}' WHERE id = '${numId}'`);
    const taskAtualizada = await connection.query(comandQuery);
    return taskAtualizada;
};


module.exports = {
    getAllTasksFromDb,
    criaTarefa,
    deletaTarefa,
    atualizaTask
};




/*

SEQUENCIA DE HERANÇA:


ATUAL=
SERVER -> ROUTER -> CONTROLLER -> MODELS -> REPOSITORY


PRA MELHORAR=
SERVER -> ROUTER -> CONTROLLER -> BUSINESS -> MODELS -> REPOSITORY

IGUAL ADULTO=
- Cria a conexão com o DB
- Injeta ela na Repository e (CRIA) RETORNA A REPOSITORY
- Injeta a repository na Models e (CRIA) RETORNA A MODELS
- Injeta a models na Business e (CRIA) RETORNA A BUSINESS
- Injeta a business na Controller e (CRIA) RETORNA A CONTROLLER
- Injeta a controller na Router e (CRIA) RETORNA A ROUTER
- Injeta a router no Server e XABLAU server.start()

*/



/*
    SINCRONO (sync) = depende de uma coisa pra fazer outra

    ASSINCRINO (async) = segue a rotina sem depender de outra coisa
    { 
        -- tecnologia:
        ASYNC + AWAIT + Promise = chamamos uma rotina assinctrona que retorna uma PROMISE. 
            sempre que o retorno for uma promessa, e o resultado for interessante, precisamos fazer a
                nossa rotina "ESPERAR" pela promessa ser concluida.
                
                // TYPESCRIPT - tbm é a mesma merda em node puro rsrs mas sem os ": tipos"
                async function LuizComZPagaCervejaPara (nome: string): Promise<date|null> {
                    if (nome == "Gefferson") {
                        let dataAniversario:Date = await getAniversarioAPI(nome); // esse cara retorna uma Promise<date>
                        return dataAniversario; // 07/11
                    }
                    return null
                }
         
                
    }
        
*/

//O método Date.now() retorna o número de milisegundos decorridos desde de 1 de janeiro de 1970 00:00:00 UTC.
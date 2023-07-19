const connection = require('../database/connection.js');

const getAllTasksFromDb = async () => {
    const tasks = []
    const retornoDb = await connection.query('SELECT * FROM tarefas');
    retornoDb.rows.forEach(row => {
        tasks.push(row)
    });

    return tasks
};

module.exports = {getAllTasksFromDb};

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
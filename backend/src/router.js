const express = require('express');
const router = express.Router();

const controllerTarefa = require('./controller/tarefas.js')
const tarefaMiddleware = require('./middlewares/tarefas.js');

router.get('/tarefas', controllerTarefa.controllerTarefa);

router.post('/tarefas', tarefaMiddleware.validateTitle, controllerTarefa.criaTarefa);

router.delete('/tarefas/:id', controllerTarefa.deletaTarefa);

router.put('/tarefas/:id', tarefaMiddleware.validateTitle, tarefaMiddleware.validateStatus, controllerTarefa.atualizaTarefa);


module.exports = router;
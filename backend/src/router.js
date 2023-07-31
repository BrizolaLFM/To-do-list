const express = require('express');
const router = express.Router();

const controllerTarefa = require('./controller/tarefas.js')
const tarefaMiddleware = require('./middlewares/tarefas.js');

router.get('/tarefas', controllerTarefa.controllerTarefa);

router.post('/tarefas', tarefaMiddleware.validatebody, controllerTarefa.criaTarefa);


module.exports = router;
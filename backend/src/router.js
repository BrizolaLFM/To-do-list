const express = require('express');
const router = express.Router();

const controllerTarefa = require('./controller/tarefas.js')

router.get('/tarefas', controllerTarefa);


module.exports = router;
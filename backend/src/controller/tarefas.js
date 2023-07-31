const modelTarefas = require('../models/tarefas.js');

const controllerTarefa = async (req, res)=>{
    console.log(req.body);
    const tarefas = await modelTarefas.getAll();
    return res.status(200).json(tarefas);
};

const criaTarefa = async (req, res)=>{
    const createdTask = await modelTarefas.criaçãoTask(req.body);
    return res.status(201).json(createdTask);
};

module.exports = {
    controllerTarefa,
    criaTarefa
};
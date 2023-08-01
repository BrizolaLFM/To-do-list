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

const deletaTarefa = async (req, res)=>{
    const deleteTask = await modelTarefas.DeletarTarefa();
    return res.status(204).json();
};


module.exports = {
    controllerTarefa,
    criaTarefa,
    deletaTarefa
};
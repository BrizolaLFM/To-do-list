const modelTarefas = require('../models/tarefas.js');

const controllerTarefa = (req, res)=>{
    console.log(req.body)

    return res.status(200).json(modelTarefas.getAll());
}

module.exports = controllerTarefa;


//json({message: 'Luiz Brizola'})
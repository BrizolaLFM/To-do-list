const modelTarefas = require('../models/tarefas.js');

const controllerTarefa = async (req, res)=>{
    console.log(req.body)
    const tarefas = await modelTarefas.getAll()
    return res.status(200).json(tarefas);
}

module.exports = controllerTarefa;


//json({message: 'Luiz Brizola'})
const tarefasRepository = require('../repository/tarefas.js')

const getAll = async () => {
    return tarefasRepository.getAllTasksFromDb();
};

const criaçãoTask = async (task) => {
    return tarefasRepository.criaTarefa(task);
};

const DeletarTarefa = async (id) => {
    return await tarefasRepository.deletaTarefa(id);
};

module.exports = {
    getAll,
    criaçãoTask,
    DeletarTarefa
};
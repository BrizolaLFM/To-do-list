const tarefasRepository = require('../repository/tarefas.js')

const getAll = async () => {
    return tarefasRepository.getAllTasksFromDb();
};

const criaçãoTask = async (task) => {
    return tarefasRepository.criaTarefa(task);
};


module.exports = {
    getAll,
    criaçãoTask
};
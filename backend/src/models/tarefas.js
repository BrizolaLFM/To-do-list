const tarefasRepository = require('../repository/tarefas.js')

const getAll = async () => {
    return tarefasRepository.getAllTasksFromDb()
};

module.exports = { getAll };
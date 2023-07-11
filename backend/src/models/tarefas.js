const tarefasRepository = require('../repository/tarefas.js')

const getAll = () => {
    return tarefasRepository.getAllTasksFromDb()
};

module.exports = { getAll };
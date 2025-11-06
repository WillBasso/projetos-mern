const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    }
})

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
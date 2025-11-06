const Tarefa = require("../models/tarefaModel.js");

const listarTarefas = async (req, res) => {

    try {
        const tarefas = await Tarefa.find();

        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas' });
    }

};

const criarTarefa =  async (req, res) => {
    
    try {
        const novaTarefa = new Tarefa({ titulo: req.body.titulo });
        const tarefaSalva = await novaTarefa.save();
        res.status(201).json(tarefaSalva);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa'});
    }

};

const deletarTarefa = async (req, res) => {

    try {
        await Tarefa.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tarefa'});
    }

};

module.exports = { listarTarefas, criarTarefa, deletarTarefa};
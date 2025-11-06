const express = require('express');
const router = express.Router();
const { listarTarefas, criarTarefa, deletarTarefa } = require("../controllers/tarefaController.js");

router.get('/', listarTarefas);
router.post('/', criarTarefa);
router.delete('/:id', deletarTarefa);

module.exports = router;
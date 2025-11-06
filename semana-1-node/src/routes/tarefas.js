import express from "express";
const router = express.Router();

const tarefas = [
  { id: 1, titulo: "Estudar Node.js" },
  { id: 2, titulo: "Aprender Express" },
];

router.get('/', (req, res) => {
    res.json(tarefas);
});

export default router;
import express from "express";
import tarefasRouter from "./routes/tarefas.js";

const app = express();

app.use(express.json());
app.use('/tarefas', tarefasRouter);

app.get('/', (req, res) => {

    res.send('Servidor Node rodando com Express!');

})

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
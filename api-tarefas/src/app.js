const express = require("express");
const mongoose = require("mongoose");
const tarefaRoutes = require("./routes/tarefaRoutes.js");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use("/tarefas", tarefaRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conecar ao MongoDB', err))

module.exports = app;

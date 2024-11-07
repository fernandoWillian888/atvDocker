// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Definir uma rota básica
app.get('/', (req, res) => {
  res.send('Olá, mundo! A aplicação está rodando no Docker!');
});

// Iniciar o servidor na porta configurada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

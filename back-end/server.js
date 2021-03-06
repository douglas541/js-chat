const express = require('express');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Criando a Rota
app.use('/api', require('./src/routes'));


app.listen(3001, () => {
   console.log('Server started at 3001');
});
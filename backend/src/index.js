const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//Modo de produção
// app.use(cors({
//     origin :  'http://enderecoDeProd.com'
// }))

//Modo de desenvolvimento
app.use(cors());

//informando que sera usado JSON no corpo das requisicoes
app.use(express.json());
app.use(routes);

app.listen(3333);
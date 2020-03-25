const express = require('express');
const routes = require('./routes');

const app = express();

//informando que sera usado JSON no corpo das requisicoes
app.use(express.json());
app.use(routes);

app.listen(3333);
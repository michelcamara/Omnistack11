const express = require('express');

const routes = express.Router();

routes.get('/', (request, response)=>{
  return response.json({
    evento: 'Semana',
    aluno: 'avc'
  });
});


module.exports = routes;
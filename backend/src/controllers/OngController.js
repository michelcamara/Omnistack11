const crypto = require('crypto');
const connection = require('../database/connection');

module.exports={
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        //gerando bytes aleatorios de tamanho 4 e convetendo para string do tipo hexadecimal.
        const id = crypto.randomBytes(4).toString('HEX');
      
        await connection('ongs').insert({
          id, name, email, whatsapp, city, uf,
        });
      
        return response.json({id});
    },

    async index (request, response) {
        //buscando todos os campos da tabela ongs
        const ongs = await connection('ongs').select('*');
      
        return response.json(ongs);
      }
};
//Metodo up é responsavel por criar as tabelas
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      //o 2 significa o tamanho de strings a serem salvas nessa coluna
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
 return  knex.schema.dropTable('ongs');
};

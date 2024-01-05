exports.up = function (knex) {
    return knex.schema.createTable('tab_coment', (t) => {
      t.increments();
      t.string('nome', 100).notNull().unique();
      t.string('comentario', 100).notNull().unique();
      
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('tab_coment');
  };
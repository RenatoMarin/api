
exports.up = function(knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('prodId').primary()
        table.string('nome', 50).notNull()
        table.string('descrição').notNull()
        table.money('valor').notNull()
        table.string('image').notNull()
        //table.datetime('datacadastro')
        table.integer('catId').references('id')
                 .inTable('cateogria').notNull()
    })
};

exports.down = function(knex) {
    return kenex.schema.dropTable('produtos')
};

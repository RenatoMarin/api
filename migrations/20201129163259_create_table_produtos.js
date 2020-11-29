
exports.up = function(knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('prodId').primary()
        table.integer('catId').references('catId')
            .inTable('categoria').notNull()
        table.string('nome', 50).notNull()
        table.string('descrição').notNull()
        table.float('valor').notNull()
        table.string('image').notNull()
        //table.datetime('datacadastro')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
};
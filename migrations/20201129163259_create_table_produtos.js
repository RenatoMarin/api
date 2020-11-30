
exports.up = function(knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('prodId').primary()
        table.integer('catId').references('catId')
            .inTable('categoria').notNull()
        table.string('catName').notNull()
        table.string('nome', 100).notNull()
        table.string('descricao').notNull()
        table.float('valor').notNull()
        table.string('image').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
};
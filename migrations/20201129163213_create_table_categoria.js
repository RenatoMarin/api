
exports.up = function(knex) {
    return knex.schema.createTable('categoria', table => {
        table.increments('catId').primary()
        table.string('nome').notNull()
        table.string('descricao').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categoria')
};
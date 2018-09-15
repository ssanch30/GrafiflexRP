exports.up = async function(knex) {

    await  knex.schema.createTable('departaments', (table) => {
        table.increments('id').primary().unsigned()
        table.string('dept_name').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('departaments');
};

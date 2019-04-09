exports.up = async function(knex) {
      await  knex.schema.dropTableIfExists('stops').then(function (){knex.schema.createTable('stops',(table) => {
            table.increments('id').primary().unsigned()
            table.integer('user_id').notNullable().unsigned()
            table.integer('stoptype_id').notNullable().unsigned()
            table.datetime('start').notNullable()
            table.datetime('stop').notNullable()
            table.float('minutes').notNullable()
        })})
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stops')
};

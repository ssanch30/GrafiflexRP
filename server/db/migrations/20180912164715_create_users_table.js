exports.up = async function(knex) {
 await  knex.schema.createTable('users', (table) => {
          table.increments('id').primary().unsigned()
          table.string('name').notNullable()
          table.string('username').notNullable()
          table.integer('password').notNullable()
          table.integer('dept_id').unsigned()
          table.timestamps()
      })

    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};




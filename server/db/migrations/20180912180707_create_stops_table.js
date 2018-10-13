exports.up = async function(knex) {
<<<<<<< HEAD
      await  knex.schema.dropTableIfExists('stops').then(function (){createTable('stops',(table) => {
=======
      await  knex.schema.createTable('stops',(table) => {
>>>>>>> 7ab3ef53fb9302bf87c4791f45af6dcaa9383c57
            table.increments('id').primary().unsigned()
            table.integer('user_id').notNullable().unsigned()
            table.integer('stoptype_id').notNullable().unsigned()
            table.datetime('start').notNullable()
            table.datetime('stop').notNullable()
<<<<<<< HEAD
            table.float('minutes').notNullable()
        })})
=======
            table.integer('minutes').notNullable()
        })
>>>>>>> 7ab3ef53fb9302bf87c4791f45af6dcaa9383c57
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stops')
};
<<<<<<< HEAD

=======
>>>>>>> 7ab3ef53fb9302bf87c4791f45af6dcaa9383c57

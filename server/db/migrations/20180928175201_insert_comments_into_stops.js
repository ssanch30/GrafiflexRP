exports.up = async function(knex) {
<<<<<<< HEAD
  await  knex.schema.dropTableIfExists('stops').then(function (){
    return knex.schema.createTable('stops',(table) => {
        table.increments('id').primary().unsigned()
        table.integer('user_id').notNullable().unsigned()
        table.integer('stoptype_id').notNullable().unsigned()
        table.datetime('start').notNullable()
        table.datetime('stop').notNullable()
        table.float('minutes').notNullable()
        table.string('comments')
    })})
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('stops')
};

=======
    await  knex.schema.createTable('stops',(table) => {
          table.increments('id').primary().unsigned()
          table.integer('user_id').notNullable().unsigned()
          table.integer('stoptype_id').notNullable().unsigned()
          table.datetime('start').notNullable()
          table.datetime('stop').notNullable()
          table.integer('minutes').notNullable()
          table.string('comment')
      })
  };

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stops')
};
        
>>>>>>> 7ab3ef53fb9302bf87c4791f45af6dcaa9383c57

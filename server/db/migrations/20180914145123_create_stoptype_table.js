exports.up =  async function(knex,Promise) {
    Promise.all([    
       await knex.schema.createTable('stoptype',(table) => {
            table.increments('id').primary().unsigned()
            table.string('type').notNullable()
            table.string('description').notNullable()
            table.integer('dept_id').notNullable()
            table.boolean('selected').defaultTo(false)
            
        })
    ])
    };

exports.down = function(knex,Promise) {
    return knex.schema.dropTableIfExists('stoptype')
    };
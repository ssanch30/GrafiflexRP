exports.up = async function(knex) {
    await  knex.schema.createTable('users', (table) => {
             table.increments('id').primary().unsigned()
             table.string('name').notNull()
             table.string('lastname').notNull()
             table.string('username').notNull()
             table.integer('password').notNull()
             table.integer('dept_id').unsigned()
             table.timestamps()
         })
   
       };
   
   exports.down = async function(knex) {
       return await knex.schema.dropTableIfExists('users')
   };
   
   
   
   
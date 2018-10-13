 exports.up = async function(knex) {
    await  knex.schema.table('users', (table) => {
            table.string('lastname').notNull()
         })
   
       };
   
   exports.down = function(knex) {

       return(
            knex.schema.hasColumn('users', 'lastname') &&
            knex.schema.dropColumn('lastname')
           )
   };
   
   
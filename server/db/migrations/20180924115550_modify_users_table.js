<<<<<<< HEAD
 exports.up = async function(knex) {
=======
exports.up = async function(knex) {
>>>>>>> 7ab3ef53fb9302bf87c4791f45af6dcaa9383c57
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
   
   
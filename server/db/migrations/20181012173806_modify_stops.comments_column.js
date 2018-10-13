
exports.up = function(knex, Promise) {
    return knex.schema.table('stops',table =>{
        table.string('comment')
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('stops',table => {
    table.dropColumn('comment')
  })
};

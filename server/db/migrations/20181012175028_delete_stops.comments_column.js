
exports.up = function(knex, Promise) {
  return knex.schema.table('stops', table=>{
      table.dropColumn('comments')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('stops',table=>{
      table.string('comments')
  })
};


exports.up = async function(knex) {
    await knex.schema.table('users', (table)=>{
        table.dropTimestamps()
    })
};

exports.down = function(knex, Promise) {
  
};

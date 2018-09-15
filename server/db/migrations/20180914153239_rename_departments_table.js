
exports.up = async function(knex, Promise) {
    await knex.schema.renameTable('departaments','departments')
};

exports.down = function(knex, Promise) {
  
};

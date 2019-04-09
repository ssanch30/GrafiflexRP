const typesList = require ('../../db_sym/types.json')

exports.seed = (knex, Promise) => {
  return knex('stoptype').del().then(() => {
      console.log(typesList.types.length)
    const promises = Array(typesList.types.length).fill().map((_, i) => {
      return knex('stoptype').insert([{
        type: typesList.types[i].type,
        description: typesList.types[i].description,
        selected:false,
        dept_id: typesList.types[i].dept_id,
        id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}


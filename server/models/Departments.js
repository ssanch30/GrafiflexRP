const { Model } = require('objection')

class Departments extends Model {
  static get tableName () {
    return 'departments'
  }
}

module.exports = Departments

const { Model } = require('objection')
const path = require('path')

class Department extends Model {
  static get tableName () {
    return 'departments'
  }
  static get relationMappings () {
    return{
  users: {
    relation: Model.HasManyRelation,
    modelClass: path.join(__dirname, '/User'),
    join: {
        from: 'departments.id',
        to: 'users.dept_id'
        }
    }
    }
  }
}
module.exports = Department




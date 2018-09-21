const { Model } = require('objection')
const path = require('path')

class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      department: {
        relation: Model.HasOneRelation,
        modelClass: path.join(__dirname, '/Department'),
        join: {
          from: 'users.dept_id',
          to: 'departments.id'
        }
      }
    }
  }
}

module.exports = User


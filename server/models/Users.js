const { Model } = require('objection')
const path = require('path')

class Users extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      departments: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Departments'),
        join: {
          from: 'users.dept_id',
          to: 'departments.id'
        }
      }
    }
  }
}

module.exports = Users

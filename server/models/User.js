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
      },
      stops:{
        relation: Model.HasManyRelation,
        modelClass:path.join(__dirname, '/Stop'),
        join:{
          from:'users.id',
          to:'stops.user_id'
        }
      }
    }
  }
}
module.exports = User


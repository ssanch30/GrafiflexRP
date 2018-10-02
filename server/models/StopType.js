const { Model } = require('objection')
const path = require('path')

class StopType extends Model {
  static get tableName () {
    return 'stoptype'
  }

  static get relationMappings () {
    return {
        users: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, '/User'),
            join: {
                from: 'stoptype.user_id',
                to: 'users.id'
            }
        },
        department:{
          relation: Model.HasOneRelation,
          modelClass: path.join(__dirname,'/Department'),
          join:{
            from: 'stoptype.dept_id',
            to: 'departments.id'
          }
        }
    }
  }
}
   
module.exports = StopType
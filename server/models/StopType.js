const { Model } = require('objection')
const path = require('path')

class StopType extends Model {
  static get tableName () {
    return 'stoptypes'
  }

  static get relationMappings () {
    return {
        users: {
            relation: Model.HasManyRelation,
            modelClass: path.join(__dirname, '/User'),
            join: {
                from: 'stoptypes.user_id',
                to: 'users.id'
            }
        },
    }
  }
}
   
module.exports = StopType
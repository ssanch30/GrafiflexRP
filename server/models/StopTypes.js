const { Model } = require('objection')
const path = require('path')

class StopTypes extends Model {
  static get tableName () {
    return 'stoptypes'
  }

  static get relationMappings () {
    return {
        users: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/Users'),
            join: {
                from: 'stop.user_id',
                to: 'users.id'
            }
        },
    }
  }
}

module.exports = StopTypes
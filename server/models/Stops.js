const { Model } = require('objection')
const path = require('path')

class Stops extends Model {
  static get tableName () {
    return 'stops'
  }

  static get relationMappings () {
    return {
        users: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/Users'),
            join: {
                from: 'stops.user_id',
                to: 'users.id'
            }
        },
        stoptypes: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/StopTypes'),
            join: {
                from: 'stops.stoptypes_id',
                to: 'stoptypes.id'
                }
            }
    }
  }
}

module.exports = Stops

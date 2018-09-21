const { Model } = require('objection')
const path = require('path')

class Stop extends Model {
  static get tableName () {
    return 'stops'
  }

  static get relationMappings () {
    return {
        users: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/User'),
            join: {
                from: 'stops.user_id',
                to: 'users.id'
            }
        },
        stoptypes: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/StopType'),
            join: {
                from: 'stops.stoptypes_id',
                to: 'stoptypes.id'
                }
            }
    }
  }
}

module.exports = Stop

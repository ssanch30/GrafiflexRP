const { Model } = require('objection')
const path = require('path')

class Stop extends Model {
  static get tableName () {
    return 'stops'
  }

  static get relationMappings () {
    return {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/User'),
            join: {
                from: 'stops.user_id',
                to: 'users.id'
            }
        },
        stoptype: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.join(__dirname, '/StopType'),
            join: {
                from: 'stops.stoptype_id',
                to: 'stoptype.id'
                }
            },

    }
  }
}

module.exports = Stop


/*mutation NewStop($stop:NewStop!){
  stopAdd(stop:$stop){
    id
    user{name}
    stopType{type}
    start
    stop
    minutes
    comment
  }

}


  {stop(id:1){
  id
  user{name}
  stopType{type}
}
}
*/
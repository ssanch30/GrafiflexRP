const { Model } = require('objection')
const path = require('path')

class StopType extends Model {
  static get tableName () {
    return 'stoptype'
  }
  
  static get relationMappings () {
    return {
      department:{
        relation: Model.BelongsToOneRelation,
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
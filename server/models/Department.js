const { Model } = require('objection')
const path = require('path')

class Department extends Model {
  static get tableName () {
    return 'departments'
  }
  static get relationMappings () {
    return{
  users: {
    relation: Model.HasManyRelation,
    modelClass: path.join(__dirname, '/User'),
    join: {
        from: 'departments.id',
        to: 'users.dept_id'
        }
    },

    stoptypes:{
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname,'/StopType'),
      join: {
        from: 'departments.id',
        to: 'stoptype.dept_id'
      }
      },
      stop:{
        relation: Model.HasOneThroughRelation,
        modelClass: path.join(__dirname,'/Stop'),
        join:{
          from:'departments.id',
            through:{
              modelClass: path.join(__dirname, '/User'),
              from: 'users.dept_id',
              to: 'users.id'
            },
          to:'stops.user_id',
        }
      }
    }
  }
}
module.exports = Department




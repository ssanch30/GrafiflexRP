const User = require('./models/User')
const StopType = require('./models/StopType')
const Stop = require ('./models/Stop')
const Department = require('./models/Department')

const resolvers = {
    Query :{
        users:()=> User.query().eager('departments'),
        stoptypes: ()=>StopType.query().eager('departments'),
        stops:() => Stop.query().eager('[users,stoptypes]'),
        user: (rootValue, args) => User.query().eager('department').findById(args.id),
        stop:(rootValue,args) => Stop.query().eager('[users,stoptypes]').findById(args.id),
        department:(rootValue,args) => Department.query().eager('users').findById(args.id)
    },

    Mutation:{
        userAdd: async (_,args) => {
            return  await User.query().insert(args.user)
        }
    }
}

module.exports = resolvers

    
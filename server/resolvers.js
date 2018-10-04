const User = require('./models/User')
const StopType = require('./models/StopType')
const Stop = require ('./models/Stop')
const Department = require('./models/Department')

const resolvers = {
    Query :{
        //FetchAll
        users:()=> User.query().eager('[departments,stops]'),
        stoptypes: ()=>StopType.query().eager('department'),
        stops:() => Stop.query().eager('[user,stoptype]'),
        
        //Fetch Many
        stoptypesByDept: (rootValue,args)=>StopType.query().eager('department').where({dept_id:args.dept_id}),
        
        //Fetchone
        user: async (rootValue, args) => await User.query().eager('[department,stops.stoptype]').findById(args.id),
        stop:(rootValue,args) => Stop.query().eager('[user,stoptype]').findById(args.id),
        stoptype: async (rootValue,args)=> await StopType.query().eager('department').where(args.id),
        department:(rootValue,args) => Department.query().eager('users').findById(args.id),
        username:(rootValue,args) => User.query().eager('[department,stops]').findOne({username: args.username, password: args.password})
    },
    
    Mutation:{
        userAdd: async (_,args) => {
            return  await User.query().insert(args.user)
        },
        stopAdd: async (_,args) => {
            return await Stop.query().insert(args.stop)
        }
    }
}

module.exports = resolvers


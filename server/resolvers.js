

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
    /*Mutation:{ 
        stopAdd: (_,args)=>{
            console.log(args.profesor) 
            return Profesor.query().insert(args.profesor)
        },
        profesorEdit: (_,args)=>{
            return Profesor.query().patchAndFetchById(args.profesorId, args.profesor)
        },
        profesorDelete:(_,args) => {
            return Profesor.query().findById(args.profesorId).then((profesor)=>{
                 return Profesor.query().deleteById(args.profesorId).then(()=>profesor)
            })
        }
    }   */     

}

module.exports = resolvers


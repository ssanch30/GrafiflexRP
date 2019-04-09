const { gql } = require( 'apollo-server-express' )

const resolvers = require('../resolvers')
const User = require('./user')
const Stop = require('./stop')
const StopType = require ('./StopType')
const Department = require('./Department')


const rootQuery = gql`
  type Query {
    users: [User]
    stops: [Stop]
    stoptypes:[StopType]
    stoptype: StopType 
    stoptypesByDept(dept_id:Int!): [StopType]
    user(id: Int!): User
    stop(id: Int!): Stop
    department(id: Int!): Department
    username(username:String!,password: Int!): User
  },
  type Mutation {
    userAdd(user: NewUser): User
    stopAdd(stop: NewStop!): Stop
  }
`

  typeDefs= [rootQuery, User, StopType, Stop, Department ]
  


module.exports = {typeDefs,resolvers}

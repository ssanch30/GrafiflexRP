const { gql } = require( 'apollo-server-express' )
const {makeExecutableSchema,addMockFunctionsToSchema } = require ('graphql-tools')

const resolvers = require('../resolvers')
// types
const User = require('./User')
const Stop = require('./Stop')
const StopType = require ('./StopType')
const Department = require('./Department')

const rootQuery = gql`
  type Query {
    users: [User]
    stops: [Stop]
    stoptypesByDept(dept_id:Int!): [StopType]
    user(id: Int!): User
    stop(id: Int!): Stop
    department(id: Int!): Department
    username(username:String!,password: Int!): User
  },
  type Mutation {
    userAdd(user: NewUser): User
  }
`
// type Mutation {
    
// }
// stoptypes: [Stoptype]

// Stoptype
  typeDefs= [rootQuery, User, StopType, Stop, Department ]
  


module.exports = {typeDefs,resolvers}

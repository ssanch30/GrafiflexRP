const { gql } = require( 'apollo-server-express' )
const {makeExecutableSchema,addMockFunctionsToSchema } = require ('graphql-tools')

const resolvers = require('../resolvers')
const Profesor = require('./profesor')
const Curso = require('./curso')

const rootQuery = gql`
    type Query{
        cursos : [Curso]
        profesores:[Profesor]
        curso(id: Int): Curso
        profesor(id: Int):  Profesor
    }
    type Mutation{
        profesorAdd(profesor: NuevoProfesor): Profesor
        profesorEdit(profesorId: Int!, profesor:ProfesorEditable): Profesor
        profesorDelete(profesorId:Int!): Profesor
    }
`


const typeDefs = [rootQuery, Profesor, Curso ]





module.exports = { typeDefs, resolvers}

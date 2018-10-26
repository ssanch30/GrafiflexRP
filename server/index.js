const express= require('express')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const {typeDefs, resolvers,mocks} = require('./schema')

require('dotenv').config()
require('./db/setup')


const app = express()

const server = new ApolloServer({ typeDefs , resolvers, mocks:false })
server.applyMiddleware({app})


const PORT = 3300

app.get('/', (req, res) => {
    res.send(process.env);
})

app.listen(PORT, () => {
    console.log
    console.log(`🚀 Server Running at http://localhost:${PORT}${server.graphqlPath}`)
})
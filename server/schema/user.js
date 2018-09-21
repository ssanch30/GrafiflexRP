module.exports = `
    #This is the query scheme for users
    type User {
        id:ID!
        name: String!
        username:String!
        password: Int!
        department: Department
        stopList: [Stop]
    }
`
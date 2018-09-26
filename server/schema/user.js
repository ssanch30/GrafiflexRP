module.exports = `
    #This is the query scheme for users
    type User {
        id:ID!
        name: String!
        lastname: String!
        username:String!
        password: Int!
        department: Department
        stopList: [Stop]
    }
    input NewUser{
        name: String!
        lastname: String!
        username: String
        password: Int!
        dept_id: Int!
    }
`
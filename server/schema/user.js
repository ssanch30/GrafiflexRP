module.exports = `
    #This is the query scheme for users
    type User {
        id:ID!
        name: String!
        username:String!
        password: Int!
        dept_id: Department!
        stopList: [Stop]
    }
    type Department{
        id:ID!
        name:String!
        stopList:[stop]
    }
`
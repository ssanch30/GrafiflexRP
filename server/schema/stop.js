module.exports = `
    type Stop {
        id:ID!
        user:User!
        stopType:StopType!
        startTime: String!
        stopTime: String!
        minutes: Int!
    }
`

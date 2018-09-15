module.exports = `
    type Stop {
        id:ID!
        userId:Int!
        stopTypeId:Int!
        startTime: DateTime!
        stoptime: DateTime!
        minutes: Int!
    }
`
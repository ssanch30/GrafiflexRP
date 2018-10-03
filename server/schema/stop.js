module.exports = `
    type Stop {
        id:ID!
        user:User!
        stopType:StopType!
        start: Date!
        stop: Date!
        minutes: Int!
        comment: String!
    }


    input NewStop{
        user_id : Int!
        stopType_id : Int!
        startTime : Date!
        stopTime : Date!
        minutes : Int!
        comment : String
    }
    scalar Date
`

module.exports = `
    type Stop {
        id:ID!
        user:User!
        stoptype:StopType!
        start: Date!
        stop: Date!
        minutes: Float!
        comment: String!
    }


    input NewStop{
        user_id : Int!
        stoptype_id : Int!
        start : Date!
        stop : Date!
        minutes : Float!
        comment : String
    }
    scalar Date
`

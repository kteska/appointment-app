const { connect } = require('../db/mongo')
const assert = require('assert')
const AnswerError = require('../models/answers/answer')
const { ObjectID } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

let db

const answerRepository = {
    init: async () => {
        if (!db) {
            db = await connect()
        }
    },

    insert: async (answer) => {
        assert(db)
        const result = await db.collection('answers').insertOne(answer)
        console.log('error', result.result)
        return Boolean(result.result.ok)
    },
    
    find: async (params) => {
        assert(db)
        const result = await db.collection('answers').find({ questionId: params }).toArray()
        return result
    },
}
module.exports = answerRepository
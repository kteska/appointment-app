const { connect } = require('../db/mongo')
const assert = require('assert')
const Question = require('../models/question/question')

let db

const questionRepository = {
    init: async () => {
        if (!db) {
            db = await connect()
        }
    },

    insert: async (question) => {
        assert(db)
        const result = await db.collection('questions').insertOne(question)
        console.log('error', result.result)
        return Boolean(result.result.ok)
    },
    
    find: async () => {
        assert(db)
        const result = await db.collection('questions').find().toArray()
        return result
    },
}
module.exports = questionRepository

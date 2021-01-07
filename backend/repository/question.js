const { connect } = require('../db/mongo')
const assert = require('assert')
const Question = require('../models/question/question')
const { ObjectID } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

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

    // updateAnswer: async (id, answer) => {
    //     assert(db)
    //     const result = await db.collection('questions').updateOne(
    //       { _id: ObjectID(id) },
    //       {
    //         $set: {
    //           answer: answer
    //         }
    //       }
    //     );
    //     return result
    // },
}
module.exports = questionRepository

const Question = require('./question')
class QuestionError extends Error {}

const QuestionFactory = async ({ title, username, category }) => {
    console.log(category)
    if (!title) {
        throw new QuestionError("Missing title")
    }
    if (!username) {
        throw new QuestionError("Missing username")
    }
    // if (!category) {
    //     throw new QuestionError("Missing category")
    // }

    return Question({ title, username, category });
}

module.exports = { QuestionFactory, QuestionError }
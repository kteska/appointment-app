const Answer = require('./answer')
class AnswerError extends Error {}

const AnswerFactory = async ({ questionId, givenBy, answerForm }) => {
    if (!questionId) {
        throw new AnswerError("Missing question id")
    }
    if (!givenBy) {
        throw new AnswerError("Missing name of the one giving answer")
    }
    if (!answerForm) {
        throw new AnswerError("Missing answer")
    }

    return Answer({ questionId, givenBy, answerForm });
}

module.exports = { AnswerFactory, AnswerError }
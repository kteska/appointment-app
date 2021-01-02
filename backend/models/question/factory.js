const Question = require('./question')
class QuestionError extends Error {}

const QuestionFactory = async ({ title, username, category, answer }) => {

    if (!title) {
        throw new AppointmentError("Missing title")
    }
    if (!username) {
        throw new AppointmentError("Missing username")
    }
    if (!category) {
        throw new AppointmentError("Missing category")
    }

    return Question({ title, username, category, answer });
}

module.exports = { QuestionFactory, QuestionError }
const Question = ({ title, username, category }) => {
    const question = {
        title, username, category,

        dto: { title, username, category }
    }
    return question
}

module.exports = Question

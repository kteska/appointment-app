const Question = ({ title, username, category, answer }) => {
    const question = {
        title, username, category, answer,
        
        dto: { title, username, category, answer }
    }
    return question
}

module.exports = Question

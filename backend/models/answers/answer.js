const Answer = ({ questionId, givenBy, answerForm }) => {
    const answer = {
        questionId, givenBy, answerForm,

        dto: { questionId, givenBy, answerForm }
    }
    return answer
}

module.exports = Answer
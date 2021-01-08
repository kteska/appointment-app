const answerRepository = require('../../repository/answer')
const { AnswerFactory, AnswerError } = require('../../models/answers/factory')

const init = async () => {
    await answerRepository.init()
    console.log('Answer service has been successfully started')
}

const addAnswer = async (req, res, next) => {
    questionId = req.body.questionId
    givenBy = req.body.givenBy
    answerForm = req.body.answer
    try {
        const answer = await AnswerFactory({ questionId, givenBy, answerForm })
        const result = await answerRepository.insert(answer.dto)
            .catch(error => console.error(error))

        if (!result) {
            res.status(400)
            res.json('Error while inserting answer')
            return next()
        }
    } catch(error) {
        if (error instanceof AnswerError) {
            res.status(400)
            res.json(error.message)
        } else {
            console.error(error)
            res.status(500)
            res.json('Unknown error')
        }
        return next()
    }
    console.log("Request ended")
    res.json(`Answer form accepted -->  questionId: ${questionId} givenBy: ${givenBy} answer: ${answerForm}`);
    next()
}

const getAllAnswers = async (req, res, next) => {
    questionId = req.body.questionId
    const answers = await answerRepository.find(questionId)
    if (!answers) {
        res.status(400)
        res.json('There\'s no answers')
        return next()
    }
    res.json(answers)
    next()
}

init().catch(error => console.error(error))

module.exports = { addAnswer, getAllAnswers }

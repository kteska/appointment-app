const questionRepository = require('../../repository/question')
const { QuestionFactory, QuestionError } = require('../../models/question/factory')

const init = async () => {
    await questionRepository.init()
    console.log('Question service has been successfully started')
}

const hello = (req, res) => {
    res.send('Hello - a successful test')
}

const getAllQuestions = async (req, res, next) => {
    const questions = await questionRepository.find()
    if (!questions) {
        res.status(400)
        res.json('There\'s no questions')
        return next()
    }
    res.json(questions)
    next()
}

const addQuestion = async (req, res, next) => {
    title = req.body.title
    username = req.body.username
    category = req.body.category
    answer = req.body.answer
    try {
        const question = await QuestionFactory({title, username, category, answer})
        const result = await questionRepository.insert(question.dto)
            .catch(error => console.error(error))

        if (!result) {
            res.status(400)
            res.json('Error while inserting question')
            return next()
        }
    } catch(error) {
        if (error instanceof QuestionError) {
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
    res.json(`Question form accepted -->  title: ${title} username: ${username} category: ${category} answer: ${answer}`);
    next()
}

const updateAnswer = async (req, res, next) => {
    id = req.body.id
    answer = req.body.answer
    console.log('Params', id, answer)
    const result = await questionRepository.updateAnswer(id, answer)
            .catch(error => console.error(error))
    if (!result) {
        res.status(400)
        res.json('Error while updating answer')
        return next()
    }
    console.log('Update answer - success', id, answer)
    res.json('Update answer - success', id, answer)
    next()
}

init().catch(error => console.error(error))

module.exports = { hello, getAllQuestions, addQuestion, updateAnswer }

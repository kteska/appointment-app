const answerService = require('../services/answer/service')

const answerRoutes = (app) => {
    app.post('/answer/add', answerService.addAnswer)
    app.get('/answer/getAll', answerService.getAllAnswers)
}

module.exports = answerRoutes
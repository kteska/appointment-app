const questionService = require('../services/question/service')

const questionRoutes = (app) => {
    app.get('/question/hello', questionService.hello)
    app.get('/question/getAll', questionService.getAllQuestions)
    app.post('/question/add', questionService.addQuestion)
    app.put('/question/updateAnswer', questionService.updateAnswer)
}

module.exports = questionRoutes
const userService = require('../services/user/service')

const userRoutes = (app) => {
    app.post('/user/login', userService.login)
    app.post('/user/register', userService.register)
}

module.exports = userRoutes

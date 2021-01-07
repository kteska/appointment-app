const routes = (app) => {
    require('./question')(app)
    require('./answer')(app)
}

module.exports = routes

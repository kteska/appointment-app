const routes = (app) => {

    app.use((req, res, next) => {
        
        if (req.url === '/user/login' || req.url === '/user/register') {
            return next()
        }
        
        const token = req.headers['token']

        if (!token) {
            res.status(401).json('No authorization')
            return 
        }
        const username = verifyJWT(token)
        console.log(username)
        if (!username) {
            res.status(401).json('No authorization')
            return 
        }
        req.username = username
        
        next()
    })
    require('./user')(app)
}

module.exports = routes

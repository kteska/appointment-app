//const userRepository = require('../../repository/user')

const { UserFactory, UserError } = require('../../models/user/factory')

const init = async () => {
    await userRepository.init()
    console.log('User service has been successfully started')
}
const login = async (req, res, next) => {
    console.log(`Login request from ${req.hostname}`)
    next()
}

init().catch(error => console.error(error))

module.exports = { login }

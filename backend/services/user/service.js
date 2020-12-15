//const userRepository = require('../../repository/user')

const { UserFactory, UserError } = require('../../models/user/factory')

const init = async () => {
    await userRepository.init()
    console.log('User service has been successfully started')
}
const login = async (req, res, next) => {
    console.log(`Login request from ${req.hostname}`)

//     username = req.body.username
//     password = req.body.password

//     //checking if user entered username and password
    
//     if (!username || !password) {
//         res.status(400)
//         res.json('Missing username or password')
//         return next()
//     }

//     const user = await userRepository.find({username})

//     if (!user) {
//         res.status(400)
//         res.json('Incorrect username')
//         return next()
//     }

//     if (!user.checkPassword(password)) {
//         res.status(400)
//         res.json('Incorrect password')
//         return next()
//     }

//     res.json('Login success')
//     return next()
// }

// const register = async (req, res, next) => {
//     console.log(`Register request from ${req.hostname}`)

//     username = req.body.username
//     email = req.body.email
//     password1 = req.body.password1
//     password2 = req.body.password2

//     if (!username || !email) {
//         res.status(400)
//         res.json('Missing username or email')
//         return next()
//     }

//     try {
//         const user = await UserFactory({username, email, password1, password2})
//         const result = await userRepository.insert(user.dto)
//             .catch(error => console.error(error))

//         if (!result) {
//             console.error('Error while inserting user')
//             res.status(500)
//             res.json('Unknown error')
//             return next()
//         }

//     } catch(error) {
//         if (error instanceof UserError) {
//             res.status(400)
//             res.json(error.message)
//         } else {
//             console.error(error)
//             res.status(500)
//             res.json('Unknown error')
//         }
//         return next()
//     }

//     console.log("Request ended")

//     res.json(`Register form Username: ${username} Email: ${email} Register form accepted`);
    next()
}

init().catch(error => console.error(error))

module.exports = { login }

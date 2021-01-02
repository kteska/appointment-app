const config = {
    port: 3000,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        db: process.env.MONGO_DB_NAME,
        username: process.env.USERNAME_NAME,
        password: process.env.PASSWORD_NAME
    }
}

module.exports = config;
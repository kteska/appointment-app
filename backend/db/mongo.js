const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const config = require('../config/config')

const url = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`;

const dbName = config.mongo.db

const client = new MongoClient(url, {
    useUnifiedTopology: true
})

const connect = async () => {
    await client.connect(function(err) {
        assert.strictEqual(null, err)
        console.log(`Connected successfully to database ${dbName}: ${url}`)
    })
    return client.db(dbName)
}

const close = async () => {
    await client.close()
}

module.exports = { connect, close }
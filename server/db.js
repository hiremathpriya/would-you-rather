const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)

function getQuestions(testConn) {
    const conn = testConn || connection
    return conn('game-questions').select()
}

function updateCounter(id, counter1, counter2, testConn) {
    const conn = testConn || connection

    return conn('game-questions')
        .where('id', id)
        .update({ counter1, counter2 })
}


module.exports = {
    getQuestions,
    updateCounter

}
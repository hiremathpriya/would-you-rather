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

function saveQuestions(questions, testConn){
    const conn = testConn || connection
    console.log({db:questions})
    return conn('game-questions')
    .insert({Option1:questions.option1, Option2:questions.option2})
    
}


module.exports = {
    getQuestions, saveQuestions, 
    updateCounter

}
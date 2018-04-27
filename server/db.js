const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)

function getQuestions (testConn) {
    const conn = testConn || connection
    return conn('game-questions').select()
  }


module.exports = {
    getQuestions
    
}
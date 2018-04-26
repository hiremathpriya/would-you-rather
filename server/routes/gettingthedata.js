const express = require('express')
const router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
    console.log('get')
  db.getQuestions()
    .then(questions => {
        console.log(questions)
        res.json(questions)
    })
})


module.exports = router
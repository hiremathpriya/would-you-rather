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

router.post('/', function (req, res) {
    console.log(req.body)
    db.saveQuestions(req.body)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    })

module.exports = router
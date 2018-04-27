const express = require('express')
const router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getQuestions()
    .then(questions => {
        res.json(questions)
    })
})

router.post('/', function (req, res) {
    console.log(req.body)
    db.saveQuestions(req.body)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    })
router.put('/:id', (req, res) => {
    console.log(req.body)
    db.updateCounter(req.params.id, req.body.counter1, req.body.counter2)
      .then((updatedCounter) => res.sendStatus(201))
      .catch(err => console.log(err))
  })

module.exports = router
const express = require('express')
const router = express.Router()

const db = require('./db')

router.post('/', function (req, res) {
  console.log('posting to database')
  // db.saveWidget(req.body)
  res.sendStatus(200)
})

module.exports = router
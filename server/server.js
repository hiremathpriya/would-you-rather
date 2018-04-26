const path = require('path')
const express = require('express')
const routes = require('./routes/gettingthedata')

const server = express()


//Middleware
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())


server.use('/api/v1', routes)

module.exports = server

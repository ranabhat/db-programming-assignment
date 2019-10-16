const express = require('express') // import express node library
var app = express() // creates an express application object
const bodyParser = require('body-parser') // Parse incoming request bodies in a middleware before handlers, available under the req.body property
const morgan = require('morgan')
// For production needed
const compression = require('compression') // Import compression
const helmet = require('helmet') // Import helmet
const analyzeRouter = require('./controllers/analyze')
const middleware = require('./utils/middleware')

// add the middleware libraries into the request handling chain
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

morgan.token('post-body', function (request, response) { return JSON.stringify(request.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-body'))

app.use(compression()) // compress all the routes (for high traffic website we use Nginx)
app.use(helmet()) // sets appropriate HTTP headers to protect app from well known vulnerabilities

app.use('/analyze', analyzeRouter)
app.use(middleware.unknownEndpoint)

module.exports = app

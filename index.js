const express = require('express') // import express node library
const bodyParser = require('body-parser') // Parse incoming request bodies in a middleware before handlers, available under the req.body property

const analyze = require('./helpfunctions')

// creates an express application object
var app = express()

// add the middleware libraries into the request handling chain
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port
  console.log('App now running on port', port)
})

// DB Challenge API ROUTES BELOW

/*  "/analyze"
 *    GET: Show Json with property "title" that has value "DB CHALLENGE"
 *    POST: Analyze the text receved and calculate the required values
 */

app.get('/analyze', function (req, res) {
  res.status(200).json({ title: 'DB CHALLENGE' })
})

app.post('/analyze', function (req, res, next) {
  const sentence = req.body// Request Body
  const sentenceBody = sentence.text // Object Property Text Length
  const analyze1 = analyze.analyze(sentenceBody)
  res.status(200).json({
    textLength: { withSpaces: analyze1[0], withoutSpaces: analyze1[1] },
    wordCount: analyze1[2],
    characterCount: analyze1[3]
  })
})

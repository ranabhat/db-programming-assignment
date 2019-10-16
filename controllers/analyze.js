const analyzeRouter = require('express').Router()
const analyze = require('../helpfunctions')

// DB Challenge API ROUTES BELOW

/*  "/analyze"
 *    GET: Show Json with property "title" that has value "DB CHALLENGE"
 *    POST: Analyze the text receved and calculate the required values
 */

analyzeRouter.get('/', function (req, res) {
  res.status(200).json({ title: 'DB CHALLENGE' })
})

analyzeRouter.post('/', function (req, res, next) {
  const sentence = req.body// Request Body
  const sentenceBody = sentence.text // Object Property Text Length
  const analyze1 = analyze.analyze(sentenceBody)
  res.status(200).json({
    textLength: { withSpaces: analyze1[0], withoutSpaces: analyze1[1] },
    wordCount: analyze1[2],
    characterCount: analyze1[3]
  })
})

module.exports = analyzeRouter

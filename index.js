/*
 * Author: Paribesh Ranabhat
 * Application Name :- db-programming-assignment
 * Licensed under the MIT License
 * You may use the file in compliance with the License.
 */
const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

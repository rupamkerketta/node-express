const express = require('express')
const errorHandlerMiddleware = require('../middlewares/error-handler.middleware')
const notFoundMiddleware = require('../middlewares/not-found.middleware')
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
require('../routes')(app)

// Error Handlers
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

module.exports = app

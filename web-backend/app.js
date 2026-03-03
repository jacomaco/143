const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware');
const jobsRouter = require('./controllers/jobs');

const app = express()

logger.info('connection to', config.MONGODB_URI)

mongoose
    .connect(config.MONGODB_URI, { family: 4 })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connectiong to MongoDB:', error.message)
    })



app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/jobs', jobsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
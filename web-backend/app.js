const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware');
const jobsRouter = require('./controllers/jobs');
const adminRouter = require('./controllers/admin');
const messagesRouter = require('./controllers/messages');
const rateLimit = require('express-rate-limit');

const app = express()

app.set('trust proxy', 1); // (Viktigt för Render, annars blockerar den fel IP)

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

// För testning: Max 3 anrop per minut
const testLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minut
    max: 3,
    message: { error: 'Test av Rate Limit: Du har blivit blockerad för att du klickade för snabbt!' }
});

// Använd limitern på alla rutter som börjar med /api/
app.use('/api/', testLimiter);

app.use('/api/jobs', jobsRouter)
app.use('/api/admin', adminRouter)
app.use('/api/messages', messagesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
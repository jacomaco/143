const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware');
const jobsRouter = require('./controllers/jobs');
const adminRouter = require('./controllers/admin');
const messagesRouter = require('./controllers/messages');

// IMPORTERA SÄKERHETSPAKETEN
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express()

// 1. LITA PÅ MOLNET (För Render)
app.set('trust proxy', 1);

// 2. HELMET: Stänger säkerhetsluckor i HTTP-headers direkt
app.use(helmet());

logger.info('connection to', config.MONGODB_URI)

mongoose
    .connect(config.MONGODB_URI, { family: 4 })
    .then(() => logger.info('connected to MongoDB'))
    .catch((error) => logger.error('error connectiong to MongoDB:', error.message))

app.use(express.static('dist'))
app.use(express.json())

app.use(middleware.requestLogger)

// 4. RATE LIMITING: Riktiga produktionsregler

// Allmän gräns för hela API:et (ex: 100 anrop per 15 minuter per IP-adress)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: { error: 'För många anrop från denna IP, försök igen om 15 minuter.' }
});

// Strikt gräns just för att skicka formulär (ex: Max 5 ansökningar per timme)
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Du har skickat för många meddelanden. Försök igen senare.' }
});

// Applicera allmänna gränsen på alla API-rutter
app.use('/api/', apiLimiter);

// 5. RUTTER

// 5a. Applicera strikta gränsen ENDAST på POST-rutterna FÖRST!
app.use('/api/jobs/:id/ansokan', formLimiter); 
app.use('/api/messages', (req, res, next) => {
  // Eftersom messagesRouter hanterar både GET och POST, 
  // ser vi till att limitern bara slår till om någon skickar in data (POST).
  if (req.method === 'POST') {
    return formLimiter(req, res, next);
  }
  next();
});

// 5b. Skicka sedan in trafiken i dina routers
app.use('/api/jobs', jobsRouter)
app.use('/api/admin', adminRouter)
app.use('/api/messages', messagesRouter)

// Applicera strikta gränsen ENDAST på POST-rutterna för formulär
app.post('/api/jobs/:id/ansokan', formLimiter);
app.post('/api/messages', formLimiter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
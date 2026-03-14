const messagesRouter = require('express').Router()
const Message = require('../models/message')

// Route för att spara ett nytt meddelande (Publikt)
messagesRouter.post('/', async (request, response) => {
  const body = request.body

  const message = new Message({
    namn: body.namn,
    email: body.email,
    telefon: body.telefon,
    meddelande: body.meddelande,
    datum: new Date()
  })

  const savedMessage = await message.save()
  response.status(201).json(savedMessage)
})

// Route för att hämta alla meddelanden (Till admin-panelen)
messagesRouter.get('/', async (request, response) => {
  const messages = await Message.find({}).sort({ datum: -1 })
  response.json(messages)
})

module.exports = messagesRouter

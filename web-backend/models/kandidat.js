// models/kandidat.js
const mongoose = require('mongoose')

// models/kandidat.js
const kandidatSchema = new mongoose.Schema({
  namn: { type: String, required: true },
  email: { type: String, required: true },
  telefon: String,
  linkedin: String, // <-- Lägg till denna rad!
  meddelande: String,
  cvSokvag: String,
  datum: Date,
  ansoktJobb: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
})

kandidatSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Kandidat', kandidatSchema)
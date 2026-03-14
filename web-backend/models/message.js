const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    namn: { type: String, required: true },
    email: { type: String, required: true },
    telefon: { type: String, required: true },
    meddelande: { type: String, required: true },
    datum: { type: Date, default: Date.now }
}, {
    timestamps: true
});

messageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;

const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true
    },
    namn: {
        type: String
    },
    foretag: {
        type: String,
        required: true
    },
    plats: {
        type: String
    },
    varaktighet: {
        type: String
    },
    timtaxa: {
        type: String
    },
    kort_beskrivning: {
        type: String,
        required: true
    },
    beskrivning: {
        type: String,
        required: true
    },
    sista_ansokningsdag: {
        type: Date // Mongoose hanterar datum automatiskt!
    },
    kandidater: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }]
}, {
    // Lägger automatiskt till createdAt och updatedAt i databasen
    timestamps: true
});

jobSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
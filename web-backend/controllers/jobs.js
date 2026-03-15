const jobsRouter = require('express').Router()
const Job = require('../models/job')
const Kandidat = require('../models/kandidat')
const multer = require('multer')

// 1. IMPORTERA GOOGLE CLOUD STORAGE
const { Storage } = require('@google-cloud/storage')

// 2. ÄNDRA MULTER TILL ATT ANVÄNDA RAM-MINNET (Sluta spara lokalt)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // Max 5MB per fil (säkerhet!)
})

// 3. INITIERA GOOGLE CLOUD (Fyll i dina uppgifter här!)
const storage = new Storage({
  projectId: 'star-match-storage', // Hittas i JSON-filen under "project_id"
  keyFilename: 'google-cloud-key.json' // Namnet på JSON-filen i din mapp
})

const bucket = storage.bucket('starmatch-cv-kandidater') // T.ex. starmatch-cv-kandidater-2026

jobsRouter.get('/', async (request, response) => {
  const jobs = await Job.find({}).select('-kandidater')
  response.json(jobs)
})

jobsRouter.post('/', async (request, response) => {
  const body = request.body

  const job = new Job({
    titel: body.titel,
    namn: body.namn,
    foretag: body.foretag,
    plats: body.plats,
    varaktighet: body.varaktighet,
    omfattning: body.omfattning,
    timtaxa: body.timtaxa,
    kort_beskrivning: body.kort_beskrivning,
    beskrivning: body.beskrivning,
    sista_ansokningsdag: body.sista_ansokningsdag,
    kandidater: []
  })

  let savedJob = await job.save()

  savedJob = savedJob.toObject()
  savedJob.id = savedJob._id.toString()
  delete savedJob._id
  delete savedJob.__v
  delete savedJob.kandidater

  response.status(201).json(savedJob)
})

jobsRouter.delete('/:id', async (request, response) => {
  await Job.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

jobsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const job = {
    titel: body.titel,
    namn: body.namn,
    foretag: body.foretag,
    plats: body.plats,
    varaktighet: body.varaktighet,
    omfattning: body.omfattning,
    timtaxa: body.timtaxa,
    kort_beskrivning: body.kort_beskrivning,
    beskrivning: body.beskrivning,
    sista_ansokningsdag: body.sista_ansokningsdag,
  }

  let updatedJob = await Job.findByIdAndUpdate(
    request.params.id,
    job,
    { new: true, runValidators: true, context: 'query' })

  if (updatedJob) {
    updatedJob = updatedJob.toObject()
    updatedJob.id = updatedJob._id.toString()
    delete updatedJob._id
    delete updatedJob.__v
    delete updatedJob.kandidater
    response.json(updatedJob)
  } else {
    response.status(404).end()
  }
})

// === NY, UPPDATERAD ROUTE FÖR ATT ANSÖKA ===
jobsRouter.post('/:id/ansokan', upload.single('cvFile'), async (request, response) => {
  const body = request.body
  const file = request.file // Filen ligger nu i RAM-minnet (file.buffer)

  const job = await Job.findById(request.params.id)

  if (!job) {
    return response.status(404).json({ error: 'Jobbet hittades inte' })
  }

  let cvPublicUrl = null

  // Om användaren skickade med en fil, ladda upp den till Google Cloud
  if (file) {
    // Skapa ett unikt namn (t.ex. 1678881234567-mitt_cv.pdf)
    const uniqueFileName = `${Date.now()}-${file.originalname.replace(/\s/g, '_')}`

    // Skapa en referens till filen i Bucketen
    const blob = bucket.file(uniqueFileName)

    // Skapa en "stream" och skicka över datan från RAM till molnet
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: file.mimetype
    })

    // Vi måste använda ett Promise för att invänta uppladdningen innan vi sparar i MongoDB
    await new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        console.error("Fel vid molnuppladdning:", err)
        reject(err)
      })

      blobStream.on('finish', () => {
        // Skapa en publik länk till filen!
        cvPublicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        resolve()
      })

      // Utför själva skrivningen av bufferten
      blobStream.end(file.buffer)
    })
  }

  // Skapa kandidaten (nu med den publika molnlänken istället för en lokal sökväg!)
  const newKandidat = new Kandidat({
    namn: body.namn,
    email: body.email,
    telefon: body.telefon,
    meddelande: body.meddelande,
    linkedin: body.linkedin,
    cvSokvag: cvPublicUrl, // Sparar länken till Google Cloud
    datum: new Date(),
    ansoktJobb: job._id
  })

  const savedKandidat = await newKandidat.save()

  job.kandidater = job.kandidater.concat(savedKandidat._id)
  let savedJob = await job.save()

  savedJob = savedJob.toObject()
  savedJob.id = savedJob._id.toString()
  delete savedJob._id
  delete savedJob.__v
  delete savedJob.kandidater

  response.status(201).json(savedJob)
})

module.exports = jobsRouter
const jobsRouter = require('express').Router()
const Job = require('../models/job')
const Kandidat = require('../models/kandidat') // Importera den nya Kandidat-modellen
const multer = require('multer')

// Konfigurera multer. Detta sparar uppladdade filer i mappen "uploads" i din backend.
// (Du kan behöva skapa mappen "uploads" manuellt i web-backend-mappen)
const upload = multer({ dest: 'uploads/' })

// Denna rutt hämtar jobbdatan som ska visas för användarna i frontenden
jobsRouter.get('/', async (request, response) => {
  const jobs = await Job.find({}).select('-kandidater')
  response.json(jobs)
})

jobsRouter.post('/', async (request, response) => {
  const body = request.body

  // Skapa ett nytt jobb utifrån schemat
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
    // Om inga personer skickas med, sätter vi en tom array som standard
    kandidater: body.kandidater || [] // returnera inte denna till frontend, den hanteras internt i backend!
  })

  const savedJob = await job.save()
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
    kandidater: body.kandidater || []
  }

  const updatedJob = await Job.findByIdAndUpdate(
    request.params.id,
    job,
    { new: true, runValidators: true, context: 'query' })

  updatedJob ? response.json(updatedJob) : response.status(404).end()
})

// Route för att skicka in en ansökan (lägger till i kandidater-arrayen)
jobsRouter.post('/:id/ansokan', upload.single('cvFile'), async (request, response) => {
  console.log("BODY:", request.body)
  console.log("FILE:", request.file)

  const body = request.body
  const file = request.file // Här hamnar informationen om den uppladdade filen
  
  const job = await Job.findById(request.params.id)

  if (!job) {
    return response.status(404).json({ error: 'Jobbet hittades inte' })
  }

  // Skapa en ny kandidat
  const newKandidat = new Kandidat({
    namn: body.namn,
    email: body.email,
    telefon: body.telefon,
    meddelande: body.meddelande,
    linkedin: body.linkedin,
    // Om en fil laddades upp, spara dess sökväg. Annars sätt till null.
    cvSokvag: file ? file.path : null, 
    datum: new Date(),
    ansoktJobb: job._id
  })

  // Spara kandidaten i databasen
  const savedKandidat = await newKandidat.save()

  // Länka kandidaten till jobbet
  job.kandidater = job.kandidater.concat(savedKandidat._id)
  const savedJob = await job.save()
  
  response.status(201).json(savedJob)
})

module.exports = jobsRouter
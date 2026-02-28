const jobsRouter = require('express').Router()
const Job = require('../models/job')

jobsRouter.get('/', async (request, response) => {
  const jobs = await Job.find({})
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
    timtaxa: body.timtaxa,
    beskrivning: body.beskrivning,
    sista_ansokningsdag: body.sista_ansokningsdag,
    // Om inga personer skickas med, sätter vi en tom array som standard
    ansvariga_personer: body.ansvariga_personer || [] // byt detta till "relevanta personer"
  })

  const savedJob = await job.save()
  response.status(201).json(savedJob)
})
module.exports = jobsRouter
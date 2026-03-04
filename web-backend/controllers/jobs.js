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

module.exports = jobsRouter
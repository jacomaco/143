const adminRouter = require('express').Router()
const Job = require('../models/job')

// === NY ADMIN-RUTT ===
// Denna rutt hämtar ALL data (inklusive kandidater) för admin-panelen
adminRouter.get('/jobs', async (request, response) => {
  // populate('kandidater') fyller i hela kandidat-objekten istället för bara id:n
  const jobs = await Job.find({}).populate('kandidater')
  response.json(jobs)
})
// =====================

module.exports = adminRouter

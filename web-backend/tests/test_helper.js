const Job = require('../models/job')

const initialJobs = [
    {
        titel: 'Frontend-utvecklare',
        namn: 'Johan',
        foretag: 'Tech Solutions AB',
        plats: 'Stockholm',
        varaktighet: 'Heltid',
        timtaxa: '400',
        beskrivning: 'Vi söker en erfaren frontend-utvecklare för att arbeta med våra kunders webbapplikationer.',
        sista_ansokningsdag: new Date('2024-12-31')
    },
    {
        titel: 'Backend-utvecklare',
        namn: 'Anna',
        foretag: 'Innovatech AB',
        plats: 'Göteborg',
        varaktighet: 'Deltid',
        timtaxa: '450',
        beskrivning: 'Vi söker en skicklig backend-utvecklare för att bygga robusta API-lösningar.',
        sista_ansokningsdag: new Date('2024-11-30')
    }
]

const jobsInDb = async () => {
    const jobs = await Job.find({})
    return jobs.map(job => job.toJSON())
}

module.exports = {
    initialJobs,
    jobsInDb
}
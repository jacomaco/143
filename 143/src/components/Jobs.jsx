import Job from './Job';

export default function Jobs({ jobsToShow }) {
  return (
    <section id="assignments" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Lediga uppdrag</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Exempel på ett uppdrag */}
          {jobsToShow.map(job => (
            <Job 
              key={job.id}
              job={job}
            />
          ))}

          {/* Lägg till fler uppdrag här */}
        </div>
      </div>
    </section>
  )
}
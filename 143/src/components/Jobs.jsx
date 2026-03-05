import Job from './Job';

export default function Jobs({ jobsToShow }) {
  return (
    // bg-transparent gör att den smälter in snyggt med App.jsx bakgrund
    <section id="assignments" className="py-8">
      <div className="max-w-7xl mx-auto">

        {/* Rubriksektionen - nu snyggt centrerad */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2 inline-block">
            Lediga uppdrag
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Här hittar du våra aktuella uppdrag. Vi letar alltid efter talanger som vill vara med och göra skillnad.
          </p>
        </div>

        {/* Grid för jobbkorten */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobsToShow.map(job => (
            <Job
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

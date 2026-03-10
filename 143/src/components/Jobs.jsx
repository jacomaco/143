import Job from './Job';

// Ta emot isLoading som en prop
export default function Jobs({ jobsToShow, isLoading }) {
  return (
    <section id="assignments" className="scroll-mt-24 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Ändra till text-white för att det ska synas mot den mörka rymden */}
          <h2 className="text-3xl font-bold text-white pb-3 inline-block">
            Lediga uppdrag
          </h2>
          {/* Ändra till text-slate-300 för en ljusare grå färg */}
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Här hittar du våra aktuella uppdrag. Vi letar alltid efter talanger som vill vara med och göra skillnad.
          </p>
        </div>

        {/* HÄR LÖSER VI LAYOUT SHIFT (CLS) */}
        {isLoading ? (
          // VISAS MEDAN VI VÄNTAR PÅ DATABASEN: 3 st pulserande skeletons
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                /* ÄNDRAT: Samma mörka glassmorphism-stil som de riktiga korten, fast pulserande! */
                className="h-[320px] bg-slate-900/60 backdrop-blur-md animate-pulse rounded-xl border border-slate-700/50 shadow-xl"
              ></div>
            ))}
          </div>
        ) : jobsToShow.length > 0 ? (
          // VISAS NÄR DATAN ÄR HÄMTAD: De riktiga korten
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jobsToShow.map(job => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        ) : (
          // FALLBACK OM DATABASEN ÄR TOM PÅ JOBB
          <div className="text-center text-slate-300 py-10 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-xl">
            Just nu har vi inga lediga uppdrag, men skicka gärna en spontanansökan nedan!
          </div>
        )}

      </div>
    </section>
  )
}
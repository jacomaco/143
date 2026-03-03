const Job = ({ job }) => {
  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
      
      {/* Titel och Företag */}
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-800">{job.titel}</h3>
        <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">
          {job.foretag}
        </p>
      </div>

      {/* Metadata (Plats, Tid, Lön, Datum) */}
      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
        <div className="flex items-center">
          <span className="mr-1">📍</span> {job.plats}
        </div>
        <div className="flex items-center">
          <span className="mr-1">🕒</span> {job.varaktighet}
        </div>
        <div className="flex items-center">
          <span className="mr-1">💰</span> {job.timtaxa}/h
        </div>
        
        {/* NYTT: Sista ansökningsdag */}
        {job.sista_ansokningsdag && (
          <div className="flex items-center text-red-500 font-medium">
            <span className="mr-1">📅</span> Sista ansökan: {new Date(job.sista_ansokningsdag).toLocaleDateString('sv-SE')}
          </div>
        )}
      </div>

      {/* Beskrivning */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {job.beskrivning}
      </p>

      {/* Knapp */}
      <a
        href={`#job-${job.id}`}
        className="mt-auto self-start inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition delay-150 duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1 hover:scale-110"
      >
        Ansök nu
      </a>
    </div>
  );
};

export default Job;
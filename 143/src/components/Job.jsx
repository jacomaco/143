const Job = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
      {/* Titel och Företag */}
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-800">{job.titel}</h3>
        <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">
          {job.Företag}
        </p>
      </div>

      {/* Metadata (Plats, Tid, Lön) */}
      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
        <div className="flex items-center">
          <span className="mr-1">📍</span> {job.plats}
        </div>
        <div className="flex items-center">
          <span className="mr-1">🕒</span> {job.varaktighet}
        </div>
        <div className="flex items-center">
          <span className="mr-1">💰</span> {job.Timtaxa}/h
        </div>
      </div>

      {/* Beskrivning */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {job.Beskrivning}
      </p>

      {/* Knapp */}
      <a
        href={`#job-${job.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Ansök nu
      </a>
    </div>
  );
};

export default Job


/*
const Job = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend-utvecklare</h3>
      <p className="text-gray-600 mb-4">Vi söker en erfaren frontend-utvecklare för att arbeta med våra kunders webbapplikationer.</p>
      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Läs mer</a>
    </div>
  )
}

export default Job
*/
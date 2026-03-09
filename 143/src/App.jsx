import { useEffect, useState } from 'react';
import Header from './components/Header';
import ValueProposition from './components/ValueProposition';
import Jobs from './components/Jobs';
import jobService from './services/jobs';

export default function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService.getAll().then(initialJobs => { // refactor to use async
      // Filtrera bort 'kandidater' från objektet innan det sparas i state
      const sanitizedJobs = initialJobs.map(({ kandidater, ...rest }) => rest)
      setJobs(sanitizedJobs)
      console.log(sanitizedJobs);
    })
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <ValueProposition />
        <Jobs jobsToShow={jobs} />
      </main>
    </div>
  )
}

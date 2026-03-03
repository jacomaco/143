import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Jobs from './components/Jobs';
import jobService from './services/jobs';

export default function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService.getAll().then(initialJobs => {
      setJobs(initialJobs)
      console.log(initialJobs);

    })
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <About />
        <Jobs jobsToShow={jobs} />
      </main>
    </div>
  )
}


import { useEffect, useState } from 'react';
import Header from './components/Header';
import Jobs from './components/Jobs';
import jobService from './services/jobs';

export default function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService.getAll().then(initialJobs => {
      setJobs(initialJobs)
      console.log(initialJobs);
      
    })
  },[])
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Jobs jobsToShow={jobs}/>
    </div>
  )
}


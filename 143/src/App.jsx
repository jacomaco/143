import { useEffect, useState } from 'react';
import Header from './components/Header';
import ValueProposition from './components/ValueProposition';
import Jobs from './components/Jobs';
import ContactForm from './components/ContactForm';
import jobService from './services/jobs';

export default function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService.getAll().then(initialJobs => { 
      const sanitizedJobs = initialJobs.map(({ kandidater, ...rest }) => rest)
      setJobs(sanitizedJobs)
    })
  }, [])
  
  return (
    <div className="min-h-screen bg-dot-pattern relative">
      
      {/* HÄR ÄR ÄNDRINGEN: Bytte "absolute" mot "fixed" på alla tre färgbollar */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed top-[20%] right-[-5%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-10 flex-grow w-full">
          <ValueProposition />
          <Jobs jobsToShow={jobs} />
          <ContactForm />
        </main>
      </div>
    </div>
  )
}
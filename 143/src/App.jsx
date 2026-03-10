import { useEffect, useState } from 'react';
import Header from './components/Header';
import ValueProposition from './components/ValueProposition';
import Jobs from './components/Jobs';
import ContactForm from './components/ContactForm';
import Background from './components/Background';
import Footer from './components/Footer'; // 1. IMPORTERA FOOTER
import jobService from './services/jobs';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    jobService.getAll().then(initialJobs => { 
      const sanitizedJobs = initialJobs.map(({ kandidater, ...rest }) => rest)
      setJobs(sanitizedJobs)
      setIsLoading(false);
    })
  }, [])
  
  return (
    <div className="min-h-[100svh] bg-dot-pattern relative">
      
      <Background />

      <div className="relative z-10 flex flex-col min-h-[100svh]">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-10 flex-grow w-full">
          <ValueProposition />
          <Jobs jobsToShow={jobs} isLoading={isLoading} />
          <ContactForm />
        </main>

        {/* 2. LÄGG TILL FOOTER HÄR! */}
        <Footer />
        
      </div>
    </div>
  )
}
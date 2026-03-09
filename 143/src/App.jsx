import { useEffect, useState } from 'react';
import Header from './components/Header';
import ValueProposition from './components/ValueProposition';
import Jobs from './components/Jobs';
import ContactForm from './components/ContactForm';
import jobService from './services/jobs';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 1. Nytt state för laddning!

  useEffect(() => {
    jobService.getAll().then(initialJobs => { 
      const sanitizedJobs = initialJobs.map(({ kandidater, ...rest }) => rest)
      setJobs(sanitizedJobs)
      setIsLoading(false); // 2. När jobben är hämtade, sluta ladda
    })
  }, [])
  
  return (
    <div className="min-h-screen bg-dot-pattern relative">
      
      {/* Bakgrunds-bollar */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-[20%] right-[-5%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Stor SVG i bakgrunden */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40">
        <svg className="w-full max-w-5xl h-auto" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="text-slate-300" stroke="currentColor" fill="none">
            <ellipse cx="400" cy="200" rx="280" ry="80" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.4" />
            <ellipse cx="400" cy="200" rx="180" ry="50" strokeWidth="1.5" strokeOpacity="0.5" />
            <ellipse cx="400" cy="200" rx="90" ry="25" strokeWidth="2" strokeOpacity="0.6" />
            <line x1="120" y1="200" x2="310" y2="200" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="680" y1="200" x2="490" y2="200" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="200" y1="140" x2="350" y2="180" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="600" y1="260" x2="450" y2="220" strokeWidth="1" strokeOpacity="0.5" />
          </g>
          <g className="text-slate-400" fill="currentColor">
            <circle cx="120" cy="200" r="4" fillOpacity="0.6" />
            <circle cx="200" cy="140" r="3" fillOpacity="0.5" />
            <circle cx="250" cy="240" r="4.5" fillOpacity="0.7" />
            <circle cx="600" cy="260" r="3" fillOpacity="0.5" />
            <circle cx="550" cy="155" r="4" fillOpacity="0.6" />
            <circle cx="680" cy="200" r="3.5" fillOpacity="0.4" />
          </g>
          <g className="text-blue-500">
            <path d="M400 50 Q400 190 550 200 Q400 210 400 350 Q400 210 250 200 Q400 190 400 50 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M400 100 Q400 195 500 200 Q400 205 400 300 Q400 205 300 200 Q400 195 400 100 Z" fill="currentColor" fillOpacity="0.15" />
            <path d="M400 130 Q400 195 470 200 Q400 205 400 270 Q400 205 330 200 Q400 195 400 130 Z" fill="currentColor" />
            <circle cx="400" cy="200" r="3" fill="white" />
            <line x1="400" y1="100" x2="400" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="400" y1="300" x2="400" y2="340" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="300" y1="200" x2="260" y2="200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="500" y1="200" x2="540" y2="200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-10 flex-grow w-full">
          <ValueProposition />
          
          {/* 3. Skicka med isLoading-variabeln till Jobs */}
          <Jobs jobsToShow={jobs} isLoading={isLoading} />
          
          <ContactForm />
        </main>
      </div>
    </div>
  )
}
const ValueProposition = () => {
  return (
    <section id="services" className="bg-white shadow-md rounded-lg p-8 mb-10 border border-slate-200 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Redo att förstärka IT-teamet? Hitta er nästa stjärna med oss idag!
        </h2>

        <p className="text-slate-600 leading-relaxed text-left mb-10">
          Vi är experter på att matcha rätt IT-kompetens med rätt företag.
          Oavsett om ni behöver en flexibel resurs för ett kritiskt projekt eller en nyckelspelare för en fast anställning, säkerställer vi att ni får tillgång till marknadens vassaste IT-talanger.
          Som specialister på konsultmäkleri och rekrytering inom IT har vi byggt upp ett gediget nätverk och kompetens kring marknadens mest eftertraktade talanger.
          Vi tar hand om hela matchningsprocessen – från djupgående behovsanalys till kvalitetssäkring och signerat avtal. Genom att anlita oss får ni en trygg partner som garanterar att ni får rätt person, på rätt plats och i rätt tid.
        </p>

        {/* --- ABSTRAKT STJÄRNA (TALANG) SVG --- */}
        <div className="relative w-full h-64 sm:h-80 mt-8 border-t border-slate-200 pt-10 flex items-center justify-center">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 800 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. BAKGRUND: Sökprocessen & Nätverket (Cirklar och noder) */}
            <g className="text-gray-300" stroke="currentColor" fill="none">
              {/* Omloppsbanor som representerar "radarn" eller nätverket */}
              <ellipse cx="400" cy="200" rx="280" ry="80" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.4" />
              <ellipse cx="400" cy="200" rx="180" ry="50" strokeWidth="1.5" strokeOpacity="0.5" />
              <ellipse cx="400" cy="200" rx="90" ry="25" strokeWidth="2" strokeOpacity="0.6" />
              
              {/* Linjer som dras in mot mitten (matchningsprocessen) */}
              <line x1="120" y1="200" x2="310" y2="200" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="680" y1="200" x2="490" y2="200" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="200" y1="140" x2="350" y2="180" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="600" y1="260" x2="450" y2="220" strokeWidth="1" strokeOpacity="0.5" />
            </g>

            <g className="text-gray-400" fill="currentColor">
              {/* Mindre "kandidat"-noder i nätverket som inte är stjärnan */}
              <circle cx="120" cy="200" r="4" fillOpacity="0.6" />
              <circle cx="200" cy="140" r="3" fillOpacity="0.5" />
              <circle cx="250" cy="240" r="4.5" fillOpacity="0.7" />
              <circle cx="600" cy="260" r="3" fillOpacity="0.5" />
              <circle cx="550" cy="155" r="4" fillOpacity="0.6" />
              <circle cx="680" cy="200" r="3.5" fillOpacity="0.4" />
            </g>

            {/* 2. FOKUS: Den lysande tech-stjärnan (Rätt kandidat) */}
            <g className="text-blue-400">
              {/* Glöd-effekt (Större, transparenta stjärnor bakom) */}
              <path 
                d="M400 50 Q400 190 550 200 Q400 210 400 350 Q400 210 250 200 Q400 190 400 50 Z" 
                fill="currentColor" 
                fillOpacity="0.05" 
              />
              <path 
                d="M400 100 Q400 195 500 200 Q400 205 400 300 Q400 205 300 200 Q400 195 400 100 Z" 
                fill="currentColor" 
                fillOpacity="0.15" 
              />
              
              {/* Själva kärn-stjärnan (Solid och skarp) */}
              <path 
                d="M400 130 Q400 195 470 200 Q400 205 400 270 Q400 205 330 200 Q400 195 400 130 Z" 
                fill="currentColor" 
              />
              
              {/* En liten vit mittpunkt för extra "bling/ljus"-känsla */}
              <circle cx="400" cy="200" r="3" fill="white" />
              
              {/* Abstrakta "strålar" ut från stjärnan */}
              <line x1="400" y1="100" x2="400" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
              <line x1="400" y1="300" x2="400" y2="340" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
              <line x1="300" y1="200" x2="260" y2="200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
              <line x1="500" y1="200" x2="540" y2="200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
            </g>
          </svg>
        </div>
        {/* --- SLUT SVG --- */}

      </div>
    </section>
  );
};

export default ValueProposition;
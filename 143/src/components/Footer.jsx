const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Huvudgrid för footern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Kolumn 1: Varumärke & Pitch */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4 inline-flex">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" />
                <circle cx="12" cy="12" r="1.5" fill="white" />
              </svg>
              <span className="text-white">Match</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Din trygga partner för IT-konsulter och rekrytering. Vi matchar marknadens vassaste tech-talanger med rätt företag och spännande uppdrag.
            </p>
          </div>

          {/* Kolumn 2: Snabblänkar */}
          <div>
            <h3 className="text-white font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Våra tjänster</a></li>
              <li><a href="#assignments" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Lediga uppdrag</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Kontakta oss</a></li>
            </ul>
          </div>

          {/* Kolumn 3: Legal / GDPR */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Trygghet</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Integritetspolicy (GDPR)</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie-policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Allmänna villkor</a></li>
            </ul>
          </div>

          {/* Kolumn 4: Kontakt & Socialt */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📍</span> Stockholm, Sverige
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✉️</span>
                <a href="mailto:hej@starmatch.se" className="hover:text-blue-400 transition-colors">hej@starmatch.se</a>
              </li>
              <li className="mt-4 pt-2">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors" title="Följ oss på LinkedIn">
                  {/* LinkedIn Ikon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottenrad med Copyright */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} Star Match AB. Alla rättigheter reserverade.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Utvecklad med <span className="text-blue-500">&hearts;</span> i Sverige
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
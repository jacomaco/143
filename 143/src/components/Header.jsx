import { useState } from "react";

export default function Header() {
  // State för att hålla koll på om mobilmenyn är öppen eller stängd
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Tjänster", href: "#services" },
    { name: "Lediga uppdrag", href: "#assignments" },
    { name: "Kontakta oss", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logotyp: Ikon (Star) + Text (Match) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight transition-transform hover:scale-105">
              {/* Enklare variant av stjärnan optimerad för små storlekar */}
              <svg 
                className="w-8 h-8 text-blue-500" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Själva stjärnformen skapad med Bezier-kurvor för den inåtböjda tech-känslan */}
                <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" />
                {/* Den lilla vita pricken i mitten för extra glans */}
                <circle cx="12" cy="12" r="1.5" fill="white" />
              </svg>
              {/* Texten "Match" i mörkblå/svart */}
              <span className="text-slate-900">Match</span>
            </a>
          </div>

          {/* Desktop-meny */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Hamburgermeny för mobil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-gray-900 focus:outline-none p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Öppna meny</span>
              {/* Ikon som byts beroende på om menyn är öppen (kryss) eller stängd (hamburgare) */}
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown-meny för mobil */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // Stänger menyn när man klickar på en länk
                className="text-slate-600 hover:text-blue-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
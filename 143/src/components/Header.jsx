import { useState } from "react";

export default function Header() {
  // State för att hålla koll på om mobilmenyn är öppen eller stängd
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Tjänster", href: "#services" },
    { name: "Lediga uppdrag", href: "#assignments" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logotyp */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800 tracking-tight">
              143
            </a>
          </div>

          {/* Desktop-meny */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Hamburgermeny för mobil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
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
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
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
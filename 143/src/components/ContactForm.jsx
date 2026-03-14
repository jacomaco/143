import { useState } from 'react';
import messageService from '../services/messages';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    telefon: '',
    meddelande: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Skicka datan till vårt backend-API
      await messageService.create(formData);
      
      alert("Tack för ditt meddelande! Vi återkommer till dig så snart vi kan.");
      setFormData({ namn: '', email: '', telefon: '', meddelande: '' });
    } catch (error) {
      console.error("Kunde inte skicka meddelandet:", error);
      alert("Något gick fel vid inskickandet. Försök igen senare.");
    }
  };

  return (
    // ÄNDRAT: Mörk frostat glas-bakgrund som matchar ValueProposition
    <section id="contact" className="scroll-mt-24 bg-slate-900/60 backdrop-blur-md shadow-xl rounded-xl p-8 border border-slate-700/50">
      
      <div className="max-w-3xl mx-auto">
        
        {/* Rubrik */}
        <div className="text-center mb-8">
          {/* ÄNDRAT: text-white */}
          <h2 className="text-3xl font-bold text-white pb-3 inline-block">
            Kontakta oss
          </h2>
          {/* ÄNDRAT: text-slate-300 */}
          <p className="text-slate-300 mt-4">
            Har du frågor kring våra tjänster eller vill du diskutera ett framtida samarbete? 
            Tveka inte att höra av dig via formuläret nedan.
          </p>
        </div>

        {/* Formulär */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              {/* ÄNDRAT: text-slate-300 på labels */}
              <label className="block text-sm font-semibold text-slate-300 mb-1">Namn *</label>
              <input
                type="text"
                required
                // ÄNDRAT: Mörk bakgrund på inputfälten (bg-slate-800/80), vit text och ljusgrå border
                className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                value={formData.namn}
                onChange={(e) => setFormData({...formData, namn: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">E-post *</label>
              <input
                type="email"
                required
                className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Telefonnummer *</label>
            <input
              type="tel"
              required
              className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              value={formData.telefon}
              onChange={(e) => setFormData({...formData, telefon: e.target.value})}
              placeholder="Ditt telefonnummer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Meddelande *</label>
            <textarea
              required
              rows="5"
              className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
              value={formData.meddelande}
              onChange={(e) => setFormData({...formData, meddelande: e.target.value})}
              placeholder="Hur kan vi hjälpa dig?"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
            >
              Skicka meddelande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
import { useState, useEffect } from 'react';
import jobService from '../services/jobs';

const Job = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    telefon: '',
    linkedin: '',
    cvFile: null,
    meddelande: ''
  });

  // NYTT: Hanterar mobilens "Tillbaka"-knapp via History API
  useEffect(() => {
    const handlePopState = (e) => {
      // Om användaren klickar tillbaka, stäng modalen
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      // Lägg till ett nytt "state" i historiken när modalen öppnas
      window.history.pushState({ modalOpen: true }, '');
      // Lyssna på om användaren klickar bakåt
      window.addEventListener('popstate', handlePopState);
    }

    // Cleanup: ta bort lyssnaren när komponenten uppdateras eller stängs
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModalOpen]);

  // NY HJÄLPFUNKTION: För att stänga via knapp/kryss
  const closeModal = () => {
    setIsModalOpen(false);
    // Om vi stänger via X-knappen, gå bakåt i historiken automatiskt
    // så att vi inte lämnar skräp-states kvar.
    if (window.history.state && window.history.state.modalOpen) {
      window.history.back();
    }
  };

  const handleApply = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append('namn', formData.namn);
    dataToSend.append('email', formData.email);
    dataToSend.append('telefon', formData.telefon);
    dataToSend.append('linkedin', formData.linkedin);
    dataToSend.append('meddelande', formData.meddelande);

    if (formData.cvFile) {
      dataToSend.append('cvFile', formData.cvFile);
    }

    try {
      await jobService.apply(job.id, dataToSend);
      alert("Tack för din ansökan! Vi har mottagit dina uppgifter.");

      closeModal(); // Använd den nya stäng-funktionen

      setFormData({
        namn: '',
        email: '',
        telefon: '',
        linkedin: '',
        cvFile: null,
        meddelande: ''
      });
    } catch (error) {
      console.error("Kunde inte skicka ansökan:", error);
      alert("Något gick fel vid inskickandet. Försök igen senare.");
    }
  };

  return (
    <>
      {/* --- KORTET PÅ HUVUDSIDAN --- */}
      <div className="flex flex-col h-full bg-slate-900/60 backdrop-blur-md shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow border border-slate-700/50">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white">{job.titel}</h3>
          <p className="text-blue-400 font-medium text-sm uppercase tracking-wide">
            {job.foretag}
          </p>
        </div>

        {/* --- METADATA (Ikoner) I KORTET --- */}
        <div className="flex flex-wrap gap-y-3 gap-x-5 text-sm text-slate-400 mb-4 border-b border-slate-700/50 pb-4">
          <div className="flex items-center text-slate-300">
            <svg className="w-4 h-4 mr-1.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            {job.plats}
          </div>
          {/* Ny ikon och text för Omfattning */}
          <div className="flex items-center text-slate-300">
            <svg className="w-4 h-4 mr-1.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            {job.omfattning || '100%'} {/* Ta bort "|| '100%'" när databases är uppdaterad med ny data*/}
          </div>
          <div className="flex items-center text-slate-300">
            <svg className="w-4 h-4 mr-1.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {job.varaktighet}
          </div>
          <div className="flex items-center text-slate-300">
            <svg className="w-4 h-4 mr-1.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {job.timtaxa}/h
          </div>
          {job.sista_ansokningsdag && (
            <div className="flex items-center text-red-400 font-medium">
              <svg className="w-4 h-4 mr-1.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Sista ansökan: {new Date(job.sista_ansokningsdag).toLocaleDateString('sv-SE')}
            </div>
          )}
        </div>

        <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
          {job.kort_beskrivning}
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-auto self-start inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition delay-150 duration-300 ease-in-out hover:bg-blue-500 hover:-translate-y-1 hover:scale-110 cursor-pointer shadow-md shadow-blue-900/20"
        >
          Läs mer & Ansök
        </button>
      </div>

      {/* --- MODALEN --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm cursor-pointer animate-fade-in"
          onClick={closeModal} // Ändrat från setIsModalOpen(false)
        >
          <div
            className="bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] relative flex flex-col overflow-hidden cursor-auto animate-slide-up-fade border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900/95 backdrop-blur border-b border-slate-700/50 p-6 flex justify-between items-start shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white">{job.titel}</h2>
                <p className="text-blue-400 font-medium text-sm uppercase tracking-wide mt-1">
                  {job.foretag}
                </p>
              </div>
              <button
                onClick={closeModal} // Ändrat från setIsModalOpen(false)
                className="text-slate-400 hover:text-white text-3xl font-bold leading-none p-2 cursor-pointer transition-colors"
                title="Stäng"
              >
                &times;
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="flex flex-wrap gap-y-4 gap-x-8 text-sm text-slate-300 mb-8 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {job.plats}
                </div>
                {/* Ny ikon och text för Omfattning */}
                <div className="flex items-center text-slate-300">
                  <svg className="w-4 h-4 mr-1.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {job.omfattning || '100%'} {/* Ta bort "|| '100%'" när databases är uppdaterad med ny data*/}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {job.varaktighet}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {job.timtaxa}/h
                </div>
                {job.sista_ansokningsdag && (
                  <div className="flex items-center text-red-400 font-bold">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    Sista ansökan: {new Date(job.sista_ansokningsdag).toLocaleDateString('sv-SE')}
                  </div>
                )}
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 pb-2 inline-block">Om uppdraget</h3>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                  {job.beskrivning}
                </p>
              </div>

              <div className="border-t border-slate-700/50 pt-8 mt-4">
                <h3 className="text-xl font-bold text-white mb-6">Är du rätt person? Ansök här!</h3>
                <form onSubmit={handleApply} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1">Ditt Namn *</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.namn}
                        onChange={(e) => setFormData({ ...formData, namn: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1">Din E-post *</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1">Telefonnummer</label>
                      <input
                        type="tel"
                        className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        placeholder="Valfritt"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1">LinkedIn URL</label>
                      <input
                        type="url"
                        className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700/50">
                    <label className="block text-sm font-bold text-slate-300 mb-3">CV / Meritförteckning (PDF eller Word) *</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) => setFormData({ ...formData, cvFile: e.target.files[0] })}
                      className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-900/30 file:text-blue-400 hover:file:bg-blue-800/50 transition-colors cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-1">Övrigt meddelande</label>
                    <textarea
                      rows="4"
                      className="w-full bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                      value={formData.meddelande}
                      onChange={(e) => setFormData({ ...formData, meddelande: e.target.value })}
                      placeholder="Berätta kort varför du är rätt för uppdraget (valfritt)."
                    ></textarea>
                  </div>

                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeModal} // Ändrat från setIsModalOpen(false)
                      className="px-5 py-2 text-slate-400 hover:text-white font-medium rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Avbryt
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg shadow-blue-900/20 cursor-pointer"
                    >
                      Skicka ansökan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
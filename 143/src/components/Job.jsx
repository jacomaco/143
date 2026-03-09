import { useState } from 'react';
import jobService from '../services/jobs';

const Job = ({ job }) => {
  // State för att hålla koll på om modalen är öppen eller stängd
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State för kontaktformuläret
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    telefon: '',
    linkedin: '',
    cvFile: null,
    meddelande: ''
  });

  // Funktion som körs när formuläret skickas in
  // Funktion som körs när formuläret skickas in
  const handleApply = async (e) => {
    e.preventDefault();

    // Skapa ett FormData-objekt för att kunna skicka filer
    const dataToSend = new FormData();
    dataToSend.append('namn', formData.namn);

    // HÄR ÄR ÄNDRINGEN: Ändra nyckeln från 'epost' till 'email' så backenden förstår
    dataToSend.append('email', formData.email);

    dataToSend.append('telefon', formData.telefon);
    dataToSend.append('linkedin', formData.linkedin);
    dataToSend.append('meddelande', formData.meddelande);

    if (formData.cvFile) {
      dataToSend.append('cvFile', formData.cvFile);
    }

    try {
      await jobService.apply(job.id, dataToSend); // Anropa backend
      alert("Tack för din ansökan! Vi har mottagit dina uppgifter.");
      setIsModalOpen(false);
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
      <div className="flex flex-col h-full bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900">{job.titel}</h3>
          <p className="text-blue-500 font-medium text-sm uppercase tracking-wide">
            {job.foretag}
          </p>
        </div>

        <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
          <div className="flex items-center"><span className="mr-1">📍</span> {job.plats}</div>
          <div className="flex items-center"><span className="mr-1">🕒</span> {job.varaktighet}</div>
          <div className="flex items-center"><span className="mr-1">💰</span> {job.timtaxa}/h</div>

          {job.sista_ansokningsdag && (
            <div className="flex items-center text-red-500 font-medium">
              <span className="mr-1">📅</span> Sista ansökan: {new Date(job.sista_ansokningsdag).toLocaleDateString('sv-SE')}
            </div>
          )}
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
          {job.kort_beskrivning}
        </p>

        {/* Ändrade knappen från <a> till <button> och lade till onClick */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-auto self-start inline-block bg-blue-500 text-white px-4 py-2 rounded-md font-medium transition delay-150 duration-300 ease-in-out hover:bg-blue-700 hover:-translate-y-1 hover:scale-110 cursor-pointer"
        >
          Läs mer & Ansök
        </button>
      </div>

      {/* --- MODALEN (Visas bara om isModalOpen är true) --- */}
      {isModalOpen && (
        <div
          /* LADE TILL: animate-fade-in 
             Eftersom denna div redan har bg-black/50 och backdrop-blur-sm, 
             gör opacity-animationen att BÅDE färgen och bluren tonas in snyggt! */
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm cursor-pointer animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >

          <div
            /* LADE TILL: animate-slide-up-fade (och tog bort din gamla animate-fade-in-up) */
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] relative flex flex-col overflow-hidden cursor-auto animate-slide-up-fade"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="bg-white border-b border-gray-100 p-6 flex justify-between items-start shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{job.titel}</h2>
                <p className="text-blue-500 font-medium text-sm uppercase tracking-wide mt-1">
                  {job.foretag}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-slate-900 text-3xl font-bold leading-none p-2 cursor-pointer"
                title="Stäng"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">

              {/* Extra tydlig metadata i rutan */}
              <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-gray-700 mb-8 bg-gray-50 p-5 rounded-lg border border-gray-100">
                <div className="flex items-center"><span className="mr-2 text-lg">📍</span> {job.plats}</div>
                <div className="flex items-center"><span className="mr-2 text-lg">🕒</span> {job.varaktighet}</div>
                <div className="flex items-center"><span className="mr-2 text-lg">💰</span> {job.timtaxa}/h</div>
                {job.sista_ansokningsdag && (
                  <div className="flex items-center text-red-500 font-bold">
                    <span className="mr-2 text-lg">📅</span> Sista ansökan: {new Date(job.sista_ansokningsdag).toLocaleDateString('sv-SE')}
                  </div>
                )}
              </div>

              {/* Arbetsbeskrivning */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-blue-400 pb-2 inline-block">Om uppdraget</h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {job.beskrivning}
                </p>
              </div>

              {/* Kontaktformulär */}
              <div className="border-t-2 border-gray-100 pt-8 mt-4">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Är du rätt person? Ansök här!</h3>
                <form onSubmit={handleApply} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Ditt Namn *</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.namn}
                        onChange={(e) => setFormData({ ...formData, namn: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Din E-post *</label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Telefonnummer</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        placeholder="Valfritt"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">LinkedIn URL</label>
                      <input
                        type="url"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                  </div>

                  {/* CV Sektion */}
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <label className="block text-sm font-bold text-gray-700 mb-3">CV / Meritförteckning (PDF eller Word) *</label>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) => setFormData({ ...formData, cvFile: e.target.files[0] })}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Övrigt meddelande</label>
                    <textarea
                      rows="4"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                      value={formData.meddelande}
                      onChange={(e) => setFormData({ ...formData, meddelande: e.target.value })}
                      placeholder="Berätta kort varför du är rätt för uppdraget (valfritt)."
                    ></textarea>
                  </div>

                  {/* Form knappar */}
                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2 text-slate-600 hover:text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Avbryt
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg cursor-pointer"
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
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    telefon: '',
    meddelande: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulär skickat:", formData);
    alert("Tack för ditt meddelande! Vi återkommer till dig så snart vi kan.");
    setFormData({ namn: '', email: '', telefon: '', meddelande: '' });
  };

  return (
    // HÄR ÄR ÄNDRINGEN: Bakgrund, skugga, rundade hörn och border ligger nu på yttersta sektionen, precis som i din ValueProposition!
    <section id="contact" className="bg-white shadow-md rounded-lg p-8 mb-10 border border-gray-100">
      
      {/* Formuläret och texten begränsas till max-w-3xl och centreras för att vara lättläst */}
      <div className="max-w-3xl mx-auto">
        
        {/* Rubrik */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2 inline-block">
            Kontakta oss
          </h2>
          <p className="text-gray-500 mt-4">
            Har du frågor kring våra tjänster eller vill du diskutera ett framtida samarbete? 
            Tveka inte att höra av dig via formuläret nedan.
          </p>
        </div>

        {/* Formulär */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Namn *</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50/50"
                value={formData.namn}
                onChange={(e) => setFormData({...formData, namn: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">E-post *</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50/50"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Telefonnummer</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50/50"
              value={formData.telefon}
              onChange={(e) => setFormData({...formData, telefon: e.target.value})}
              placeholder="Valfritt"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Meddelande *</label>
            <textarea
              required
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50/50"
              value={formData.meddelande}
              onChange={(e) => setFormData({...formData, meddelande: e.target.value})}
              placeholder="Hur kan vi hjälpa dig?"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
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

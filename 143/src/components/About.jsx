const About = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8 mb-10 border border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Redo att förstärka IT-teamet? Hitta er nästa stjärna med oss idag!
        </h2>

        {/* <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div> */}

        <p className="text-gray-600 leading-relaxed text-left mb-6">
          Vi är experter på att matcha rätt IT-kompetens med rätt företag.
          Oavsett om ni behöver en flexibel resurs för ett kritiskt projekt eller en nyckelspelare för en fast anställning, säkerställer vi att ni får tillgång till marknadens vassaste IT-talanger.
          Som specialister på konsultmäkleri och rekrytering inom IT har vi byggt upp ett gediget nätverk och kompetens kring marknadens mest eftertraktade talanger.
          Vi tar hand om hela matchningsprocessen – från djupgående behovsanalys till kvalitetssäkring och signerat avtal. Genom att anlita oss får ni en trygg partner som garanterar att ni får rätt person, på rätt plats och i rätt tid.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8 border-t border-gray-100 pt-8">
          <div>
            <div className="text-4xl mb-2">🚀</div>
            <h4 className="font-bold text-gray-800">Innovation</h4>
            <p className="text-sm text-gray-500 mt-1">Vi vågar testa nya vägar och modern teknik.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <h4 className="font-bold text-gray-800">Gemenskap</h4>
            <p className="text-sm text-gray-500 mt-1">Vi stöttar varandra och har roligt på jobbet.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🌱</div>
            <h4 className="font-bold text-gray-800">Utveckling</h4>
            <p className="text-sm text-gray-500 mt-1">Kontinuerligt lärande är en del av vår DNA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
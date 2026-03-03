const About = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8 mb-10 border border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Vilka är vi på företaget?
        </h2>
        
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Vi är ett passionerat team som brinner för att skapa innovativa digitala lösningar. 
          Vår kultur bygger på öppenhet, samarbete och en stark tro på att vi når bäst resultat tillsammans. 
          Hos oss får du chansen att växa i din roll, arbeta med spännande projekt och göra verklig skillnad.
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
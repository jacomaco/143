const ValueProposition = () => {
  return (
    <section id="services" className="scroll-mt-24 bg-slate-900/60 backdrop-blur-md shadow-xl rounded-xl p-8 mb-10 border border-slate-700/50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Ändrad till text-white och la till ett frågetecken på slutet av första meningen */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Redo att förstärka IT-teamet?<br /> Hitta er nästa stjärna med oss idag!
        </h1>

        {/* Ändrad till text-slate-300 för hög kontrast mot den mörka bakgrunden */}
        <p className="text-slate-300 leading-relaxed text-left">
          Vi är experter på att matcha rätt IT-kompetens med rätt företag.
          Oavsett om ni behöver en flexibel resurs för ett kritiskt projekt eller en nyckelspelare för en fast anställning, säkerställer vi att ni får tillgång till marknadens vassaste IT-talanger.
          Som specialister på konsultmäkleri och rekrytering inom IT har vi byggt upp ett gediget nätverk och kompetens kring marknadens mest eftertraktade talanger.
          Vi tar hand om hela matchningsprocessen – från djupgående behovsanalys till kvalitetssäkring och signerat avtal. Genom att anlita oss får ni en trygg partner som garanterar att ni får rätt person, på rätt plats och i rätt tid.
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;
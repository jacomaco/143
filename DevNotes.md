# Star Match (tidigare 143)
**Live URL**: https://one43-1s7b.onrender.com/

## 🎨 UI/UX & Design (Frontend)
- [x] Uppdatera designen till mörkt "Glassmorphism"-rymdtema.
- [x] Skapa en snygg Footer (Sidfot).
- [x] Navbar-länk omdöpt till "Om oss" och fixat obligatoriska telefonnummer-fält.
- [x] Lagt till `omfattning` på jobbkorten (t.ex. heltid/deltid).
- [x] Lägg till anpassade mörka scrollbars (custom scrollbar).
- [ ] Implementera `shadcn/ui` för enhetliga och snygga frontend-komponenter.
- [ ] Hitta och lägg till en passande modern font för sidan (Google Fonts).
- [ ] Implementera en knapp (Light/Dark mode toggle), t.ex. nere vid footern.
- [ ] Lägg till en nedräkning på jobbkorten (visar dagar kvar till sista ansökningsdag).
- [ ] Bygg ett filtreringssystem för lediga jobb (när shadcn är på plats).
- [ ] Skriv klart slutgiltig copy för "Contact us" och "Services".

## 🏗 Frontend Arkitektur & Refaktorering
- [x] Fixa bugg på mobil (bakgrunds-SVG hoppade).
- [x] Fixa så att modalen stängs snyggt när man använder "Tillbaka"-knappen på mobilen (History API).
- [x] Koppla kontaktformulär och ansökningsformulär till backend-API.
- [ ] Sätt upp *React Query* för effektivare data-fetching och loading-states (istället för bara useEffect).
- [ ] Datavalidering med *Zod* för att strikt validera inmatning innan den skickas till backend.
- [ ] Refaktorera `Job.jsx` – bryt ut modalen och ansökningsformuläret till egna komponenter.
- [ ] Se till att tomma fält (t.ex. saknad `timtaxa`) inte bara visar en ensam ikon i UI:t.

## ⚙️ Backend & API
- [x] Bygg CRUD-funktionalitet för jobb, kandidater och kontaktmeddelanden.
- [x] Dölj `kandidater`-arrayen från den publika GET-routen (`.select('-kandidater')`).
- [ ] Bryt ut `jobsRouter.post('/:id/ansokan', ...)` till en egen controller för renare kod.
- [ ] Sätt upp en riktig e-posttjänst/SMTP (t.ex. SendGrid) kopplad till hej@starmatch.se för automatiserade mail (ex. "Tack för din ansökan").

## 💾 Databas & Filhantering
- [x] Designa databasen (Mongoose-modeller för Jobs, Messages, Kandidater är klara).
- [ ] **KRITISKT:** Byt ut lokal Multer-lagring mot **Google Cloud Storage** (eller AWS S3) för CV-uppladdningar, så att filerna överlever server-omstarter på Render.

## 🔒 Säkerhet & DevOps
- [ ] **KRITISKT:** Implementera Rate Limiting (skydd mot spam/bottar), Helmet (säkra HTTP-headers) och Mongo-Sanitize (skydd mot NoSQL-injections) i `app.js`.
- [ ] Implementera Autentisering (inloggning med JWT, bcrypt) och Auktorisering (roll-rättigheter) för att låsa admin-rutter.
- [ ] Konfigurera MongoDB Atlas IP Whitelist (Option A: Renders IP för prod, Option B: 0.0.0.0/0 för test).
- [ ] Byt ut API-nycklar/DB-lösenord mot nya säkra innan skarp lansering.

## 👑 Admin Panel (Kärnfunktion)
- [ ] Skapa en dold och skyddad React-route (t.ex. `/admin`).
- [ ] Bygg gränssnitt för att hantera **Kontaktmeddelanden** (läsa och markera som besvarade).
- [ ] Bygg gränssnitt för att hantera **Kandidater** (lista ansökningar, visa detaljer, ladda ner CV från molnet).
- [ ] Bygg gränssnitt för att hantera **Jobbannonser** (Skapa nya, Redigera, Ta bort).

## 🧪 Testning & Kvalitetssäkring
- [ ] Skriv enhetstester/integrationstester för API-rutter (ex. `jobsRouter`).
- [ ] Testa hela applikationen i en "staging"-miljö innan den riktiga lanseringen.

## ⚖️ Legal & Business
- [ ] Skriv en GDPR-kompatibel 'Integritetspolicy' (Superviktigt eftersom vi hanterar CV:n och personuppgifter!).
- [ ] Skriv en Cookie-policy / Allmänna villkor för footern & lägg in en cookie-banner.
- [ ] Optimera LinkedIn-profil för att driva trafik och B2B-försäljning.

---

## 📚 Övrigt (Resurser & Idéer)
- **MongoDB Relationer (Kandidater <-> Jobb):** [Läs mer här](https://www.google.com/search?q=can+I+use+relations+in+mongodb)
- **Rollhantering (User vs Admin):** [Läs mer här](https://www.google.com/search?q=how+do+I+differentiate+between+user+and+admin)
- **Designidéer:** Testa eventuellt `text-cyan-400` som accentfärg på specifika ställen.
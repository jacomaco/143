# 143
**Live URL**: https://one43-1s7b.onrender.com/
## TODO

- [ ] Testing: 
    - Write unit/integration tests for jobsRouter.

- [ ] Content: 
    - Contact us
    - Services
    - footer


- [ ] Features: 
    - Create the contact form. (implement frontend backend integration)
    - Build an admin panel for site updates.
    - Look into how files like cv are stored on something like render. Maybe I should use google cloud run to host instead if I can't access the files one the server
    - Implement a light/dark mode toggle for improved UX (perhaps it should be located where the 'Utvecklat med kärlek it Sverige)
    


- [ ] Fixes:
    - Break out this from jobs.js 'jobsRouter.post('/:id/ansokan', upload.single('cvFile'), async (request, response)' into its own controller
    - when ommiting a field like 'tim taxa' make sure  that it does not display just an emoji
    - On mobile when scorlling the big background svg sometimes jumps up or down.

- [ ] Refactor:
    - refactor the job.jsx so that modal and application form is in their separate conponents
    - refactor application form so that it is in it's separeate component

- [ ] UI/UX: 
    - Implement shadcn/ui.
    - Find a suitable font for the page.

- [ ] Add a filtering system for open positions once shadcn is integrated.

- [ ] DevOps/Security: 
    - Configure MongoDB Atlas IP Whitelist:
        - Option A (Production): Add Render's specific outbound IP (found in Render logs/settings).

        - Option B (Testing): Set to 0.0.0.0/0 to allow access from anywhere.
    
    -Change the API keys for new ones before launch just in case.

- [ ] Legal:
    - Implement a GDPR complient 'Privacy Policy'

# Övrigt

- Sätt att implementera relationer mällan kandidater och lediga jobb:
https://www.google.com/search?q=can+I+use+relations+in+mongodb&sca_esv=643cd21dc826a565&sxsrf=ANbL-n4CKfijjRXSjwIrIzNb0CTjKK4d6g%3A1772285324830&fbs=ADc_l-YGrpJMQtvjQ6h14rj-dfIrhDmsR0nDeJo5h1S8qqVcze3gnYWJNz5sHqGXCxeUKqYzJ8LBh08ZeR_MO52knSjhya7m7WavBvXjcKR_G6FiSAPdPfFwnfhbDMqfdb5kgEZLxmCsFc5wqFtuMHfbYqbIZCDna2jdwrGIQ34-wCCMG4Op3vXeJu6hCFld6r8g_3JnC-fK&aep=1&ntc=1&sa=X&ved=2ahUKEwiApuippfySAxWTQVUIHaZkJDEQ2J8OegQIEhAE&biw=1920&bih=1113&dpr=1&mstk=AUtExfAwETfkj9ZjhjOVePINhvruUOe14VLNx98adYP2azkQoedsaC0VhJrRH9oc6q2VpqsDoDuqEllDM5q4HyUU5UYZdXWPEqKB6a8UazoX8bgL7jAqsxpr_fhjUq1e13FIehCYvYhHVnBUUD2zHwUGIhBCwtYtNth1TV4fve0gskQuPzN74eB6Ov7jKfgQ_Ml64rjwdpnoeRGS3IPCPheRztuf0F00jnLccbCwR6y_77RztFV8flAsR3XZOCQz7DlYkzlHcs_GdEP1swVTolAVy-JzKGUojHnjT39ACADNnImCGUYTwQF4g3ONMimd4tr2PyKj6-NQxIb64Q&csuir=1&mtid=le2iaeekMvjiwPAPlbz2uAU&udm=50

- Förslag på hur man kan hantera admin/user roller:
https://www.google.com/search?q=how+do+I+differentiate+between+user+and+admin&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRiPAtIBCTE4MTQ2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwiZ2rruqYiTAxUdHxAIHc0kFDIQ0NsOegQIAxAB&aep=10&ntc=1&mstk=AUtExfD6ySXVHKB2wXp4ifMK4qQMuw_QTf2kBOlO4V6PErnSXbuPb57FubY2S_35gMYAYtxh4jVFI4b-ooOyGTeEGGfh-QyeS6EO_Q0VSUx-u21NxWXyypEc7zYlRwMMH9tQUtijXRk05-qjHaxmyQrGpa-MjzEQ6cR8rCymZws_lKRmmMgIoHRtkTifbvF4LZgz4x5cbWorN1W8EW2i8uQrv7B_5ZXQCyPblULTpKrog4eMGbP61wkEj0vKWO7u8pNQVO11zKfK_hmhXRYXQ8rQ1Oaxo2HpQkheIN9PeG6WQ2RmGbYZGMnFyn2udvBHl-CjP8tHMaKvmO61wg&csuir=1&mtid=9DypacqDOP6swPAPncbRuAo&udm=50

- Testa eventuellt text-cyan-400 som färger

1. Koppla Kontaktformuläret till din Backend (Fullstack-uppgift)
Just nu gör ditt nya ContactForm bara en console.log när man klickar på skicka.

Vad vi kan göra: Vi kan snabbt skapa en ny Mongoose-modell (t.ex. Message) och en POST-route i din Express-backend för att faktiskt spara dessa meddelanden i din databas, precis som vi gjorde med jobbansökningarna. Sedan uppdaterar vi frontendens services/jobs.js (eller skapar en services/messages.js) för att skicka datan dit.

2. Bygg en Footer / Sidfot (Design-uppgift)
Din sida är supersnygg, men den slutar lite plötsligt direkt efter kontaktformuläret.

Vad vi kan göra: Vi kan bygga en stilren Footer.jsx som lägger sig allra längst ner. Den kan innehålla en copyright-text (t.ex. "© 2026 143 IT-Konsult"), länkar till LinkedIn, kanske ett organisationsnummer, och en liten upprepning av er logga. Det "knyter ihop" hela sidan och får den att kännas som en riktig produkt.

3. Börja på Admin-panelen (Större Portfolio-feature)
Tidigare pratade vi om att detta är ett grymt portfolio-projekt. Att kunna ta emot ansökningar är steg 1. Att kunna läsa dem är steg 2.

Vad vi kan göra: Vi kan bygga en ny, dold React-route (t.ex. /admin) som hämtar alla jobb och visar vilka kandidater som har sökt dem. Vi kan börja enkelt med att bara lista datan snyggt, och senare kan man lägga till inloggning för att skydda sidan.
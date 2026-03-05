# 143
**Live URL**: https://one43-1s7b.onrender.com/
## TODO

- [ ] Testing: 
    - Write unit/integration tests for jobsRouter.

- [ ] Content: 
    - Contact us
    - Services


- [ ] Features: 
    - Create the contact form. (implement frontend backend integration)
    - [After the main comonents are created] Add functionality to the navbar so that the page scrols to what is selected. https://hackernoon.com/setting-scroll-position-in-react
    - Add functionality for the 'ansök nu' button. So that when pressed a modal appears an overlays the site displaying more information about the job listing as well as a form for users to show intereset.
    - Build an admin panel for site updates.

- [ ] UI/UX: 
    - Implement shadcn/ui.

- Add a filtering system for open positions once shadcn is integrated.

- [ ] DevOps/Security: 
    - Configure MongoDB Atlas IP Whitelist:
        - Option A (Production): Add Render's specific outbound IP (found in Render logs/settings).

        - Option B (Testing): Set to 0.0.0.0/0 to allow access from anywhere.
    
    - Don't include 'kandidater' in frontend or console log!! (handle the axios)

# Övrigt

- Sätt att implementera relationer mällan kandidater och lediga jobb:
https://www.google.com/search?q=can+I+use+relations+in+mongodb&sca_esv=643cd21dc826a565&sxsrf=ANbL-n4CKfijjRXSjwIrIzNb0CTjKK4d6g%3A1772285324830&fbs=ADc_l-YGrpJMQtvjQ6h14rj-dfIrhDmsR0nDeJo5h1S8qqVcze3gnYWJNz5sHqGXCxeUKqYzJ8LBh08ZeR_MO52knSjhya7m7WavBvXjcKR_G6FiSAPdPfFwnfhbDMqfdb5kgEZLxmCsFc5wqFtuMHfbYqbIZCDna2jdwrGIQ34-wCCMG4Op3vXeJu6hCFld6r8g_3JnC-fK&aep=1&ntc=1&sa=X&ved=2ahUKEwiApuippfySAxWTQVUIHaZkJDEQ2J8OegQIEhAE&biw=1920&bih=1113&dpr=1&mstk=AUtExfAwETfkj9ZjhjOVePINhvruUOe14VLNx98adYP2azkQoedsaC0VhJrRH9oc6q2VpqsDoDuqEllDM5q4HyUU5UYZdXWPEqKB6a8UazoX8bgL7jAqsxpr_fhjUq1e13FIehCYvYhHVnBUUD2zHwUGIhBCwtYtNth1TV4fve0gskQuPzN74eB6Ov7jKfgQ_Ml64rjwdpnoeRGS3IPCPheRztuf0F00jnLccbCwR6y_77RztFV8flAsR3XZOCQz7DlYkzlHcs_GdEP1swVTolAVy-JzKGUojHnjT39ACADNnImCGUYTwQF4g3ONMimd4tr2PyKj6-NQxIb64Q&csuir=1&mtid=le2iaeekMvjiwPAPlbz2uAU&udm=50

- Förslag på hur man kan hantera admin/user roller:
https://www.google.com/search?q=how+do+I+differentiate+between+user+and+admin&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRiPAtIBCTE4MTQ2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwiZ2rruqYiTAxUdHxAIHc0kFDIQ0NsOegQIAxAB&aep=10&ntc=1&mstk=AUtExfD6ySXVHKB2wXp4ifMK4qQMuw_QTf2kBOlO4V6PErnSXbuPb57FubY2S_35gMYAYtxh4jVFI4b-ooOyGTeEGGfh-QyeS6EO_Q0VSUx-u21NxWXyypEc7zYlRwMMH9tQUtijXRk05-qjHaxmyQrGpa-MjzEQ6cR8rCymZws_lKRmmMgIoHRtkTifbvF4LZgz4x5cbWorN1W8EW2i8uQrv7B_5ZXQCyPblULTpKrog4eMGbP61wkEj0vKWO7u8pNQVO11zKfK_hmhXRYXQ8rQ1Oaxo2HpQkheIN9PeG6WQ2RmGbYZGMnFyn2udvBHl-CjP8tHMaKvmO61wg&csuir=1&mtid=9DypacqDOP6swPAPncbRuAo&udm=50


<h2 className="text-3xl font-extrabold text-gray-900 mb-8">Lediga uppdrag</h2>


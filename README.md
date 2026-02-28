# 143

## TODO
- implementera Om oss
- kontakt formulär
- Implementera shadcn
- när shadcn är implementerat 
- Lägg till ett filter så att man kan filtrera de lediga jobben


## schemas
Lediga uppdrag:
{
    'titel': required, string
    'Företag': required, string
    'plats': required, string
    'varaktighet': string
    'Timtaxa': string
    'Beskrivning': required, string
}

Kontakt formulär:
{
    Namn: req, string
    E-post: req, string
    Meddelande: req, string
}

# Övrigt
- const chunks = _.chunk([1, 2, 3, 4, 5], 2); // Output: [[1, 2], [3, 4], [5]]
_.chunk: Splits an array into chunks of a specified size. This is useful for tasks like paginating data or processing data in batches.

- Sätt att implementera relationer mällan kandidater och lediga jobb:
https://www.google.com/search?q=can+I+use+relations+in+mongodb&sca_esv=643cd21dc826a565&sxsrf=ANbL-n4CKfijjRXSjwIrIzNb0CTjKK4d6g%3A1772285324830&fbs=ADc_l-YGrpJMQtvjQ6h14rj-dfIrhDmsR0nDeJo5h1S8qqVcze3gnYWJNz5sHqGXCxeUKqYzJ8LBh08ZeR_MO52knSjhya7m7WavBvXjcKR_G6FiSAPdPfFwnfhbDMqfdb5kgEZLxmCsFc5wqFtuMHfbYqbIZCDna2jdwrGIQ34-wCCMG4Op3vXeJu6hCFld6r8g_3JnC-fK&aep=1&ntc=1&sa=X&ved=2ahUKEwiApuippfySAxWTQVUIHaZkJDEQ2J8OegQIEhAE&biw=1920&bih=1113&dpr=1&mstk=AUtExfAwETfkj9ZjhjOVePINhvruUOe14VLNx98adYP2azkQoedsaC0VhJrRH9oc6q2VpqsDoDuqEllDM5q4HyUU5UYZdXWPEqKB6a8UazoX8bgL7jAqsxpr_fhjUq1e13FIehCYvYhHVnBUUD2zHwUGIhBCwtYtNth1TV4fve0gskQuPzN74eB6Ov7jKfgQ_Ml64rjwdpnoeRGS3IPCPheRztuf0F00jnLccbCwR6y_77RztFV8flAsR3XZOCQz7DlYkzlHcs_GdEP1swVTolAVy-JzKGUojHnjT39ACADNnImCGUYTwQF4g3ONMimd4tr2PyKj6-NQxIb64Q&csuir=1&mtid=le2iaeekMvjiwPAPlbz2uAU&udm=50


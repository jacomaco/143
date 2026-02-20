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



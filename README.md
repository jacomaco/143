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

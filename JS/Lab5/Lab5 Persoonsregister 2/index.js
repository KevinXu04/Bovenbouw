let container = document.getElementById('container');
let persoon = 1;
let persons = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 },
 {
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
 },
 {
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
 },
 {
    "voornaam": "Klaas",
    "achternaam": "Wever",
    "nationaliteit": "Nederlandse",
    "leeftijd": 73,
    "gewicht": 85
 },
 {
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
 },
 {
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
 },
 {
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
 }];

 
persons.forEach(person => {
    for (let value in person) {
        console.log(`${person[value]}`);

        if (value === "voornaam") {
            let titel = document.createElement("h2");
            titel.innerHTML = `Persoon ${persoon}`;
            persoon++;
            container.appendChild(titel);
        }

        let span = document.createElement("p");
        span.innerHTML = `${value}: ${person[value]}`;
        container.appendChild(span);
    }
})
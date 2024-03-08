let container = document.getElementById('container');
let persoon = 1;
let persons = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
};


for (const key in persons) {
    console.log(`${key}: ${persons[key]}`);

    if (key === "voornaam") {
        let titel = document.createElement("h2");
        titel.innerHTML = `Persoon ${persoon}`;
        persoon++;
        container.appendChild(titel);
    }

    let span = document.createElement("p");
    span.innerHTML = `${key}: ${persons[key]}`;
    container.appendChild(span);
}

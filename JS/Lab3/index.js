let container = document.getElementById("container");
let namen = [];
let aantalNamen = parseInt(prompt("Hoeveel namen wil je invullen?"));

while (aantalNamen < 3) {
    alert("Het moet meer dan 3 zijn.");
    aantalNamen = parseInt(prompt("Hoeveel namen wil je invullen?"));
}

for (let i = 0; i < aantalNamen; i++) {
    let naam = prompt("Voer een naam in:");
    namen.push(naam);
}

let titel1 = document.createElement("h2");
titel1.textContent = "De ingevoerde namen in de array zijn:";

let titel2 = document.createElement("h2");
titel2.textContent = "De ingevoerde namen in de array in omgekeerde volgorde zijn:";

container.append(titel1);

for (let i = 0; i < namen.length; i++) {
    let span = document.createElement("span");
    span.textContent = namen[i] + " ";
    container.append(span);
}

container.append(titel2);

for (let i = namen.length - 1; i >= 0; i--) {
    let span = document.createElement("span");
    span.textContent = namen[i] + " ";
    container.append(span);
}

const lst = [
    { name: 'bolletje', aantal: 0, prijs: 1.10 },
    { name: 'hoorntje', aantal: 0, prijs: 1.25 },
    { name: 'bakje', aantal: 0, prijs: 0.75 }
];

const smaakLstZakelijk = [
    { name: 'l. aardbei', aantal: 0, prijs: 9.80, key: 'a' },
    { name: 'l. chocolade', aantal: 0, prijs: 9.80, key: 'b' },
    { name: 'l. munt', aantal: 0, prijs: 9.80, key: 'c' },
    { name: 'l. vanille', aantal: 0, prijs: 9.80, key: 'd' }
];

const smaakLstKlant = [
    { name: 'b. aardbei', aantal: 0, prijs: 0.95, key: 'a' },
    { name: 'b. chocolade', aantal: 0, prijs: 0.95, key: 'b' },
    { name: 'b. vanille', aantal: 0, prijs: 0.95, key: 'c' }
];

const toppingLst = [
    { name: 'geen', aantal: 0, prijs: 0, key: 'a' },
    { name: 'slagroom', aantal: 0, prijs: 0.50, key: 'b' },
    { name: 'sprinkels', aantal: 0, prijs: 0.30, key: 'c' },
    { name: 'caramel saus', aantal: 0, prijs: 0, key: 'd' }
];

const smaakTekstZakelijk = "Welke smaak wilt u? A) Aardbei, B) Chocolade, C) Munt of D) Vanille?\n ";
const smaakTekstKlant = "Welke smaak wilt u voor uw bolletje? A) Aardbei, B) Chocolade, C) Munt of D) Vanille?\n ";
const toppingTekst = "Wat voor topping wilt u: A) Geen, B) Slagroom, C) Sprinkels of D) Caramel Saus?\n ";
let container = document.getElementById("container");

alert("Welkom bij Papi Gelato.");

let particOfZakelijk;
while (true) {
    particOfZakelijk = prompt("Bent u 1) een particuliere klant of 2) een zakelijke klant?");
    if (particOfZakelijk === "1" || particOfZakelijk === "2") {
        break;
    } else {
        alert("Sorry dat is geen optie die we aanbieden...");
    }
}

let nogEen = true;
while (nogEen) {
    if (particOfZakelijk === '1') { // Particulier
        let aantal = aantalBolletjesOfLiter(particOfZakelijk);

        let keuze = bakjeOfHoorntje(aantal);

        smaakEnTopping(aantal, smaakLstKlant, smaakTekstKlant); // Smaak

        smaakEnTopping(aantal, toppingLst, toppingTekst); // Topping

        nogEen = meerBestellen();

        // tempLst = bolletjesEnKeuzeBerekening(aantal, keuze, lst);

        bolletjesEnKeuzeBerekening(aantal, keuze, lst);
    } else if (particOfZakelijk === '2') { // Zakelijk
        let aantalLiter = aantalBolletjesOfLiter(particOfZakelijk);

        smaakEnTopping(aantalLiter, smaakLstZakelijk, smaakTekstZakelijk);
        nogEen = false;
    }
}

if (particOfZakelijk === '1') {
    bon(lst, smaakLstKlant, toppingLst, particOfZakelijk);
    } else {
    bon(lst, smaakLstZakelijk, toppingLst, particOfZakelijk);
}

function aantalBolletjesOfLiter(particOfZakelijk) {
while (true) {
    try {
    if (particOfZakelijk === '1') {
        let aantal = parseInt(prompt("Hoeveel bolletjes wilt u?"));
        if (aantal > 8) {
        alert("Sorry, zulke grote bakken hebben we niet");
        } else {
        return aantal;
        }
    } else if (particOfZakelijk === '2') {
        let aantalLiter = parseInt(prompt("Hoeveel liter ijs wilt u?"));
        return aantalLiter;
    }
    } catch {
        alert("Sorry dat is geen optie die we aanbieden...");
    }
}
}

function bakjeOfHoorntje(aantal) {
let keuzeBoolean = true;
let keuze;
if (aantal >= 1 && aantal <= 3) {
    while (keuzeBoolean) {
    keuze = prompt(`Wil u deze ${aantal} bolletje(s) in een hoorntje of een bakje?`).toLowerCase();
    if (keuze === "hoorntje" || keuze === "bakje") {
        keuzeBoolean = false;
    } else {
        console.log("Sorry dat is geen optie die we aanbieden...");
    }
    }
} else if (aantal >= 4 && aantal <= 8) {
    console.log(`Dan krijgt u van mij een bakje met ${aantal} bolletjes`);
    keuze = "bakje";
}
return keuze;
}

function smaakEnTopping(aantal, lst, tekst) {
let keuzeBoolean = true;

for (let index = 0; index < aantal; index++) {
    while (keuzeBoolean) {
    let keuze = prompt(tekst).toLowerCase();
    switch (keuze) {
        case 'a':
        keuze = lst[0].name;
        keuzeBoolean = false;
        break;
        case 'b':
        keuze = lst[1].name;
        keuzeBoolean = false;
        break;
        case 'c':
        keuze = lst[2].name;
        keuzeBoolean = false;
        break;
        case 'd':
        keuze = lst[3].name;
        keuzeBoolean = false;
        break;
        default:
        alert("Sorry dat is geen optie die we aanbieden...");
    }
    lst.forEach(item => {
        if (keuze === item.name) {
        item.aantal += 1;
        }
    });
    }
    keuzeBoolean = true;
}
return lst;
}

function meerBestellen() {
while (true) {
    let meer = prompt("Wilt u nog meer bestellen?");
    if (meer === "y") {
        return true;
    } else if (meer === "n") {
        return false;
    } else {
        alert("Sorry dat is geen optie die we aanbieden...");
    }
}
}

function bolletjesEnKeuzeBerekening(aantal, keuze, lst) {
lst[0].aantal += aantal;
lst.forEach(item => {
    if (keuze === item.name) {
        item.aantal += 1;
    }
});
return lst;
}

function bon(lst, smaakLst, toppings, particOfZakelijk) {
const BTW = 0.06;
let totaalPrijs = 0;
let totaalPrijsToppings = 0;
lst.push(...smaakLst);

let span = document.createElement("span");

span.textContent = "---------[Papi Gelato]---------";
container.appendChild(span);
container.append(document.createElement("br"));

lst.slice(1).forEach(index => {
    if (index.aantal) {
        let span2 = document.createElement("span");
        span2.textContent = `${index.name} ${index.aantal} x € ${index.prijs.toFixed(2)} = € ${(index.aantal * index.prijs).toFixed(2)}`;
        container.appendChild(span2);
        container.append(document.createElement("br"));
    }
        totaalPrijs += index.aantal * index.prijs;
});

if (lst[2].aantal > 0) {
    toppings[3].prijs = 0.9;
} else if (lst[3].aantal > 0) {
    toppings[3].prijs = 0.6;
}

toppings.forEach(item => {
    totaalPrijsToppings += item.aantal * item.prijs;
});

totaalPrijs += totaalPrijsToppings;

const btw = BTW * totaalPrijs;

if (totaalPrijsToppings) {
    let span3 = document.createElement("span");
    span3.textContent = `toppings              € ${totaalPrijsToppings.toFixed(2)}\n`;
    container.appendChild(span3);
    container.append(document.createElement("br"));
}

let span4 = document.createElement("span");
span4.textContent = `-----------------------------------`;
container.appendChild(span4);
container.append(document.createElement("br"));

let span5 = document.createElement("span");
span5.textContent = `totaal                 € ${totaalPrijs.toFixed(2)}`;
container.appendChild(span5);
container.append(document.createElement("br"));

let span6 = document.createElement("span");
span6.textContent = `btw (${BTW}%)               € ${(btw).toFixed(2)}`;

let span7 = document.createElement("span");
span7.textContent = `Bedankt en tot ziens! `;

if (particOfZakelijk === "2") {
    container.appendChild(span6);
    container.append(document.createElement("br"));
}
container.appendChild(span7);
}

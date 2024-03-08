let werkdagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
let container = document.getElementById("dagen");

let titel1 = document.createElement("h2");
titel1.textContent = "Dagen van de week";

let titel2 = document.createElement("h2");
titel2.textContent = "De werkdagen zijn";

let titel3 = document.createElement("h2");
titel3.textContent = "De weekenddagen zijn";

let titel4 = document.createElement("h2");
titel4.textContent = "Alle dagen van de week in omgekeerde volgorde zijn";

let titel5 = document.createElement("h2");
titel5.textContent = "De werkdagen in omgekeerde volgorde zijn";

let titel6 = document.createElement("h2");
titel6.textContent = "De weekenddagen in omgekeerde volgorde zijn";

container.append(titel1);
for (let i = 0; i < werkdagen.length; i++) {
    let span = document.createElement("span");
    span.textContent = werkdagen[i] + " ";
    container.append(span);
}

container.append(titel2);
for (let i = 0; i < werkdagen.length; i++) {
    if (werkdagen[i] == "Zaterdag") {
        break
    } else {
        let span = document.createElement("span");
        span.textContent = werkdagen[i] + " ";
        container.append(span);
    }
}

container.append(titel3);
for (let i = 5; i < werkdagen.length; i++) {
    let span = document.createElement("span");
    span.textContent = werkdagen[i] + " ";
    container.append(span);
}

container.append(titel4);
for (let i = werkdagen.length - 1; i >= 0; i--) {
    let span = document.createElement("span");
    span.textContent = werkdagen[i] + " ";
    container.append(span);
}

container.append(titel5);
for (let i = werkdagen.length - 3; i >= 0; i--) {
    let span = document.createElement("span");
    span.textContent = werkdagen[i] + " ";
    container.append(span);
}

container.append(titel6);
for (let i = werkdagen.length - 1; i >= 5; i--) {
    let span = document.createElement("span");
    span.textContent = werkdagen[i] + " ";
    container.append(span);
}
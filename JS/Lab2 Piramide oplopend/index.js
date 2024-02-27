let container = document.getElementById("container");
let lst = [];
let getal = parseInt(prompt("Geef een getal"));
getal += 1;

let titel = document.createElement("h2");
titel.textContent = "Piramide oplopend:";
container.appendChild(titel);

for (let i = 0; i < getal; i++) {
    lst.push(i);
}

for (let i = 0; i < lst.length; i++) {
    let span = document.createElement("span");
    span.textContent = lst[i] + (i !== lst.length - 1 ? ", " : "");
    container.appendChild(span);
}

for (let i = 0; i < getal; i++) {
    let line = '';
    for (let x = 0; x <= i; x++) {
        line += x;
    }
    let div = document.createElement("div");
    div.textContent = line;
    container.appendChild(div);
}

console.log(lst);
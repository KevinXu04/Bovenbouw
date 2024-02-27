let container = document.getElementById("container");
let arrayEen = [1,2,3,4,5,6,7,8,9,10];
let arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee) {
    for (let i = 0; i < arrayEen.length; i++) {
        let span = document.createElement("span");
        let lineBreaker = document.createElement("br");
        span.textContent = arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i]+arrayTwee[i]);
        container.append(span);
        container.append(lineBreaker);
    }
}

function aftrekken(arrayEen, arrayTwee) {
    for (let i = 0; i < arrayEen.length; i++) {
        let span = document.createElement("span");
        let lineBreaker = document.createElement("br");
        span.textContent = arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i]-arrayEen[i]);
        container.append(span);
        container.append(lineBreaker);
    }
}

function vermenigvuldigen(arrayEen, arrayTwee) {
    for (let i = 0; i < arrayEen.length; i++) {
        let span = document.createElement("span");
        let lineBreaker = document.createElement("br");
        span.textContent = arrayEen[i] + " x " + arrayTwee[i] + " = " + (arrayEen[i]*arrayTwee[i]);
        container.append(span);
        container.append(lineBreaker);
    }
}

function delen(arrayEen, arrayTwee) {
    for (let i = 0; i < arrayEen.length; i++) {
        let span = document.createElement("span");
        let lineBreaker = document.createElement("br");
        span.textContent = arrayTwee[i] + " : " + arrayEen[i] + " = " + (arrayTwee[i]/arrayEen[i]);
        container.append(span);
        container.append(lineBreaker);
    }
}

let titel1 = document.createElement("h2");
titel1.textContent = "Optellen van twee arrays zijn:";

let titel2 = document.createElement("h2");
titel2.textContent = "Aftrekken van twee arrays zijn:";

let titel3 = document.createElement("h2");
titel3.textContent = "Vermenigvuldigen van twee arrays zijn:";

let titel4 = document.createElement("h2");
titel4.textContent = "Delen van twee arrays zijn:";

container.append(titel1);
optellen(arrayEen, arrayTwee);
container.append(titel2);
aftrekken(arrayEen, arrayTwee);
container.append(titel3);
vermenigvuldigen(arrayEen, arrayTwee);
container.append(titel4);
delen(arrayEen, arrayTwee);
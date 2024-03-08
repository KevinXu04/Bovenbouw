let container = document.getElementById("container");
let arrayEen = [2, 4, 6, 8, 10];

function vermenigvuldigen(arrayEen) {
    for (let i = 0; i < arrayEen.length; i++) {
        let titel = document.createElement("h2");
        titel.textContent = `Tafel van ${arrayEen[i]}`;
        container.append(titel);

        for (let x = 0; x < 10; x++) {
            let span = document.createElement("span");
            span.textContent = `${x + 1} x ${arrayEen[i]} = ${(x + 1) * arrayEen[i]}`;
            container.append(span);
            container.append(document.createElement("br"));
        }
        container.append(document.createElement("br"));
    }
}

vermenigvuldigen(arrayEen);
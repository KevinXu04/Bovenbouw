const buttonsPerRow = 5; // Het aantal buttons per rij
const totalButtons = 30; // Aantal buttons

const colors = ["green", "red", "purple", "blue", "black"];

let buttons = []; // Array met buttons

// Vult de array met buttons met id en value
for (x = 1; x <= totalButtons; x++){
    buttons.push({id: `${x}`, value: 0});
};

let rows = Math.ceil(totalButtons / buttonsPerRow); // Berekent hoeveel rijen er zijn
let container = document.getElementById("container"); // Haalt de id op van HTML

// Dit maakt alle buttons aan in de HTML pagina
for (i = 0; i < rows; i++){
    let row = document.createElement("div");  // Maakt een rij aan
    row.classList.add("button"); // Voegt de class button toe aan de rij

    for (x = 0; x < buttonsPerRow; x++){
        let button = document.createElement("button");
        button.innerHTML = `${i * buttonsPerRow + x + 1}`; // Berekent de huidige button
        // button.setAttribute("id", `${i * buttonsPerRow + x + 1}`); 
        button.id = `${i * buttonsPerRow + x + 1}`; // Berekent welke ID de button moet krijgen
        row.appendChild(button); // Voegt button toe aan de rij
    }   
    container.appendChild(row); // Voegt de rij toe aan de container
};

// Elke keer dat een button wordt geklikt wordt dit uitgevoerd
buttons.forEach(function(button) {
    let buttonElement = document.getElementById(button.id);
    buttonElement.addEventListener('click', function() {

        button.value += 1;

        // Als de value van een button een van deze if statements heeft gebeurt er dit
        // if (button.value == 0){
        //     buttonElement.style.backgroundColor = "red"
        // } else if (button.value == 1){
        //     buttonElement.style.backgroundColor = "purple"
        // } else if (button.value == 2){
        //     buttonElement.style.backgroundColor = "blue"
        // } else if (button.value == 3){
        //     buttonElement.style.backgroundColor = "black"
        // } else{
        //     buttonElement.style.visibility = "hidden"
        // }

        // De value gaat steeds omhoog na een klik
        // button.value += 1;

        if (button.value == colors.length){
            buttonElement.style.visibility = "hidden";
        } else{
            buttonElement.style.backgroundColor = colors[button.value];
        }

  });
});

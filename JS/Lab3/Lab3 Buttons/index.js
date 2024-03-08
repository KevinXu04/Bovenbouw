// Alle buttons worden in een array gestopt
let buttons = [
    {id: '1', color: 'green'},
    {id: '2', color: 'red'},
    {id: '3', color: 'blue'}
]

// De HTML dingen worden opgehaald en opgeslagen
let container = document.getElementById('container');

for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    button.setAttribute('id', `${i+1}`);
    button.innerText = `Button ${i+1}`;
    button.style.backgroundColor = buttons[i].color;

    container.appendChild(button);
}

// Elke keer dat een button wordt geklikt wordt dit uitgevoerd
buttons.forEach(function(button) {
    let buttonElement = document.getElementById(button.id);
    buttonElement.addEventListener('click', function() {

        // De achtergrond verandert en de value gaat omhoog met 1
        document.body.style.backgroundColor = `${button.color}`;
  });
});
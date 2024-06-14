let games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
];

let container = document.getElementById("games");
let selectedGames = [];
let totalPrice = 0;

// Lijst met games aantonen
games.forEach(game => {
    let gameDiv = document.createElement("div");
    gameDiv.classList.add("gameLst");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "gameCheckbox";
    checkbox.value = game.title;
    checkbox.id = game.title.replace(/\s+/g, '-');

    gameDiv.appendChild(checkbox);

    let gameData = document.createElement("div");
    gameData.classList.add("gameData");

    for (let value in game) {
        if  (value === "title") {
            let title = document.createElement("p");
            title.innerHTML = `${game[value]}`;
            title.classList.add("title");
            gameData.appendChild(title);
        } else if  (value === "price") {
            let price = document.createElement("p");

            if (`${game[value]}` == 0.00) {
                price.innerHTML = `FREE`;
            } else {
                price.innerHTML = `$${game[value]}`;
            }
            
            price.classList.add("price");
            gameData.appendChild(price);
        }
    }

    gameDiv.appendChild(gameData);
    container.appendChild(gameDiv);
})


// Winkelwagen aantonen
let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
container.appendChild(submitButton);

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
 
    let checkboxes = document.querySelectorAll('.gameLst input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            let selectedGame = games.find(game => game.title === checkbox.value);
            if (selectedGame) {
                selectedGames.push(selectedGame);
            }
        }
    });

    console.log(selectedGames);

    $( "#games" ).empty();
   
    selectedGames.forEach((game, index) => {
        let gameDiv = document.createElement("div");
        gameDiv.classList.add("gameLst");
    
        let gameData = document.createElement("div");
        gameData.classList.add("gameData");
    
        for (let value in game) {
            if  (value === "title") {
                let title = document.createElement("p");
                title.innerHTML = `${game[value]}`;
                title.classList.add("title");
                gameData.appendChild(title);
            } else if  (value === "price") {
                let price = document.createElement("p");
    
                if (`${game[value]}` == 0.00) {
                    price.innerHTML = `FREE`;
                } else {
                    price.innerHTML = `$${game[value]}`;
                }

                totalPrice += game[value]
                
                price.classList.add("price");
                gameData.appendChild(price);
            }
        }
    
        let totalPriceDiv = document.createElement("p");
        totalPriceDiv.innerHTML = totalPrice;

        gameDiv.appendChild(gameData);
        container.appendChild(gameDiv);

        if (index === selectedGames.length - 1) {
            container.appendChild(totalPriceDiv); 
        }
    })
});

// Prijs filter
let filtersDiv = document.getElementById("filters");
let filteredGames = [];
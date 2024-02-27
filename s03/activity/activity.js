const prompt = require("prompt-sync")();

// Trainer object
const trainer = {
  name: "",
  pokemon: [],
  winner: false,

  catch(pokemon) {
    this.pokemon.push(pokemon);
    console.log(`${this.name} caught ${pokemon.name}!`);
  },
  run(enemy) {
    console.log(`${this.name} ran away from ${enemy.name}!`);
  },
};

// Pokemon constructor
function Pokemon(name, type, hp) {
  this.name = name;
  this.type = type;
  this.hp = hp;
  this.fainted = false;

  this.tackle = function (enemy) {
    console.log(`${this.name} used Tackle on ${enemy.name}!`);
    const damage = Math.floor(Math.random() * 12) + 1;
    enemy.hp -= damage;
    console.log(`${enemy.name} has ${enemy.hp} hp left!`);

    if (enemy.hp <= 0) {
      enemy.fainted = true;
      console.log(`${enemy.name} fainted!`);
    }
  };
}

function getRandomPokemon(pokemonChoices) {
  const randomPokemon = Math.floor(Math.random() * pokemonChoices.length);
  return pokemonChoices[randomPokemon];
}

// Instantiate 5 starter pokemon
const pikachu = new Pokemon("Pikachu", "Electric", 35);
const charmander = new Pokemon("Charmander", "Fire", 39);
const squirtle = new Pokemon("Squirtle", "Water", 44);
const bulbasaur = new Pokemon("Bulbasaur", "Grass", 45);
const meowth = new Pokemon("Meowth", "Normal", 40);
const pokemonChoices = [pikachu, charmander, squirtle, bulbasaur, meowth];

// Instantiate all trainers
const player1 = Object.create(trainer);
const player2 = Object.create(trainer);

// Create a trainer from user prompt
const userName = prompt("What's your trainer's name? ");
player1.name = userName;

// Ask for player count
const playerMode = prompt("Would you like to play with someone? (y/n) ");
if (playerMode === "y" || playerMode === "Y") {
  player2.name = prompt("What's your friend trainer's name? ");
} else {
  console.log("\nYou're on your own!");
  player2.name = "Team Rocket";
  console.log(`\n${player2.name} is up to no good!`);
}

// Let the players catch a pokemon
console.log("\nYou're walking in the tall grass...");
const randomChoice = getRandomPokemon(pokemonChoices);
console.log(`You found a wild ${randomChoice.name}!`);
player1.catch(randomChoice);

//remove randomChoice from pokemonChoices
const index = pokemonChoices.indexOf(randomChoice);
pokemonChoices.splice(index, 1);
const randomChoice2 = getRandomPokemon(pokemonChoices);
console.log(`${player2.name} found a wild ${randomChoice2.name}!`);
player2.catch(randomChoice2);

// Battle
for (
  let turn = 1;
  !player1.pokemon[0].fainted &&
  !player2.pokemon[0].fainted &&
  !player1.winner &&
  !player2.winner;
  turn++
) {
  let action = "";

  if (turn % 2 === 0) {
    console.log(`\n${player2.name}'s turn!`);
  } else {
    console.log(`\n${player1.name}'s turn!`);
  }

  if (playerMode === "n" || playerMode === "N" || turn % 2 !== 0) {
    console.log(`[t]ackle`);
    console.log(`[r]un`);
    action = prompt("What would you like to do? (t/r) ");
  }

  switch (action) {
    case "t" || "T":
      if (turn % 2 !== 0) {
        player1.pokemon[0].tackle(player2.pokemon[0]);
      } else {
        player2.pokemon[0].tackle(player1.pokemon[0]);
      }

      if (player1.pokemon[0].fainted) {
        player2.winner = true;
      } else if (player2.pokemon[0].fainted) {
        player1.winner = true;
      }
      break;

    case "r" || "R":
      if (playerMode === "y" || playerMode === "Y") {
        if (turn % 2 === 0) {
          player2.run(player1);
          player1.winner = true;
        } else {
          player1.run(player2);
          player2.winner = true;
        }
      } else if (playerMode === "n" || playerMode === "N") {
        player1.run(player2);
        player2.winner = true;
      }
      break;
  }
}

// Winner
if (player1.winner) {
  console.log(`\n${player1.name} is victorious!`);
  console.log(`${player2.name} is running to the Pokecenter!`);
} else if (player2.winner) {
  console.log(`\n${player2.name} is victorious!`);
  console.log(`${player1.name} is running to the Pokecenter!`);
}

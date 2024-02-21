const prompt = require("prompt-sync")();

// Trainer object
const trainer = {
  name: "",
  pokemon: [],

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
    // TODO: create this.moveSet and create move objects

  this.tackle = function (enemy) {
    console.log(`${this.name} used Tackle on ${enemy.name}!`);
    enemy.hp -= 10;
    console.log(`${enemy.name} has ${enemy.hp} hp left!`);

    if (enemy.hp <= 0) {
      enemy.fainted = true;
      console.log(`${enemy.name} fainted!`);
    }
  };
}

// Instantiate pokemon
const pikachu = new Pokemon("Pikachu", "Electric", 50);
const meowth = new Pokemon("Meowth", "Normal", 30);

// Instantiate all trainers
const player1 = Object.create(trainer);
const player2 = Object.create(trainer);


// Create a trainer from user prompt
const userName = prompt("What's your trainer's name? ");
player1.name = userName;

// Ask for player count
const playerMode = prompt("Would you like to play with someone? (y/n) ");
if (playerMode === "y" || playerMode === "Y") {
  player2.name = prompt("What's your friend's trainer's name? ");
} else {
  console.log("You're on your own!");
  player2.name = "Team Rocket";
  console.log(`${player2.name} is up to no good!`);
}

// Battle

while (!pikachu.fainted && !meowth.fainted) {
  pikachu.hp > 0 && pikachu.tackle(meowth);
  console.log();
  meowth.hp > 0 && meowth.tackle(pikachu);
  console.log();
}

// Winner
if (pikachu.fainted) {
  console.log(`${player1.name} runs to the Pokecenter!`);
} else {
  console.log(`${player2.name} is blasting off again!`);
}

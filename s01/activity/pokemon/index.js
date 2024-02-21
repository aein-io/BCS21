// Trainer object 
const trainer = {
    name: "",
    pokemon: [],
    
    catch(pokemon) {
        this.pokemon.push(pokemon);
        console.log(`${this.name} caught ${pokemon.name}!`);
    }
};

// Pokemon constructor
function Pokemon (name, type, hp) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.fainted = false;
    this.tackle = function(enemy) {
        console.log(`${this.name} used Tackle on ${enemy.name}!`);
        enemy.hp -= 10;
        console.log(`${enemy.name} has ${enemy.hp} hp left!`);

        if (enemy.hp <= 0) {
            enemy.fainted = true;
            console.log(`${enemy.name} fainted!`);
        }
    };
};

// Instantiate pokemon
const pikachu = new Pokemon("Pikachu", "Electric", 50);
const meowth = new Pokemon("Meowth", "Normal", 30);

// Instantiate trainers
const ash = Object.create(trainer);
ash.name = "Ash"
console.log(`${ash["name"]} has started his Pokemon journey!`);
const teamRocket = Object.create(trainer);
teamRocket.name = "Team Rocket";
console.log(`${teamRocket.name} is up to no good!`);

// Trainers catch their pokemon
console.log();
ash.catch(pikachu);
teamRocket.catch(meowth);

// Trainers are ready for battle
console.log();
console.log(`${teamRocket.name} wants ${ash.name} to battle!`);

// Battle

while(!pikachu.fainted && !meowth.fainted) {
    pikachu.hp > 0 && pikachu.tackle(meowth);
    console.log();
    meowth.hp > 0 && meowth.tackle(pikachu);
    console.log();  
}

// Winner
if (pikachu.fainted) {
    console.log(`${ash.name} runs to the Pokecenter!`);
} else {
    console.log(`${teamRocket.name} is blasting off again!`);
}

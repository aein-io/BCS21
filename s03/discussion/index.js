const prompt = require("prompt-sync")();

/* 
    JSON Objects
    - JacaScript Object Notation
    - Serialization is the process of converting data into a series of bytes for easier transmission

*/

const address = {
    "city": "Dasma",
    "province": "Cavite",
    "country": "Philippines"
}

// Stringify
console.log(JSON.stringify(address));

// Parse
const jsonAddress = '{"city":"Dasma","province":"Cavite","country":"Philippines"}';
console.log(JSON.parse(jsonAddress));

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let age = prompt("Enter your age: ");

let userData = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    age: age,
});

console.log(userData);

// Convert stringified JSON to object
let batchesJSON = `[{"name": "Batch 1", "year": 2021}, {"name": "Batch 2", "year": 2022}]`;
let batches = JSON.parse(batchesJSON);
console.log(batches);

let stringifiedObject = `{"name": "Aaron", "age": 99}`;
console.log("Stringified: " + stringifiedObject);
let object = JSON.parse(stringifiedObject);
console.log("Parsed: " + object);



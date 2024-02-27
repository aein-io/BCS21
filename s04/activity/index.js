const prompt = require("prompt-sync")();

const printMessage = (value) => {
    if (value <= 50) {
        if (value % 10 === 0){
            console.log(`The number is divisible by 10.`);
            console.log(`The current value is at ${value}. Terminating the loop.`);
        } else if (value % 5 === 0) {
            console.log(`The current value is ${value}, divisible by five.`);
            console.log(`The current value is at ${value}. Terminating the loop.`);
        } else {
            console.log(`The current value is at ${value}. Terminating the loop.`);
        }
        return true;
    } else if (value % 5 === 0) {
        console.log(`The current value is ${value}, divisible by five.`);
        return false;
    } else if (value % 10 === 0) {
        console.log("The current value is divisible by 10.");
        return false;
    } else {
        console.log(`The number you provided is ${value}.`);
        return false;
    }
};

const promptNumber = () => {
    let terminateLoop = false;

    while(!terminateLoop) {
        let userInput = prompt(`Enter a number: `);
        let inputValue = parseInt(userInput);
        
        terminateLoop = printMessage(inputValue);
    }
};

promptNumber();
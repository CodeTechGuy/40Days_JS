console.log("Expense Tracker Demo");
async function demo(){
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    // console.log(response);
    const data = await response.json();
    // console.log(data);
}
demo();

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log("Hello, " + name);
    rl.close();
});

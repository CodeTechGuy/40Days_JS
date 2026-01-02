let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// let prompt = require("prompt-sync")();
function ques02(){
    let amt = prompt("enter a amount to withdraw: ");

    amt%100==0 ? console.log("Withdrawal successful") : console.log("Please enter the amount in multiples of 100");
}


function ques03(){
    let ops = prompt("Enter operation (+, -, *, /.%): ");
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let result;

    switch (ops) {      
        case "+":
            result = num1 + num2;
            console.log(`The sum is: ${result}`);   
            break;
        case "-":
            result = num1 - num2;
            console.log(`The difference is: ${result}`);
            break;
        case "*":
            result = num1 * num2;
            console.log(`The product is: ${result}`);
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`The quotient is: ${result}`);
            } else {
                console.log("Error: Division by zero is not allowed.");
            }
            break;
        case "%":
            result = num1 % num2;
            console.log(`The remainder is: ${result}`);
            break;
        default:
            console.log("Invalid operation. Please enter add, sub, mul, or div.");
    }
}


let age = 25
if(age<18){
    console.log("$3")
}else if(age>=18 && age<=60){
    console.log("$10")
} else if(age>60){
    console.log("$8")
}


function ques05(){
    const zodiac = {
    january: "Capricorn",
    february: "Pisces",
    march: "Aries",
    april: "Aries",
    may: "Taurus",
    june: "Gemini",
    july: "Cancer",
    august: "Leo",
    september: "Virgo",
    october: "Libra",
    november: "Scorpio",
    december: "Sagittarius"
    };

    const month = prompt("Enter your birth month").toLowerCase();

    console.log("Your zodiac sign is:", zodiac[month] || "Invalid month");
}

ques05();



/*

&& - can first option be converted to false return false	
     can't convert first option then return second option

?? - null/undefined


typeof(array) = object
typeof(null) = object

*/
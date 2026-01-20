// CLOSURES    Closures are functions that "remember" their lexical scope even when the function is executed outside that lexical scope.


// Usefulness of closure
// 1. Data Privacy: Closures can be used to create private variables that cannot be accessed from outside the function.
// 2. Function Factories: Closures can be used to create functions with preset parameters or behaviors.
// 3. Maintaining State: Closures can be used to maintain state in an application, such as in event handlers or callbacks.
// 4. Module Pattern: Closures can be used to create modules that encapsulate functionality and expose only the necessary parts.



// Example 1: Simple Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}   
const newFunction = outerFunction('outside');
newFunction('inside');



// Example 2: Counter using Closure
function createCounter() {
    let count = 0; // private variable  
    return function() {
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2



// Example 3: Guess the Number Game using Closure
function guessGame() {
    
    function guessTheNumberGame() {
        let compNum = Math.floor(Math.random() * 10) + 1;
        let attempts = 5;
        return function() {
            let userNum = prompt("Guess a number between 1 and 10:");
            if (userNum == compNum) {
                alert("You guessed it right!");
                return true;
            } else if (attempts > 0) {
                alert("Try again!");
                attempts--;
                return false;
            } else {
                alert("Game Over! The number was " + compNum);
                return false;
            }
        };
    }
    const game = guessTheNumberGame();
    let guessedCorrectly = false;
    for (let i = 0; i < 5; i++) {
        if (game()) {
            guessedCorrectly = true;
            break;
        }
    }
    if (!guessedCorrectly) {
        console.log("You were not able to find the right answer.");
    }
}

// The above code is functionally similar to the code in day07.js but uses closures to encapsulate the game logic and state.



// YT class code
function outer() {
    let x = 20;

    return function inner() {
        console.log(x);
    }
}

const func = outer();
console.log("here ",func());


// Example 4: Private Variables using Closure
function Person(name, age) {
    let _name = name; // private variable
    let _age = age;   // private variable
    this.getName = function() {
        return _name;
    };
    this.getAge = function() {
        return _age;
    };  
}

const person1 = new Person('Alice', 30);
console.log(person1.getName()); // Output: Alice
console.log(person1.getAge());  // Output: 30

// Example 5: Function Factory using Closure
function makeMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
console.log(makeMultiplier(4)(5)); // Output: 20    


// Example 6: Module Pattern using Closure
const CounterModule = (function() {
    let count = 0; // private variable  
    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1; 
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();
console.log(CounterModule.increment()); // Output: 1
console.log(CounterModule.increment()); // Output: 2
console.log(CounterModule.decrement()); // Output: 1
console.log(CounterModule.getCount());  // Output: 1    
// Note: Direct access to 'count' is not possible
// console.log(CounterModule.count); // Undefined


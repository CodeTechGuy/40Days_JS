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

// Example 7: Maintaining State in Event Handlers using Closure
function setupButton() {
    let clickCount = 0; // private variable
    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.addEventListener('click', function() {
        clickCount += 1;
        console.log('Button clicked ' + clickCount + ' times');
    });
    document.body.appendChild(button);
}
setupButton();
// Note: Each time the button is clicked, the clickCount variable maintains its state due to closure.


// Example 8: Memoization using Closure
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
// Note: The fibonacci function benefits from memoization by caching previously computed results.

// Example 9: Partial Application using Closure
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };  
}
function add(a, b, c) {
    return a + b + c;
}   
const add5And10 = partial(add, 5, 10);
console.log(add5And10(15)); // Output: 30
// Note: The add5And10 function has preset the first two arguments of the add function using partial application.

// Example 10: Currying using Closure
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };  
        }
    };
}   
function multiply(a, b, c) {
    return a * b * c;
}   
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Output: 24
console.log(curriedMultiply(2, 3)(4)); // Output: 24
// Note: The curriedMultiply function allows for partial application of arguments through currying.

// These examples demonstrate various use cases of closures in JavaScript, highlighting their versatility and power in managing state, encapsulating functionality, and enhancing code organization.

// Example 11: Closure in Asynchronous Code
function fetchData(url) {
    let requestId = Math.random().toString(36).substring(7); // private variable
    return function() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Request ID:', requestId);
                console.log('Data:', data);
            });
    };
}
const getData = fetchData('https://jsonplaceholder.typicode.com/todos/1');
getData();
// Note: The requestId variable is preserved in the asynchronous callback due to closure.   

// Example 12: Closure with setTimeout
function delayedGreeting(name) {
    return function() {
        setTimeout(function() {
            console.log('Hello, ' + name + '!');
        }
        , 1000);
    };
}
const greetJohn = delayedGreeting('John');
greetJohn(); // Output after 1 second: Hello, John!
// Note: The name variable is preserved in the setTimeout callback due to closure.  
// These additional examples further illustrate the power of closures in handling asynchronous operations and preserving state across different execution contexts.


// in which context of a particular object we are in and we are executing the code in that context
// this is a keyword that refers to the execution context of a function. 
// Its value depends on how the function is invoked—whether as a method, constructor, regular function, or arrow function.

// this keyword and window object
// when we invoke a function in the global scope, the value of 'this' is bound to the global object, which is 'window' in browsers. 
// So, when we log 'this' inside a regular function, it will refer to the global object.
console.log("this at the global scope: ",this); // this at the global scope:  Window {...}

function regularFunction() {
    console.log("this inside regular function: ", this); // this inside regular function:  Window {...}
}
regularFunction();

// Inside of an Object - Implicit Binding 
const employee = {
    id: 343,
    firstName: "v",
    lastName: "p",

    returnThis : function(){
        return this;
    },

    getFullName : function() {
        return `${this.firstName} ${this.lastName}`;
// this is bound to the object on which this method is invoked, which is the employee object in this case. 
// So, when we access this.firstName and this.lastName, it will refer to the firstName and lastName properties of the employee object.
    }
}
// when we invoke a method on an object , the value of 'this' is bound to the object on which we have invoked the method.
console.log("Employee Id: ",employee.id); // Employee Id:  343
console.log("this inside the employee object: ",employee.returnThis()); // this inside the employee object:  {id: 343, firstName: 'v', lastName: 'p', returnThis: ƒ}
console.log("Full Name: ",employee.getFullName()); // Full Name:  v p


const tom = {
    name: "Tom",
    age: 30
}
const jerry = {
    name: "Jerry",
    age: 25
}
function greetMe(obj){
    obj.logMessage = function(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
greetMe(tom);
tom.logMessage(); // Tom is 30 years old.

greetMe(jerry);
jerry.logMessage(); // Jerry is 25 years old.


// Inside an Arrow Function - Lexical Binding
// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope at the time they are defined. 
// So, when we use 'this' inside an arrow function, it will refer to the value of 'this' in the enclosing scope.
const person = {
    name: "Alice",
    age: 28,
    regularFunction: function() {
        console.log("this inside regular function: ", this); // this inside regular function:  {name: 'Alice', age: 28, regularFunction: ƒ, arrowFunction: ƒ}
    },
    arrowFunction: () => {
        console.log("this inside arrow function: ", this); // this inside arrow function:  Window {...}
    }   
}
person.regularFunction();
person.arrowFunction();

const food = {
    name: "mango",
    color: "yellow",
    getDesc : function(){
        return () => `${this.name} is ${this.color} in color.`;
    }
}
const descFunc = food.getDesc();
console.log(descFunc());


// Explicit Binding
// we can explicitly set the value of 'this' using call, apply, or bind methods. 
// These methods allow us to specify the context in which a function should be executed.
function displayInfo() {
    console.log(`Employee Name: ${this.firstName} ${this.lastName}, Employee Id: ${this.id}`);
}
displayInfo.call(employee); // Employee Name: v p, Employee Id: 343
displayInfo.apply(employee); // Employee Name: v p, Employee Id: 343    
const boundDisplayInfo = displayInfo.bind(employee);
boundDisplayInfo(); // Employee Name: v p, Employee Id: 343 

// for call - you need to pass agruments one by one
function introduce(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.firstName} ${this.lastName}${punctuation}`);
}
introduce.call(employee, "Hello", "!"); // Hello, I am v p!

// for apply - you need to pass agruments in an array
introduce.apply(employee, ["Hi", "."]); // Hi, I am v p.

// for bind - you can pass arguments one by one or in an array
// you can store the bound function in a variable and invoke it later, and it will always have the same 'this' value.
const boundIntroduce = introduce.bind(employee, "Hey", "?");
boundIntroduce(); // Hey, I am v p?


// implementation of call method
function myCall(func, context, ...args) {
    context = context || globalThis; // Use globalThis for global scope
    const uniqueKey = Symbol(); // Create a unique key to avoid property collision
    context[uniqueKey] = func;
    const result = context[uniqueKey](...args); // Invoke the function with the provided arguments
    delete context[uniqueKey]; // Clean up the temporary property
    return result; // Return the result of the function call
}

// Example usage of myCall
const person1 = {
    name: "Bob",
    age: 35
};
function introducePerson(greeting) {
    return `${greeting}, I am ${this.name} and I am ${this.age} years old.`;
}
const introduction = myCall(introducePerson, person1, "Hi");
console.log(introduction); // Output: Hi, I am Bob and I am 35 years old.


// implementation of apply method
function myApply(func, context, args) {
    context = context || globalThis; // Use globalThis for global scope
    const uniqueKey = Symbol(); // Create a unique key to avoid property collision
    context[uniqueKey] = func;
    const result = context[uniqueKey](...args); // Invoke the function with the provided arguments
    delete context[uniqueKey]; // Clean up the temporary property
    return result; // Return the result of the function call
}

// Example usage of myApply
const obj = {
    name: "Alice",
    age: 28
};
function greet(greeting) {
    return `${greeting}, my name is ${this.name} and I am ${this.age} years old.`;
}
const message = myApply(greet, obj, ["Hello"]);
console.log(message); // Output: Hello, my name is Alice and I am 28 years old. 

// new keyword and this 
const Cartoon = function(name , animal){
    this.name = name;
    this.animal = animal;
    this.log = function(){
        console.log(this.name+ ' is a ' + this.animal);
    }
};
const tomCatoon = new Cartoon("Tom" , "Cat");
tomCartoon.log(); // Tom is a Cat

const jerryCartoon = new Cartoon("Jerry" , "Mouse");
jerryCartoon.log(); // Jerry is a Mouse

// Activity
const user = {
    name : "Tapas",
    greet : function () {
        function inner () {
        // const inner = () => {}
            console.log(`Hello, ${this.name}!`); // Hello, undefined! - because 'this' inside the inner function refers to the global object, not the user object.
        }
        inner();
    }
};
user.greet(); // Hello, undefined!
// To fix this issue, we can use an arrow function for the inner function, which will inherit 'this' from the enclosing scope (the greet method).

const obj = {
    name: "Tapas",
    greet : function () {
        console.log(`Hello, ${this.name}!`);
    }
};
const greetFn = obj.greet;
console.log(greetFn); // [Function: greet]
greetFn(); // Hello, undefined! - because when we invoke greetFn, it is not called as a method of the obj object, so 'this' does not refer to obj. Instead, it refers to the global object (window in browsers), which does not have a name property, resulting in undefined.
// To fix this issue, we can use the bind method to create a new function with 'this' bound to the obj object.
const boundGreetFn = greetFn.bind(obj);
boundGreetFn(); // Hello, Tapas! - because now 'this' inside boundGreetFn refers to the obj object, allowing us to access the name property correctly.
// or we can directly invoke the greet method using call or apply to set the context of 'this' to obj.
greetFn.call(obj); // Hello, Tapas!
greetFn.apply(obj, []); // Hello, Tapas!


// Ultimate Interview Summary
// Scenario:     	            `this` Value:
// Global Scope	                window (browser)
// Object Method	            Calling object
// Regular Function	            window or undefined (strict mode)
// Arrow Function	            Inherited from enclosing scope
// Arrow Function as Method	    Inherited from enclosing scope, not the object
// Constructor Function (new)	Newly created object


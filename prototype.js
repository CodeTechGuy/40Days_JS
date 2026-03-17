const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish () {
        return `${this.name} cooks an ancient family recipe.`;
    },
};

const raj = Object.create(prithviraj);
raj.name = "Raj";
raj.generation = "father";
raj.business = function(){
    return `${this.name} runs a family business.`;
};
console.log(raj);

const ranbir = Object.create(raj);
ranbir.name = "Ranbir";
ranbir.generation = "son";
ranbir.makefilm = function() {
    return `${this.name} directs a blockbuster movies.`;

};

console.log(ranbir);
console.log(ranbir.cookTraditionalDish());
console.log(ranbir.business());
console.log(ranbir.makefilm());


Array.prototype.last = function() {
    return this[this.length - 1];
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // Output: 5
console.log(["ani","bob","charlie"].last()); // Output: "charlie"

Array.prototype.mapTwo = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i += 2) {
        result.push(callback(this[i], this[i + 1]));
    }
    return result;
};

Array.prototype.hitesh = "hitesh";
console.log(numbers.hitesh); // Output: "hitesh"

String.prototype.upperCase = function() {
    return this.toUpperCase();
};
const greeting = "hello world";
console.log(greeting.upperCase()); // Output: "HELLO WORLD"

if (!String.prototype.toUpperCase) {
  String.prototype.toUpperCase = function () {
    // simple ASCII implementation
    let result = "";
    for (let i = 0; i < this.length; i++) {
      const code = this.charCodeAt(i);

      // a-z (97–122) -> A-Z (65–90)
      if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
      } else {
        result += this[i];
      }
    }
    return result;
  };
}


// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method using prototype
Person.prototype.greet = function() {
  return "Hello, my name is " + this.name;
};

// Creating objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Using the prototype method
console.log(person1.greet()); // Hello, my name is Alice
console.log(person2.greet()); // Hello, my name is Bob


function Car(brand) {
  this.brand = brand;
}

// Add method via prototype
Car.prototype.getBrand = function() {
  return "Car brand is " + this.brand;
};

const c1 = new Car("Toyota");
console.log(c1.getBrand());
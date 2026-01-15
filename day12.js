//    Object's

let user = {
    name : "marco" ,
    age: 23,
    "is admin": " configuration required ",
};

// """
// if there are no special character's in the key the js automatically consider's it as a string no need to mention ,
//  if there in case any special character neeed to mention it in string format
// """

console.log(user.age);  // 23

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);

console.log(user["is admin"]);

// to use special character key property you need to use subscripter  eg. object[ "key name" ]   , [] -> subscript notation

user.age = "18";  // updated age value

console.log(user.age);  // 18


//  To delete a key value pair we use "delete" keyword 

// delete user["movie lover"];
// delete user.name ;

// console.log(user);

const sonekay = "age";

let car = prompt("Which is your fav car ? "); // !!!!!!!!!!

let favCars = {
    [car] : 5             // if you want to dynamically take a key which is not hardcoded
}

console.log(favCars);        //     !!!!!!!!!!!!!!!1




// Constructor function
function Car (name , model){       // parameter -> like placeholder where we store the values   ||  arguments -> the actuall value
    this.name = name;
    this.model = model
} 

const bmwCar = new Car ("BMW" ,"competion");
const audiCar = new Car("Audi","S class");
console.log(bmwCar);
console.log(audiCar)

console.log(bmwCar instanceof Car);



//      New Way to declare objects

const person = new Object()
person.name = "Alpha";
person.age = 30;
console.log(person);


//      Factory function
function createUser (name , age ) {
    return {
        name,           // this is a short-Hand
        age,
        greet(){
            console.log("Learning objects 15 Jan 2026 Sankranthi")
        }
    }
}
const user1 = createUser("ashok",60);
console.log(user1);
user1.name;
user1.age;
user1.greet();

const user2 = createUser("bhushan", 54);
console.log(user2);

//  Non premitive --- object , array , function



let profile = {
    name: "ramesh",
    company : "Palantir",
    message : function() {
        console.log(`${this.name} works at ${this.company}`)
    }
}

console.log(profile.name);
console.log(profile.company);

profile.message();




//       Nested object 
profile = {
    name: "ramesh",
    company : "Palantir",
    message : function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city : "Banglore",
        pin: 56032,
        state : "Karnataka",
        country : "India",
        greeting : function() {
            console.log("welcome to karnataka");
        }
    },
    // salary :  undefined   // 500000
}

console.log("-----------about salary property! -------");
console.log("salary" in profile);

if(!profile.salary) {
    console.log("The salary property doesn't exit")
}

console.log("-----------about salary property! -------");


console.log(profile.address)
console.log(profile.address.city)
profile.address.greeting();


//       for  ........ in
for(let key in profile){
    console.log(key);               // only to get key's
    console.log(profile[key]);      // to get key and value both
}

//  getting key's through Object Key word

console.log("              ");

console.log(Object.keys(profile));
console.log(Object.values(profile));
console.log(Object.entries(profile));


//       Object Reference 
let fruit = { name: "mongo" };        //XA01
let oneMoreFruit = { name: "mango" }; //YB02

console.log(fruit == oneMoreFruit);  // false  , because both are different object in memory
console.log(fruit === oneMoreFruit);  // false  , because both are different object in memory

fruit = oneMoreFruit;   // now both are pointing to same object in memory

console.log(fruit == oneMoreFruit);
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



//          Static Methods

const target = {p:1 , q:2};
const source = {a:3 , b:4};

const returnedObj = Object.assign(target , source);   // when Object.assign is used  the value is assigned from src to target
console.log(returnedObj);

const obj1 = {name: "tapas"};
const obj2 = Object.assign({},obj1);
console.log(obj2); // obj1 & obj2 have same value but not the same reference
console.log( obj1 == obj2); // false                // this is Shallow cloning


//      Shallow vs Deep copy
const obj3 = {
    a : 1,
    b : {c: 2}
}
const obj4 = Object.assign({} , obj3);
console.log(obj4);  //  {a: 1, b: {…}}

obj4.b.c = 3;
console.log(obj4.b.c); // 3
console.log(obj3.b.c); // 3    // for nested objects there wont be new references created (..here 'c' is nested object)

obj4.a = 100;
console.log(obj4.a);    // 100
console.log(obj3.a);    // 1    (..here 'a' is non-nested object) for non-nested object it will be creating a new refernce always


//      for Deep clone use structuredClone
const obj5 = structuredClone(obj3);
obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c); // 30
console.log(obj3.b.c); // 2


//      Convert an Object to an Array   --->  use Object.entries();
const myObj = {
    a: "tapas",
    b: 32
};
const myArr = Object.entries(myObj);
console.log(myArr);


//      Convert Map or Array to Object --- use Object.fromEntries 
const entries = new Map ([
    ["foo","bar"],
    ["baz", 42],
]);

const objEntries = Object.fromEntries(entries)
console.log(objEntries);


//      Immutability with freeze()         -- immutable(something you cannot change)  , mutable(you can change)
const emp = {
    sal: 100
};
Object.freeze(emp);
emp.salary = 200;
emp.name = "Alex";
delete emp.salary;
console.log(emp.salary);
console.log(emp);
console.log("-----------")
console.log(Object.isFrozen(emp));          // with freeze you can't add new properties or re-assign new values



//  Immutability with seal()
const dept = {
    name : "finance"
}
Object.seal(dept);                          // with seal similar to freeze only this is you can re-assign value's to property

dept.address = "Banglore";
delete dept.name;

dept.name = "HR";
console.log(dept)                        


//  hasOwn() method
console.log(Object.hasOwn(dept , "name"));      // true
console.log(Object.hasOwn(dept , "address"));   // false


//  object destructuring
console.log("Learn Object Destructuring....")

const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }   
}

const {name, age, meal="bread"} = student ;    // instead of this -- const name = student.name  ( we use destructuring )
// let meal = student.meal? student.meal : "bread"
                // or
// student.meal = "bread";
// const meal = student.meal

const city = student.address.city;
console.log(name, city , age, meal);

//      creating new variable
const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects); // 3



//      Aliases
const {std: standard} = student;
// console.log(std);     // will give error
console.log(standard);


//      Nested objects destructuring

const {address : {zip}} = student  ;                                    // const {address} = student;
                                                                        // const zip = address.zip;
console.log(zip);


const {address: { zip: Jip }} = student;   // Aliases in nested objects
console.log(Jip); // 5791   



//    --------------- Function parameter destructuring -----------------
function sendEmail({parents:{email}}) {
    console.log(`Sending email to ${email}`);
}
sendEmail(student);


// -------------  Destructure a function Return Value -----------------
const getStudent = () => {
    return {
       'name': 'John Williamson',
        'age': 9,
        'std': 3,
        'subjects': ['Maths', 'English', 'EVS'],
        'parents': {
          'father': 'Brown Williamson',
          'mother': 'Sophia',
          'email': 'john-parents@abcde.com'
        },
        'address': {
          'street': '65/2, brooklyn road',
          'city': 'Carterton',
          'country': 'New Zealand',
          'zip': 5791
        }
    }
}

const {name: anotherName , subjects: anotherSubject} = getStudent();                    // const anotherStudent = getStudent();
                                                                                        // const anotherName = anotherStudent.name;
                                                                                        // const anotherSubject = anotherStudent.subjects;

console.log(anotherName , anotherSubject);


//                     Destructuring in loops
const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
];

for( let {name, grade} of students ) {
    console.log(name , grade);
}


//   Optional Chaining
console.log("Optional Chaining...")

const employee = {
    salary: {
        bonus: 300
    }
};

console.log(employee.department); // undefined

//console.log(employee.department.name); // Error

// const name = employee.department && employee.department.name

const NewName = employee.department?.name

console.log(employee.address); // undefined
const NewAddress = employee.address?.street; // undefined
console.log(NewName)
console.log(NewAddress)
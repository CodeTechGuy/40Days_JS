function celToFar(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(celToFar(25))


function MaxOfTwo(num1, num2){
    return num1>num2 ? num1 : num2
}
console.log(MaxOfTwo(70, 20))


function word(str){
    let Palindrome = "It is a Palindrome"
    let NotPalindrome = "It is not a Palindrome"

    for(let i=0;i<str.length;i++){
        if(str[i] != str[str.length-1-i]){
            return NotPalindrome
        }       
    }
    return Palindrome
}
console.log(word("madaam"))


function fact(n){
    while(n==0){
        return 1
    }   
    return n * fact(n-1)
}
console.log(fact(5))

const fac = n => n<=1 ? 1 : n*fact(n-1)
console.log(fac(6))


function VC(str){
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let count = 0

    // let st = str.lowerCase()

    for(let i=0; i<=str.length-1 ; i++){
        if(vowels.includes(str[i])){
            count = count+1
        }
    }
    return count
}
console.log(VC("aeiou"))


function RevStr(str){
    let rev = ""        
    for(let i=str.length-1; i>=0; i--){
        rev = rev + str[i]
    }       
    return rev
}   
console.log(RevStr("hello"))


function sencap(str){
    let senArr = str.split(" ")
    let capSen = [] 
    for(let i=0; i<senArr.length; i++){
        capSen.push(senArr[i].charAt(0).toUpperCase() + senArr[i].slice(1))
    }
    return capSen.join(" ")
}
let sen = "Hello world from javaScript"
console.log(sencap(sen));


(function () {
    // this.word = word
    console.log(`hello, ${this.word}`)
}).call({word:"JavaScript"})



const arr = [1, 2, 3, 4, 5]

const squaredArr = arr.map(function(num){
    return num * num
})
console.log(squaredArr)

const evenArr = arr.filter(function(num){
    return num % 2 === 0
})
console.log(evenArr)

const sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0)
console.log(sum)

const person = {
    firstName: "John",
    lastName: "Doe",        
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(person.fullName())
// bind() creates a new function where `this` is permanently set to the provided object:
const boundFullName = person.fullName.bind({firstName: "Jane", lastName: "Smith"})
console.log(boundFullName())
// call() invokes the function immediately with a specified `this` value and arguments:
console.log(person.fullName.call({firstName: "Alice", lastName: "Johnson"}))
// apply() is similar to call(), but it takes arguments as an array:
console.log(person.fullName.apply({firstName: "Bob", lastName: "Brown"}))
// In the above examples, we demonstrate how `bind()`, `call()`, and `apply()` can be used to change the context of `this` in JavaScript functions.
// `bind()` creates a new function with a permanently bound `this` value, while `call()` and `apply()` invoke the function immediately with a 
//  specified `this` value. The choice between them depends on whether you want to create a new function or invoke it immediately.

// Why use bind()?
// Without bind(), if you store the method in a variable:
// const fn = person.fullName;
// console.log(fn());
// this may be undefined (in strict mode) or the global object (in non-strict mode), causing incorrect results.
// bind() ensures that this always points to the object you specify:
// const fn = person.fullName.bind(person);
// Now fn() will always return "John Doe" regardless of how it's called.

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully")
        }, 1000)
    })
}
fetchData().then(data => console.log(data))
.catch(error => console.error(error))   
async function fetchAsyncData() {
    try {
        const data = await fetchData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
fetchAsyncData()

function greet(name) {
    const requestId = Math.random().toString(36).substring(7)   
    // .toString(36) - Converts the number to a string using base 36.
    // .substring(7) - Extracts a portion of the string starting from index 7 to the end, effectively removing the "0." prefix from the random number.
    setTimeout(function() {
        console.log(`Hello, ${name}! (Request ID: ${requestId})`)
    }, 1000)
}
greet("John") // Asynchronous call to greet, which will print the greeting after 1 second, along with a unique request ID.
greet("Jane")
// Note: The requestId variable is preserved in the asynchronous callback due to closure.

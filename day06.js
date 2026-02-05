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
}
)
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
const boundFullName = person.fullName.bind({firstName: "Jane", lastName: "Smith"})
console.log(boundFullName())
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
greetJohn() // Output after 1 second: Hello, John!
// Note: The requestId variable is preserved in the asynchronous callback due to closure.

function greet(name) {
    const requestId = Math.random().toString(36).substring(7)   
    setTimeout(function() {
        console.log(`Hello, ${name}! (Request ID: ${requestId})`)
    }, 1000)
}
greet("John")

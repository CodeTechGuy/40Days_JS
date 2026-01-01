let num = 9

if(num%2==0){
    console.log(`${num} is Even Number`);
}else{
    console.log(`${num} is Odd Number`);
}

let age=21

age >= 18 ? console.log("You are eligible to have driving license") : console.log("You are not eligible to have driving license");

// if(age>=18){
//     console.log("You are eligible to have driving license");
// } else{
//     console.log("You are not eligible to have driving license");
// }

let monthlySalary = 12300
let annualSalary = monthlySalary * 12
let bonus = 0.2*annualSalary
let totalIncome = annualSalary + bonus
console.log(`Your annual CTC is ${totalIncome}`)


let options = ["green", "red", "yellow"]
let color = options[Math.floor(Math.random() * options.length)]
if(color=="red"){
    console.log("Stop") 
} else if(color=="yellow"){
    console.log("Slow Down")
} else if(color=="green"){
    console.log("Go")
}  


let units = 2
let chargePerUnit = 150
let monthlyUnits = units * 31
let totalMonthlyCharge = monthlyUnits * chargePerUnit
let totalAnnualCharge = (totalMonthlyCharge * 12 )*0.8
console.log(`Your annual electricity bill is ${totalAnnualCharge}`)


let year = 2200
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year} is a Leap Year`);
} else{
    console.log(`${year} is not a Leap Year`);
}

let p = 1
let q = 2
let r = 3

if(p>=q && p>=r){
    console.log(`${p} is the largest number`);
} else if(q>=p && q>=r){
    console.log(`${q} is the largest number`);
} else{
    console.log(`${r} is the largest number`);
}

let count = 5
let singleShift = count << 1

console.log(`The result after left shifting ${count} by 1 is ${singleShift}`);


/* 

abstract syntax tree
source code -> tokenize -> parsing -> AST -> Machine code

&& - can first option be converted to false return false	
     can't convert first option then return second option

?? - null/undefined 

*/
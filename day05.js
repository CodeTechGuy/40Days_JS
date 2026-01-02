let pattern = "";

for(let i=1 ; i<6; i++){
    for(let j=1; j<=i ; j++){
        pattern += "*"
    }
    pattern += "\n"
}

console.log(pattern)

let num=3
for(let i=1 ; i<=10 ; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}


let sum = 0
for(let i=1 ;i<=500 ;i++){
    i%2!=0 ? sum +=i : null 
    
}
console.log(`The sum of odd numbers from 1 to 500 is: ${sum}`);

for(let i = 1; i<=20 ; i++ ){
    i%3!=0 ? console.log(i) : null
}


let dig = 6789
let rev = 0

while(dig>0){
    let rem = dig%10
    rev = rev*10 + rem
    dig = Math.floor(dig/10)
}

console.log(`The reverse of the number is: ${rev}`)
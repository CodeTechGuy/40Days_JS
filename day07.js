let compNum = Math.floor(Math.random() * 10) + 1

function userinp(){
    return Number(prompt("Guess a number between 1 and 10 : "))
}
let guessedCorrectly = false;


for(let i=1; i<=5; i++){

    let userNum = userinp();
    // while(userNum != compNum){
        if(userNum < compNum){
            console.log("Too low! attempt's left: " + (4 - i));
            
        
            // continue;
        }
        else if(userNum > compNum){
            console.log("Too high! attempt's left: " + (4 - i));
            
            // continue;
        }
        else {
            console.log("Congratulations! You guessed the correct number: " + compNum);
            guessedCorrectly = true;
            break;
        }
    // }
}

if(!guessedCorrectly){
    console.log("you were not able to find right answer")
}
// console.log("Congratulations! You guessed the correct number: " + compNum);

function VC(str){
    let count = 0
    let vowels = "aeiouAEIOU"
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++
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


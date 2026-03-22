function init(){
    let name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();

function makeFunction(){
    const name = "Mozilla-01";
    function displayName (){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunction();// this holds only displayName func
// because makeFunction() returns displayName function only
myFunc();


function startCompany(){
    function ca(name){
        return `Name of your company is ${name}`
    }
    return ca;
}

const getMeACompany = startCompany();
const myCompanyName = getMeACompany("Zomato");

function eternal(guest){
    const guestName = guest;
    let count = 0;
    function zomato(){
        console.log(`Hi ${guestName}, from zomato`);
    }

    function blinkit(){
        if(count==1) return;
        console.log(`Hi ${guestName}, from blinkit`);
        count++;
    }
    // zomato();
    // blinkit();

    return {
        zomato,blinkit
    };
}

const hitesh = eternal("hitesh");
const piyush = eternal("piyush");


// for(var i=0;i<3;i++){
//     (function(j){
//         setTimeout(function (){  //IIFE creates a new scope for each iteration, 
//             console.log(j);      //allowing closures to capture a separate copy of the variable.
//         },1000)
//     })(i);
// } 

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();

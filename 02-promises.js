// console.log("Swasthik");
// Promise.resolve("resolved value").then((v) => {
//     console.log("Microtask ",v);
// });
// console.log("Abhay");


function boilWater(ms){
    return new Promise((res, rej)=>{
        console.log("start Boiling water");
        if(typeof ms !== "number" || ms < 0) {
            rej(new Error("ms must be number and greater than zero"));
        }
        setTimeout(() => {
            res("water Boiled");
        },ms);
    });
}

boilWater(200)
.then((msg)=> console.log("Resolved",msg))
.catch((err)=> console.log("Rejected ",err.message));

function grindLeaves(){
    return Promise.resolve("Leaves grounded");
}
function steepTea(time){
    return new Promise((res)=>{
        setTimeout(()=> res("Steeped Tea"), time);
    });
}

function addSugar(spoons){
    return `Added ${spoons} sugar`
}

grindLeaves()
.then((val)=>{
    console.log(val);
    steepTea(5000).then(console.log)
})

console.log("typeof NaN ",0 == false);

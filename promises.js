// single threaded language

function prepareOrderCB(dish , cb){
    setTimeout(() => cb(null, {dish , status: "prepared"}) , 100)
}
function pickupOrderCB(order , cb){
    setTimeout(() => cb(null, {...order, status: "pickedd-up"}) , 100)
}
function deliverOrderCB(order , cb){
    setTimeout(() => cb(null, {...order , status: "delivered"}) , 100)
}

prepareOrderCB("Butter",(err, order) => {
    if(err) return console.log(err);
    pickupOrderCB(order , (err, order) => {
        if(err) return console.log(err);
        deliverOrderCB(order, (err, order) => {
            if(err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`);
        });
    });
});

// pending , fulfilled , rejected 
function prepareOrder(dish){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!dish) {
                reject (new Error("No dish is there"));
                return 
            }
            console.log(`${dish} is ready`);
            resolve({dish , status: "prepared"});
        },100);
    })
}

function pickupOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!order) {
                reject (new Error("No order is there"));
                return 
            }
            console.log(`${order} is ready`);
            resolve({...order , status: "prepared"});
        },100);
    })
}

function deliverOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!order) {
                reject (new Error("No order is there"));
                return 
            }
            console.log(`${order} is ready`);
            resolve({...order , status: "delivered"});
        },100);
    })
}

prepareOrder("Chai")
    .then(order => pickupOrder(order))
    .then(order => deliverOrder(order))
    .catch()


// pending , done(fulfil , resolve) , nope(not , reject )  

// const  promise = new Promise((resolve , reject) => {
//     // resolve("chaicode");
//     setTimeout(()=>{
//         // resolve("v")
//         reject(new Error("i"));
//     }, 2000)
// });
// console.log(promise);
// setTimeout(()=> {
//     console.log(promise);
// },3000);

// promise.then((value)=>{
//     console.log(value);
// });

// promise.then(console.log);

// promise.then(
//     (data)=> console.log(data),
//     (error)=> console.log(error)
// )

// promise
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))

// promise
// .then((data)=>{
//     newData = data.toUpperCase();
//     return newData;
// })
// .then((data) =>{
//     return data + ".com";
// })
// .then(console.log)
// .catch((error)=> {
//     console.log(error)
//     return "chai";
// })
// .then(console.log);

const turant = Promise.resolve("Turant");
console.log(turant);

setTimeout(()=>{

    const allPromise = Promise.allSettled([
        Promise.resolve("Chai"),
        Promise.resolve("Code"),
        Promise.reject("Chai - Error")
    ]);
    // allPromise.then(console.log);
},500);


const hPromise = new Promise((res, rej) => {
    setTimeout(()=>{
        // res("Masterji");
        rej(new Error("Masterji error"));
    },2000);
});

async function nice() {
    try{
        const result = await hPromise;
        console.log(result);
    } catch(error){
        console.log("Error occured ",error.message);
    }
}
nice();

// const newResult = await hPromise;  // await is now global 
// console.log(newResult);  // but dont use 

setTimeout(()=>{
    console.log("puyya bhai");
},4000);

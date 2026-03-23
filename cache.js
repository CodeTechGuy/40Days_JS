// const cache = {};
// const sqCache = {};

// function add(a,b){
//     const key = `${a}:${b}`;
//     if(cache[key]){
//         return `returned from cache `,cache[key];
//     }

//     const result = a+b;
//     cache[key] = result;
//     return result;
// }

// function square(n){
//     const key = `${n}`;
//     if(sqCache[key]){
//         return sqCache[key];
//     }
//     const result = n*n;
//     cache[key] = result;
//     return result;
// }

function createOptimizedVersion(fn){
    const cache = {

    } // Tiffin

    return function(...args) {
        const key = JSON.stringify(args);
        if(cache[key]) {
            console.log("returning from the cache ", key);
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function add(a,b){
    const result = a+b;
    return result;
}
function square(n){
    return n*n;
}

const optimisedAdd = createOptimizedVersion(add);
const optimizedSquare = createOptimizedVersion(square);

console.log("--------------")


console.time("startCode");
square(890000000000000000000000000000000000000000);
console.timeEnd("startCode");
console.time("startCode");
square(890000000000000000000000000000000000000000);
console.timeEnd("startCode");
console.time("startCode");
square(890000000000000000000000000000000000000000);
console.timeEnd("startCode");


const optimisedSquare = createOptimizedVersion(square);
console.log("--------------")


console.time("startCode");
optimisedSquare(890000000000000000000000000000000000000000);
console.timeEnd("startCode");
console.time("startCode");
optimisedSquare(890000000000000000000000000000000000000000);
console.timeEnd("startCode");
console.time("startCode");
optimisedSquare(890000000000000000000000000000000000000000);
console.timeEnd("startCode");


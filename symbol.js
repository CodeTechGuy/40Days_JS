const aadhar_of_mayur = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");

console.log(typeof aadhar_of_mayur);
console.log(aadhar_of_mayur === aadhar_of_piyush);
console.log(aadhar_of_mayur.toString());
console.log(aadhar_of_mayur.description);
console.log(aadhar_of_mayur)


const nonIndian = Symbol();
console.log(nonIndian.description);

const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const citizenRecord = {
    name: "Ved Pandey",
    age: 21,
    [biometricHash]: "a7yknf",
    [bloodGroup]: "O+",
}

console.log(Object.keys(citizenRecord)); // Output: [ 'name', 'age' ] symbol is not visible property

console.log(Object.getOwnPropertySymbols(citizenRecord));


const rtiQueryBook = {
    queries : ["Infra budget","Ration Card","Education Budget","Startup laws"],
    [Symbol.iterator](){
        let index = 0 ;
        const queries = this.queries;
        return {
            next() {
                if(index<queries.length){
                    return {value:queries[index++], done:false};
                }
                return {value: undefined, done: true};
            }
        }
    }
};
for (const query of rtiQueryBook){ // rtiQueryBook is not iterable
    console.log(`Filing RTI: ${query}`);
}


const governmentScheme = {
    name: "PM Kisan Yojna",
    people: 54,
    [Symbol.toPrimitive](hint){
        if(hint==="string") return this.name;
        if(hint==="number") return 88;
    }
}
console.log(+governmentScheme); // + to convert to number
console.log(`${governmentScheme}`); // to convert to string


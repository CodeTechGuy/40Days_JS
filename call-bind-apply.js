// call and apply ==> basic chef(kitchen)
// bind ==> master chef (kitchen + ingredients)

function cookDish(ingredient, style){
    return `${this.name} prepares ${ingredient} in ${style} style.`;
}

const sharmaKitchen = {name: "Sharma Kitchen"};
const guptaKitchen = {name: "Gupta Kitchen"};

console.log(cookDish.call(sharmaKitchen, "Pasta", "Italian"));

const guptaOrder = ["Chole Kulche", "Punjabi"];
console.log(cookDish.apply(guptaKitchen, guptaOrder));


const bills = [100, 200, 300];
const maxBill = Math.max.apply(null, bills);
console.log(maxBill);


function reportDelivery(location, status){
    return `${this.name} at ${location} : ${status}`;
}
const deliveryBoy = {name: "Ranveer"};
console.log("Call: ", reportDelivery.call(deliveryBoy, "New York", "Delivered"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Los Angeles", "In Transit"]));
console.log("Bind: ", reportDelivery.bind(deliveryBoy, "Chicago", "Out for Delivery")());

const bindReport = reportDelivery.bind(deliveryBoy, "Chicago", "Out for Delivery1");
console.log("Bind: ", bindReport());
console.log(bindReport("Houston", "Delayed")); // bind will ignore the new arguments and use the ones provided during binding.


const bindReport2 = reportDelivery.bind(deliveryBoy, "Chicago");
console.log("Bind: ", bindReport2( "Out for Delivery2"));

const bindReport3 = reportDelivery.bind(deliveryBoy);
console.log("Bind: ", bindReport3("Chicago" , "Out for Delivery3"));

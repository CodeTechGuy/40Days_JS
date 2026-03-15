function ranveerWithNoScript() {
    "use strict";

    return this;
}
console.log(ranveerWithNoScript());

const bollywoodFilm = {
    name: "Bajirao mastani",
    lead : "Ranveer Singh",

    introduce() {
        return `This is ${this.name} starring ${this.lead}`;
    }
};
console.log(bollywoodFilm.introduce());

const filmDirector = {
    name: "Sanjay Leela Bhansali",
    cast: ["Ranveer Singh", "Deepika Padukone", "Priyanka Chopra"   ],

    announceCast() {
        this.cast.forEach((actor) =>{
            console.log(`${this.name} introduces ${actor}`);    // this is a detached function, so this will not work as expected. 
            // We can use arrow function to solve this issue as arrow function does not have its own this and it will use the this of the enclosing scope which is filmDirector in this case.
        }) ;                                  
    }
};
filmDirector.announceCast();

const filmSet = {
    crew: "Spot boys",
    prepareProps() {
        console.log(`Outer this.crew: ${this.crew}`); // this will work as expected because this inside prepareProps will refer to the filmSet object.

        function arrangeChairs(){
            console.log(`Inner this.crew: ${this.crew}`);
        }
        arrangeChairs(); // this will not work as expected because this inside arrangeChairs will refer to the global object and not the filmSet object.

        const arrangeLights = () => {
            console.log(`Arrow this.crew: ${this.crew}`); // this will work as expected because arrow function does not have its own this and it will use the this of the enclosing scope which is filmSet in this case.
        };
        arrangeLights();
    }
};

filmSet.prepareProps();



// Detached Methods

const actor = {
    name: "Ranveer Singh",
    bow(){
        return `${this.name} is bowing to the audience.`;   
    }
}

const detachedBow = actor.bow;
console.log(detachedBow()); // this will not work as expected because this inside detachedBow will refer to the global object and not the actor object.
// this will log undefied
// To fix this issue we can use bind method to bind the this of detachedBow to the actor object.
const boundBow = detachedBow.bind(actor);
console.log(boundBow()); // this will work as expected because this inside boundBow will refer to the actor object.


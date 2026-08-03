"use strict";
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    // __proto__: animal
};
Object.setPrototypeOf(rabbit, animal);

rabbit.eat();

console.log("rabbit", rabbit);
console.log("animal", animal);

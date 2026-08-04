"use strict";

let hamster = {
    // stomach: [],

    // eat(food) {
    //     this.stomach.push(food);
    // }
    eat: function (food) {
        if (this.stomach === undefined) {
            this.stomach = [];
        }
        this.stomach.push(food);
    }
};

let speedy = {
    // __proto__: hamster
};
Object.setPrototypeOf(speedy, hamster);

let lazy = {
    // __proto__: hamster
};
Object.setPrototypeOf(lazy, hamster);

// This one found the food
speedy.eat("apple");
speedy.eat("apple");
console.log("speedy.stomach", speedy.stomach); // apple

// This one also has it, why? fix please.
console.log("lazy.stomach", lazy.stomach); // apple

console.log("Object.getPrototypeOf(speedy)", Object.getPrototypeOf(speedy));
console.log("Object.getPrototypeOf(lazy)", Object.getPrototypeOf(lazy));

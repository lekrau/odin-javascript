function Person(name) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function () {
    console.log(`My marker is "${this.marker}"`);
};

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// player1.sayName(); // logs "steve"
// player2.sayName(); // logs "also steve"

// console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
// console.log(Object.getPrototypeOf(player2) === Player.prototype); // returns true

// // Player.prototype.__proto__
// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // true
// // Output may slightly differ based on the browser
// console.log(player1.valueOf()); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

// console.log(player1.hasOwnProperty("valueOf")); // false
// console.log(Object.prototype.hasOwnProperty("valueOf")); // true
// console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

// console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Player.prototype)); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is "X"
player2.getMarker(); // My marker is "O"

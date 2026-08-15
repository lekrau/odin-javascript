"use strict";

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;
// }
// console.log(x);

// if (Math.random() > 0.5) {
//     const x = 1;
// } else {
//     const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
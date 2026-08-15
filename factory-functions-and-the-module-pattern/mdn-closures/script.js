"use strict";

// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }

//     return {
//         increment() {
//             changeBy(1);
//         },

//         decrement() {
//             changeBy(-1);
//         },

//         value() {
//             return privateCounter;
//         },
//     };
// })();

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.

function makeCounter() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
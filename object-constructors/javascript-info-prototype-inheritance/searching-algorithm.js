"use strict";

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

// 1. Prototype chain: pockets → bed → table → head
Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(pockets.pen);
console.log(bed.glasses);

const executions = 100000;
console.time("pockets.glasses");
for (let i = 0; i < executions; i++) {
    pockets.glasses
}
console.timeEnd("pockets.glasses");
console.time("head.glasses");
for (let i = 0; i < executions; i++) {
    head.glasses
}
console.timeEnd("head.glasses");
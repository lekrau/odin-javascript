"use strict";

// const age = 100;

// function go() {
//     const myAge = 200;
//     const hair = 'blonde';
//     console.log(age);
//     console.log(hair);
// }

// go();

// function isCool(name) {
//     let cool;

//     if (name === 'wes') {
//         cool = true;
//     }

//     console.log(cool);
//     return cool;
// }

// isCool("wes");

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

function logDog(dog) {
    console.log(dog)
}

function go() {
    const dog = 'sunny';
    logDog('sunny');
}

go();

function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase());
    }

    yell();
}

yell();
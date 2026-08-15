"use strict";

function showHelp(help) {
    document.getElementById("help").textContent = help;
}

// function makeHelpCallback(help) {
//     return function () {
//         showHelp(help);
//     };
// }

function setupHelp() {
    const helpText = [
        { id: "email", help: "Your email address" },
        { id: "name", help: "Your full name" },
        { id: "age", help: "Your age (you must be over 16)" },
    ];

    // for (let i = 0; i < helpText.length; i++) {
    //     // (function () {
    //     // Culprit is the use of `var` on this line
    //     const item = helpText[i];
    //     document.getElementById(item.id).onfocus =
    //         function () { showHelp(item.help); };
    //     // })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
    //     // makeHelpCallback(item.help);
    // }

    // for (const item of helpText) {
    //     document.getElementById(item.id).onfocus = () => {
    //         document.getElementById("help").textContent = item.help;
    //     };
    // }

    helpText.forEach((item) => {
        document.getElementById(item.id).onfocus = () => {
            showHelp(item.help);
        };
    });
}

setupHelp();
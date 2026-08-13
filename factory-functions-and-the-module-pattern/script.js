"use strict";

function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => { reputation++; };

    return { name, discordName, getReputation, giveReputation };
}

// function createPlayer(name, level) {
//     const { getReputation, giveReputation } = createUser(name);

//     const getLevel = () => level;
//     const increaseLevel = () => { level++; };
//     return {
//         name,
//         getReputation,
//         giveReputation,
//         getLevel,
//         increaseLevel,
//     };
// }

function createPlayer(name, level) {
    const user = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => { level++; };
    return Object.assign({}, user, { getLevel, increaseLevel });
}

const leon = createPlayer("leon", 1);
console.log(leon);

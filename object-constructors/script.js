function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name);
    };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs "steve"
player2.sayName(); // logs "also steve"

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (this.read) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false)
console.log(theHobbit);
console.log(theHobbit.info);
console.log(theHobbit.info());
theHobbit.read = true;
console.log(theHobbit.info());
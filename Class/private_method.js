class Human {
    name = "Supawit";
    #getName() {
        return this.name;
    }
}

const human = new Human();
console.log(human.getName); // undefined
console.log(human.#getName); // SyntaxError: Private field '#getName' must be declared in an enclosing class
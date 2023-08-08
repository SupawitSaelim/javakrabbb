class Human {
    #name = undefined;
    #age  = undefined;
    constructor(name="N/A", age=0) {
        this.#name = name;
        this.#age  = age;
    }
    increaseAge() {
        this.#age++;
    }
    getInfo(){
        console.log(`Name: ${this.#name}, Age: ${this.#age}`);
    }
}

const person = new Human('supawit',22);
person.increaseAge();
person.increaseAge();
person.getInfo();
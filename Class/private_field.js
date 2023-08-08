//Private field use # before field name. we can't access private field from outside class
class MyClass {
    #species = 'Homosapiens';
    name = 'supawit';
}
const student = new MyClass();
console.log(student);
console.log(student.name);
console.log(student.species); // undefined
console.log(student.#species); // SyntaxError: Private field '#species' must be declared in an enclosing class
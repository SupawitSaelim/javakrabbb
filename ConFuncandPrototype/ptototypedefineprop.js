function MyConstructor(name) {
    this.name = name;
}
MyConstructor.prototype.age = 14;

const myObject = new MyConstructor('Supawit');
console.log(myObject.age);

const youObject = new MyConstructor('Phichamon',21);
console.log(youObject.age);

MyConstructor.prototype.age = 30;
console.log(myObject.age);
console.log(youObject.age);


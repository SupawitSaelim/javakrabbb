function MyConstructor(name, age){
    this.name = name;
    this.age = age;
}
MyConstructor.prototype.myMethod = function(){
    console.log('Hello, this function from prototype');
}

const myObject = new MyConstructor('Supawit', 22);
console.log(myObject);

const youObject = new MyConstructor('Phichamon', 21);
console.log(youObject);

console.log(myObject.myMethod === youObject.myMethod);

function MyConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
}

const obj = new MyConstructor('Supawit', 22);
console.log(obj);

const obj2 = new MyConstructor('Supawit', 22);
console.log(obj2);

console.log(obj.sayHi === obj2.sayHi) //false cause มันไม่ได้เป็น prototype แล้ว
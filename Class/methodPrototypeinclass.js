//method อยู่ใน class จะเป็น method prototype
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myMethod() {
        console.log(this.name, this.age);
    }
}

const myObject = new MyClass('Supawit', 22);
console.log(myObject)
console.log(myObject.myMethod === MyClass.prototype.myMethod) 

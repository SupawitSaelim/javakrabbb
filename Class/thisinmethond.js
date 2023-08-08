class MyClass {
    constructor(param, param2) {
        this.myProperty = param;
        this.age = param2;
    }
    getInfo() {
        console.log(this);
        console.log(this.myProperty);
    }
}

const myObject = new MyClass('Hello javascript', 22);
myObject.getInfo();
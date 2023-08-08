class MyClass {
    counter = 0;
    getCounter() {
        console.log(`counter: ${this.counter}`);
    }
    increaseCounter(num = 0) {
        this.counter += num;
        this.getCounter();
    }
    decreaseCounter(num = 0) {
        this.counter -= num;
        this.getCounter();
    }
}
const myObject = new MyClass();
myObject.increaseCounter(10);
myObject.decreaseCounter(5);

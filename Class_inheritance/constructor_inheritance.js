class MyParent {
    constructor(name) {
        this.name = name
    }
}
class MyChildren extends MyParent {}

const obj = new MyChildren('John')
console.log(obj.name) 
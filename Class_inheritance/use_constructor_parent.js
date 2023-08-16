class MyParent {
    constructor(name) {
        this.name = name
    }
}
class MyChildren extends MyParent {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

const parentObj = new MyParent('Messi')
console.log(parentObj)
const childObj = new MyChildren('Messi', 20)
console.log(childObj)
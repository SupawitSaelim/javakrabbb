//use instanceof to check
class MyParent {}
class MyChildren extends MyParent {}

const obj = new MyChildren()
const check1 = obj instanceof MyParent
const check2 = obj instanceof MyChildren

console.log(check1)
console.log(check2)

class superchildren extends MyChildren {}
const check3 = obj instanceof MyParent
console.log(check3)
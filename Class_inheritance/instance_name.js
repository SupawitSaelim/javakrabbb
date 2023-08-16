//check instance name is made from what class

class MyParent {}
class MyChildren extends MyParent {}

const obj = new MyChildren

if (obj.constructor.name === 'MyParent') {
    console.log(`This instance is: MyParent class`)
}else if (obj.constructor.name === "MyChildren") {
    console.log(`This instance is: MyChildren class`)
}


//rewrite old method 

class MyParent {
    chineseMethod() {
        console.log(`Old Chinese cooking`)
    }
}
class MyChildren extends MyParent {
    chineseMethod() {
        console.log(`New Chinese cooking`)
    }
}

const obj = new MyChildren()
obj.chineseMethod()
// New Chinese cooking
 


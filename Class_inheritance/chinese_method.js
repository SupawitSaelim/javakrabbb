// share mothod from parent class to children class

class MyParent {
    chineseMethod() {
        console.log(' Chinese cooking from MyParent')
    }
}
class MyChildren extends MyParent {
    japaneseMethod() {
        console.log(' Japanese cooking from MyChildren')
    }
}

const obj = new MyChildren()
obj.chineseMethod()
obj.japaneseMethod()
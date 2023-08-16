//use super to call parent method

class MyParent {
     first(){
        console.log('This is first method from MyParent')
    }
}
class MyChildren extends MyParent {
    second() {
        super.first()
    }
}

const obj = new MyChildren()
obj.second()


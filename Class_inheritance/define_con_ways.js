class MyClass {
    constructor(){
        console.log(arguments) //check arguments
        if (arguments.length === 0) {
            this.name = 'N/A'
            this.age = 0
        }else if (arguments.length === 1 ){
            this.name = (typeof arguments[0] === 'string')? arguments[0] : 'N/A'
            this.age = 0
        }else if (arguments.length === 2) {
            this.name = (typeof arguments[0] === 'string') ? arguments[0] : 'N/A'
            this.age = (typeof arguments[1] === 'number')? arguments[1] : 0
        }
    }
}
const objA = new MyClass()
const objB = new MyClass('supawit')
const objC = new MyClass('supawit',22)
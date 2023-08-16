class Vehicle {
    constructor(){
        this.color = 'red'
    }
    move(){
        console.log('I can move!!')
    }
}

class Car extends Vehicle {}

const myCar = new Car()
myCar.move()
console.log(myCar.color)
const MyMixin = {
    feel() {
        console.log(`I can feel.`)
    }
}

class Robot {
    constructor(model, SerialNumber ){
        this.batter = 100;
        this.model = model;
        this.SerialNumber = SerialNumber;
    }
}

class Human {
    constructor(name){
        this.name = name;
    }
}

Object.assign(Robot.prototype, MyMixin);
Object.assign(Human.prototype, MyMixin);

const robot = new Robot('David','KS-001');
const person = new Human('Supawit');

robot.feel();
person.feel();




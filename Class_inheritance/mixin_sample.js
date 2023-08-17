const MyMixin = {
    feel() {
        console.log(`I can feel.`)
    }
}

class Robot {
    constructor(model, SerialNumber ){
        this.batter = 100;
        this.model = model
    }
}
function MyConstructor() {
    this.objMethod = function(){
        console.log('From object method');
    };
}
MyConstructor.prototype.propMethod = function(){
    console.log('From prototype method');
}

const myObject = new MyConstructor();
console.log(myObject);
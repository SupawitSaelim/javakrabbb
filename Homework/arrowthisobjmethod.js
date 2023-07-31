// test arrow function and this object method
const myObj = {
    data:1,
    myinfo(){
        console.log('------');
        console.log(this);
        console.log(this.data);
    },
    myinfo2:()=>{
        console.log('------');
        console.log(this);
        console.log(this.data);
    }
};

myObj.myinfo();
myObj.myinfo2();

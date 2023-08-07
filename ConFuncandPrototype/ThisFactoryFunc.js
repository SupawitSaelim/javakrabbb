function MyFactory(param) {
    const Myobj = new Object();
    Myobj.fistProp = param; // firstProp คือ property ของ Myobj ที่มีค่าเท่ากับ param
    Myobj.secondProp = 2
    Myobj.theMethod = function() {
        console.log(`firstProp: ${this.fistProp}`);
    };
    return Myobj;
};

const obj = MyFactory('Supawit');
console.log(obj);

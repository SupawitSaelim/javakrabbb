//Constructor Function  คือ การสร้าง Object โดยใช้ Function และ new keyword ต่างจาก Factory Function ที่ไม่ต้องใช้ new keyword
/*
function MyConstructor(param) {
    this.prop = param;
    this.method = function() {
        // statement
    };
}

การเรียกใช้งาน Constructor Function จะต้องใช้ new keyword  เสมอ
const obj = new MyConstructor('Supawit');
นิยมตังชื่อ Constructor Function แบบ Camel Case 
*/
function MyConstructor(nameParam, ageParam){
    this.name = nameParam;
    this.age = ageParam;
    //สังเกตว่าไม่มี return 
}
const obj = new MyConstructor('supawit', 22);
const test_no_new = MyConstructor('supawit', 22, 33);

console.log(obj);
console.log(test_no_new); 



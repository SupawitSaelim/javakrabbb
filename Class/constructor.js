/*
class class_name {
    constructor(param1, param2) {
        this.propertyname = param1;
        this.propertyname = param2; 
    }
}
constructor คือ method ที่จะถูกเรียกใช้งานเมื่อมีการสร้าง object ขึ้นมา โดยจะรับ parameter ที่ส่งเข้ามาในการสร้าง object 
เป็นการกำหนดค่าเริ่มต้นให้กับ property ของ object ที่ถูกสร้างขึ้นมา โดยจะเขียนในรูปแบบของ method ภายใน class โดยมีชื่อว่า constructor
*/
class MyFirstClass {
    constructor(param) {
        console.log(this)
        console.log(param)
    }
}
const myObject = new MyFirstClass('Hello javascript')


class MyFirstClass2 {
    constructor(param, param2) {
        this.name = param;
        this.age = param2;
    }
}
const student = new MyFirstClass2('Supawit saelim', 22);
console.log(student.name + ' ' + student.age);
class MyFirstClass{
    name = 'Supawit';
    age = 22;
}

const student = new MyFirstClass();
let studentName = MyFirstClass.name;
console.log(studentName);

/*
ความต่างระหว่าง . กับ []
. จะใช้เมื่อเราทราบชื่อ property ที่เราจะเข้าถึง
[] จะใช้เมื่อเราไม่ทราบชื่อ property ที่เราจะเข้าถึง
*/
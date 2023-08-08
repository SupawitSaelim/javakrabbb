function MyConstructor() {  
    this.obj = 'From object property'; 
}

MyConstructor.prototype.centerProp = 'From prototype property';
MyConstructor.prototype.secontProp = 'From prototype property';

const myobj = new MyConstructor();
console.log(myobj);

for (i in MyConstructor.prototype){
    console.log(`inside prototype ${i}: ${MyConstructor.prototype[i]}`);
}

/* line 1 : สร้าง Constructor Function ชื่อ MyConstructor
line 2 : สร้าง property ชื่อ obj ใน Constructor Function
line 4 : สร้าง property ชื่อ centerProp ใน prototype ของ MyConstructor
line 6 : สร้าง Object ชื่อ myobj จาก Constructor Function ชื่อ MyConstructor
line 7 : แสดงผลลัพธ์ myobj ที่สร้างจาก Constructor Function ชื่อ MyConstructor
ใช้ web console ดูผลลัพธ์
*/
class MyClass {
    name = 'supawit';
    age = 22;
    address = '400'
    mymethon(){
        console.log('Hello this message from method')
    }
}

const myObject = new MyClass();
console.log(myObject);

delete myObject.address;
delete myObject['age'];
delete myObject['sirname'] // ไม่มี property ชื่อ sirname อยู่ใน object 
console.log(myObject);
myObject.mymethon(); // เรียกใช้ method ที่ชื่อ mymethon ภายใน object ที่ชื่อ myObject
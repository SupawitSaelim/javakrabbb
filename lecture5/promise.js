function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('Done!!');
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log('Also Done!!');
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log('Error!!');
    });

/*
    โค้ดที่ให้มาเป็นตัวอย่างการใช้ Promise ในการจัดการกับ asynchronous code
    ที่มีการใช้ `setTimeout` เพื่อทำให้โค้ดทำงานในลำดับที่เหมาะสม โดยใช้ `.then()` เพื่อเรียกงานที่ต้องรอให้เสร็จก่อน
    และ `.catch()` เพื่อจัดการกับข้อผิดพลาด (error) ที่อาจเกิดขึ้นในระหว่างการทำงาน

1. `promiseTimeout(ms)` เป็นฟังก์ชันที่รับเวลา (ms) และสร้าง Promise ที่จะ resolve เมื่อเวลาผ่านไป `ms` มิลลิวินาที
 โดยใช้ `setTimeout` ในการกำหนดเวลา

2. `promiseTimeout(2000)` สร้าง Promise ที่จะ resolve หลังจากผ่านไป 2 วินาที และเมื่อ Promise นี้ resolve จะทำงานใน `.then()` ต่อไป

3. `.then(() => { ... })` ในบล็อกนี้เมื่อ Promise ก่อนหน้า resolve จะทำงาน โดยจะแสดง 'Done!!'
 และจากนั้นเรียก `promiseTimeout(1000)` เพื่อสร้าง Promise ใหม่ที่จะ resolve หลังจากผ่านไป 1 วินาที

4. `.then(() => { ... })` ในบล็อกนี้เมื่อ Promise ก่อนหน้า resolve จะทำงาน โดยจะแสดง 'Also Done!!'
 และจากนั้นจะเรียก `Promise.resolve(42)` ซึ่งจะสร้าง Promise ที่ resolve ค่าเป็น 42

5. `.then((result) => { ... })` ในบล็อกนี้จะทำงานเมื่อ Promise ก่อนหน้า resolve จะทำงาน 
และจะแสดงผลลัพธ์ที่ได้รับจาก `Promise.resolve(42)` ซึ่งคือ 42

6. `.catch(() => { ... })` ในบล็อกนี้จะทำงานเมื่อเกิดข้อผิดพลาดในระหว่างที่ Promise ใดๆ ในลำดับการทำงานมีข้อผิดพลาด 
ในที่นี้ไม่ได้ระบุว่าเกิดข้อผิดพลาดอะไร แต่จะแสดง 'Error!!'

ดังนั้นเมื่อโค้ดทำงานจบ ผลลัพธ์ที่คาดหวังคือ:
1. แสดง 'Done!!' หลังจากผ่านไป 2 วินาที
2. แสดง 'Also Done!!' หลังจากผ่านไปอีก 1 วินาที
3. แสดงผลลัพธ์ 42

ถ้าเกิดข้อผิดพลาดในระหว่างกระบวนการใดๆ ในลำดับการทำงาน จะแสดง 'Error!!' แทน

*/
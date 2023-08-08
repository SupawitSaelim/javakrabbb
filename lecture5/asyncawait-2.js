function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    // logic
    return 42;
}

async function run() {
    console.log('Start!!');
    await promiseTimeout(2000);
    const response = await longRunningOperation();  // ใส่ await ไว้หน้า longRunningOperation() เพื่อรอให้ Promise ใน longRunningOperation() resolve เสร็จก่อน
    console.log(response);
    console.log('Done!!');
}

run();

/*
แน่นอน! ลองเราจะลงมาดูขั้นตอนการทำงานของโค้ดในระหว่างการเรียกใช้ฟังก์ชัน `run()` โดยใช้ `async/await`:

1. เริ่มทำงานในฟังก์ชัน `run()` และแสดงผลลัพธ์ 'Start!!'
2. เรียกใช้ `await promiseTimeout(2000);` เพื่อรอให้ผ่านไป 2 วินาที
   - จะเริ่มทำงานใน `promiseTimeout(2000)` และสร้าง Promise ที่จะ resolve หลังจากผ่านไป 2 วินาที
   - ก่อนที่จะผ่านไป 2 วินาที ฟังก์ชัน `promiseTimeout(2000)` จะรอให้ผ่านไปตามเวลาที่กำหนด
   - เมื่อผ่านไป 2 วินาที ฟังก์ชัน `resolve` ใน Promise จะถูกเรียก ทำให้ Promise นี้เสร็จสิ้น (resolve)
   - เนื่องจากมี `await` ที่รอ Promise นี้ โค้ดจะหยุดการทำงานที่จุดนี้และรอให้ Promise resolve เสร็จ
3. เมื่อ Promise ในข้อ 2 resolve แล้ว จะทำงานต่อไปในบรรทัดถัดไป ซึ่งคือ `const response = await longRunningOperation();`
   - จะเริ่มทำงานใน `longRunningOperation()` ซึ่งเป็นฟังก์ชันที่สร้าง Promise และ return ค่า 42 ในที่นี้
   - หลังจาก `await` สำหรับ Promise ใน `longRunningOperation()` เสร็จสิ้น ค่า 42 จะถูกกำหนดให้กับตัวแปร `response`
4. แสดงผลลัพธ์ที่ได้จากตัวแปร `response` ซึ่งคือ 42
5. แสดงผลลัพธ์ 'Done!!'

โดยการใช้ `async/await` ช่วยให้เราเขียนและอ่านโค้ดที่ใช้งาน asynchronous ได้อย่างสะดวกและกระชับขึ้น
โดยไม่ต้องใช้ `.then()` หรือ `.catch()` ในทุกๆ ขั้นตอนของการทำงาน asynchronous
และมีโครงสร้างเหมือนกับการเขียนโค้ดที่ทำงานแบบ synchronous ทั่วไป

*/
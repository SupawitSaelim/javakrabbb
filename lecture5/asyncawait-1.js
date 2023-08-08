function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log('Start!!');
    await promiseTimeout(2000);
    console.log('Done!!');
}

run();

/*
async/await เป็นส่วนของภาษา JavaScript ที่ช่วยให้การจัดการกับ asynchronous code
 ดูง่ายและอ่านเข้าใจมากขึ้น โดยทำให้เราเขียนโค้ดแบบ asynchronous ด้วยรูปแบบที่คล้ายกับ synchronous
  มากขึ้น โดยไม่ต้องใช้ .then() หรือ .catch() มากนัก

ด้านลักษณะการทำงานเบื้องหลัง โครงสร้างของ async/await นั้นใช้ Promise อยู่ด้านหลัง
 เพื่อจัดการกับงาน asynchronous แต่ให้มอบหมายให้ระหว่างการเขียนโค้ดเป็นลำดับเหตุการณ์
*/
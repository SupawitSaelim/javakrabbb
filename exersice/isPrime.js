//จำนวนเฉพาะ
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    // ตรวจสอบว่า num หารด้วยตัวเลขที่ไม่ใช่ 1 และ num โดยไม่มีเศษ
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));   // ควรแสดงผลเป็น true
console.log(isPrime(15));  // ควรแสดงผลเป็น false

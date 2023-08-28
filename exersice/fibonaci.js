//fine position fibo
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}

console.log(fibonacci(5));  // ควรแสดงผลเป็น 5 (ตำแหน่งที่ 5 ในลำดับ Fibonacci)
console.log(fibonacci(8));  // ควรแสดงผลเป็น 21 (ตำแหน่งที่ 8 ในลำดับ Fibonacci)

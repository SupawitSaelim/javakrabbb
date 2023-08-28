// หาส่วนประกอบ
function factorize(num) {
    const factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
}

console.log(factorize(12));  // ควรแสดงผลเป็น [2, 2, 3]
console.log(factorize(29));  // ควรแสดงผลเป็น [29]
console.log(factorize(22));  // ควรแสดงผลเป็น [2,11]

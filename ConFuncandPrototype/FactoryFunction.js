//Factory Function คือการสร้าง object ด้วย function ที่มีการ return object ออกมา

// function MyFactory() {
//     const obj = new Object();
//     return obj;
// }

function MyConstructor(name, age) {
    const obj = {
        name,
        age
    };
    return obj;
}

const Myobj = MyConstructor("Supawit", 22);
console.log(Myobj);

class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("This is " + this._name + "!");
    }

    // static method means that you don't need to create an instance of the class to use it
    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buusterr");
myDog.introduce();

Dog.bark();
myDog.bark(); // Error: myDog.bark is not a function

/*
ขั้นตอนในโค้ดด้านบนมีดังนี้:

1. เริ่มต้นโดยกำหนดคลาส `Dog` ซึ่งมี constructor ที่รับพารามิเตอร์ `name` เพื่อกำหนดชื่อของสุนัข เมื่อมีการสร้างอินสแตนซ์ของคลาส `Dog` ด้วยคำสั่ง `new Dog("Buusterr")` จะถูกเรียกใช้ constructor และนำ `name` ที่เป็น "Buusterr" ไปกำหนดให้กับตัวแปร `this._name` ซึ่งเป็น property ของอินสแตนซ์ (instance) นั้นๆ

2. ต่อมาคลาส `Dog` มีเมธอดชื่อ `introduce()` ซึ่งถูกนิยามดังนี้:
    ในเมธอดนี้จะมีคำสั่ง `console.log("This is " + this._name + "!");` ซึ่งจะแสดงข้อความ "This is [ชื่อของสุนัข]!" โดยในกรณีนี้คือ "This is Buusterr!"

3. ภายในคลาส `Dog` ยังมีเมธอดชื่อ `bark()` ซึ่งถูกนิยามเป็น static method หมายความว่าเมื่อเรียกใช้งาน `Dog.bark()` ไม่จำเป็นต้องสร้างอินสแตนซ์ของคลาส `Dog` ขึ้นมาก่อน ในกรณีนี้เมธอด `bark()` มีคำสั่ง `console.log("Woof!");` ซึ่งจะแสดงข้อความ "Woof!"

4. สุดท้าย มีการสร้างอินสแตนซ์ `myDog` โดยให้ชื่อเป็น "Buusterr" และเรียกใช้เมธอด `introduce()` ซึ่งจะแสดงข้อความ "This is Buusterr!" บนหน้าจอ

ผลลัพธ์ที่ควรปรากฎบนหน้าจอ:
```
This is Buusterr!
Woof!
```

*/
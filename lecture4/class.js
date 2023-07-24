class Song {
    constructor() {
        this.title;
        this.author;
    }

    play() {
        console.log("Song is playing!");
    }
}


const mySong = new Song();
mySong.play();
console.log(typeof mySong);



/* 
โค้ดที่ให้มาเป็นภาษา JavaScript แสดงการสร้างคลาส `Song` และการสร้างอินสแตนซ์ของคลาสดังกล่าว และแสดงการเรียกใช้เมท็อด `play()` และแสดงประเภทของอินสแตนซ์ที่ได้จากการสร้างขึ้นด้วยคลาส `Song`:

1. การสร้างคลาส `Song`:
   ```
   class Song {
       constructor() {
           this.title;
           this.author;
       }

       play() {
           console.log("Song is playing!");
       }
   }
   ```

   - `class Song`: สร้างคลาสชื่อ Song ซึ่งเป็น blueprint หรือแม่แบบของอ็อบเจกต์ที่เกี่ยวข้องกับเพลง (Song) ภายในมีสองคุณสมบัติคือ `title` และ `author` ซึ่งจะเป็น property ของอ็อบเจกต์แต่ละตัวที่สร้างขึ้นจากคลาสนี้

   - `constructor()`: เป็นเมท็อดที่ถูกเรียกขึ้นตอนที่มีการสร้างอินสแตนซ์ของคลาส ในกรณีนี้คือเมื่อสร้างอินสแตนซ์ของคลาส `Song` ค่าของ `title` และ `author` จะถูกกำหนดเป็น `undefined` เนื่องจากไม่มีการกำหนดค่าเริ่มต้นใน constructor

2. การสร้างอินสแตนซ์ของคลาส `Song`:
   ```
   const mySong = new Song();
   ```

   - `const mySong`: สร้างตัวแปร `mySong` และกำหนดให้เป็นอินสแตนซ์ของคลาส `Song` โดยใช้คำสั่ง `new` ในการสร้างอ็อบเจกต์ของคลาส `Song`

3. เรียกใช้เมท็อด `play()`:
   ```
   mySong.play();
   ```

   - `mySong.play()`: เรียกใช้เมท็อด `play()` บนอินสแตนซ์ `mySong` ซึ่งจะแสดงข้อความ "Song is playing!" ใน console

4. แสดงประเภทของอินสแตนซ์ที่สร้างขึ้น:
   ```
   console.log(typeof mySong);
   ```

   - `typeof mySong`: ใช้ `typeof` เพื่อหาประเภทของตัวแปร `mySong` ซึ่งในที่นี้คืออ็อบเจกต์ที่เกี่ยวข้องกับคลาส `Song` ประเภทนี้จะเป็น "object" ซึ่งแสดงว่า `mySong` เป็นอ็อบเจกต์ที่ถูกสร้างขึ้นจากคลาส `Song`

*/
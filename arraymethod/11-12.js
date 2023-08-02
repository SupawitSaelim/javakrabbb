const song = `
Happy birthday to you
Happy birthday to you
Happy birthday
Happy birthday
Happy birthday to you
`;

const songArray = song.trim().split(/\s+/);
console.log(songArray);
const result = songArray.reduce((previous, current) => {
    let word = current.toLowerCase();
    previous[word] = previous[word] ? previous[word] += 1 : 1;
    return previous;
}, {})
console.log(result); // { happy: 5, birthday: 5, to: 3, you: 3 }


/* 

ลองมาดูขั้นตอนการทำงานของโค้ดกันครับ:

1. เริ่มต้นด้วยการลบช่องว่างด้านหน้าและด้านหลังของเนื้อเพลง (song.trim()) และแยกคำในเนื้อเพลงออกเป็นอาเรย์โดยใช้ช่องว่างในการแยก (/s+/) แล้วเก็บไว้ในตัวแปร songArray.

2. สร้างตัวแปร result ที่เป็นออบเจกต์เปล่า {} เพื่อเก็บผลลัพธ์ที่จะได้มาในท้ายสุด

3. ใช้ฟังก์ชัน reduce บนอาเรย์ songArray โดยเริ่มต้นที่ previous เป็นออบเจกต์เปล่า {}

4. สำหรับแต่ละคำในอาเรย์ (current) ทำสิ่งต่อไปนี้:

   a. แปลงคำให้เป็นตัวพิมพ์เล็กทั้งหมด (current.toLowerCase())

   b. ถ้า previous มี key ที่ชื่อเดียวกับคำนั้นอยู่แล้ว ให้เพิ่มค่าของ key นั้นขึ้นมา 1

   c. ถ้า previous ไม่มี key ที่ชื่อเดียวกับคำนั้นอยู่ ให้สร้าง key นั้นใหม่และกำหนดค่าเป็น 1

5. ส่งค่า previous ในแต่ละครั้งกลับไปในการรอบถัดไปของการเรียกใช้ reduce

6. เมื่อการลูปเสร็จสิ้น ค่าที่ได้คือออบเจกต์ result ที่เก็บจำนวนครั้งที่คำแต่ละคำปรากฏในเนื้อเพลง

ผลลัพธ์ที่คาดหวัง:
เมื่อให้ดำเนินการแล้ว จะได้ผลลัพธ์ดังนี้:
```
{ happy: 5, birthday: 5, to: 3, you: 3 }
```

เนื่องจากคำ "Happy" และ "birthday" ปรากฏ 5 ครั้ง และคำ "to" และ "you" ปรากฏ 3 ครั้งในเนื้อเพลง "Happy birthday to you" ครับ!

*/
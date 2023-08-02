const students = [
    {id:"161", name: "Neymar", score: 67},
    {id:"162", name: "Messi", score: 45},
    {id:"163", name: "Ronaldo", score: 74},
    {id:"167", name: "Perti", score: 89},
    {id:"168", name: "Chanatip", score: 49},
];

const result = students.reduce((previous, current) => {
    if (!!previous['pass']) {
        if (current.score >= 50) previous['pass'].push(current);
    } else {
        if (current.score >= 50) previous['pass'] = [current];
    }
    if (!!previous['fail']) {
        if (current.score < 50) previous['fail'].push(current);
    } else {
        if (current.score < 50) previous['fail'] = [current];
    }
    return previous;
}, {});
console.log(result); 

/*
สวัสดีครับ! โค้ดด้านบนเป็น JavaScript code ที่ใช้กับอาเรย์ของนักเรียน (students)
 เพื่อแบ่งนักเรียนออกเป็นกลุ่มตามคะแนนที่ได้รับ (pass หรือ fail) โดยใช้ฟังก์ชัน reduce ใน JavaScript 
 ซึ่งเป็นฟังก์ชันสำหรับการลดข้อมูลในอาเรย์เหล่านี้เพื่อให้ได้ค่าออกมาเป็นอะเรย์หรือค่าเดียว ซึ่งกำหนดค่าเริ่มต้นเป็นวัตถุที่เป็นอะเรย์ว่าง ({}).

ลองมาดูขั้นตอนการทำงานของโค้ดกันครับ:

1. สร้างตัวแปร result เพื่อเก็บผลลัพธ์ที่จะได้มา
2. ใช้ฟังก์ชัน reduce บนอาเรย์ students
3. เริ่มต้นโดยให้ previous เป็นออบเจกต์เปล่า {}
4. สำหรับแต่ละนักเรียนในอาเรย์ students (current) ทำสิ่งต่อไปนี้:

   a. ถ้า previous มี key 'pass' (ยืนยันว่ามีผู้ที่ pass อยู่แล้วในอาเรย์ pass)
      - ถ้าคะแนนของ current มากกว่าหรือเท่ากับ 50 ให้เพิ่ม current เข้าไปในอาเรย์ 'pass' ของ previous

   b. ถ้า previous ไม่มี key 'pass' (ยืนยันว่ายังไม่มีผู้ที่ pass อยู่ในอาเรย์ pass)
      - ถ้าคะแนนของ current มากกว่าหรือเท่ากับ 50 ให้สร้างอาเรย์ใหม่ชื่อ 'pass' และใส่ current เข้าไปในอาเรย์นั้น

   c. ถ้า previous มี key 'fail' (ยืนยันว่ามีผู้ที่ fail อยู่แล้วในอาเรย์ fail)
      - ถ้าคะแนนของ current น้อยกว่า 50 ให้เพิ่ม current เข้าไปในอาเรย์ 'fail' ของ previous

   d. ถ้า previous ไม่มี key 'fail' (ยืนยันว่ายังไม่มีผู้ที่ fail อยู่ในอาเรย์ fail)
      - ถ้าคะแนนของ current น้อยกว่า 50 ให้สร้างอาเรย์ใหม่ชื่อ 'fail' และใส่ current เข้าไปในอาเรย์นั้น

5. ส่งค่า previous ในแต่ละครั้งกลับไปในการรอบถัดไปของการเรียกใช้ reduce

6. เมื่อการลูปเสร็จสิ้น ค่าที่ได้คือออบเจกต์ result ที่มี key 'pass' และ 'fail' เก็บค่านักเรียนที่ pass และ fail ตามลำดับ

ผลลัพธ์ที่คาดหวัง:
เมื่อให้ดำเนินการแล้ว จะได้ผลลัพธ์ดังนี้:
```
{
  pass: [
    { id: "161", name: "Neymar", score: 67 },
    { id: "163", name: "Ronaldo", score: 74 },
    { id: "167", name: "Perti", score: 89 }
  ],
  fail: [
    { id: "162", name: "Messi", score: 45 },
    { id: "168", name: "Chanatip", score: 49 }
  ]
}
```

ผู้ที่ได้คะแนนมากกว่าหรือเท่ากับ 50 จะถูกนำมาเก็บในอาเรย์ 'pass' ของ result ส่วนผู้ที่คะแนนน้อยกว่า 50 จะถูกเก็บในอาเรย์ 'fail' 
ของ result ตามลำดับ ดังนั้นนักเรียนที่ชื่อ Neymar, Ronaldo, และ Perti จะอยู่ในกลุ่ม pass ในขณะที่นักเรียนชื่อ Messi และ Chanatip จะอยู่ในกลุ่ม fail ครับ!
*/

class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong.artist);


/* 
ในโค้ดด้านบนเรามีคลาส `Media` และ `Song` ที่ถูกสร้างขึ้นดังนี้:

1. คลาส `Media`: คลาสนี้มี constructor ที่รับพารามิเตอร์ `info` และกำหนดค่าให้กับ `this.publishDate` และ `this.name` ตาม `info.publishDate` และ `info.name` ตามลำดับ

2. คลาส `Song`: คลาสนี้เป็น subclass ของคลาส `Media` ดั้งนั้นเมื่อมีการสร้างอินสแตนซ์ของ `Song` จะต้องเรียก constructor ของ `Media` โดยใช้ `super(songData)` เพื่อทำการสืบทอดคุณสมบัติของ `Media` และต่อจากนั้นกำหนดค่า `this.artist` ด้วยค่าจาก `songData.artist`

เมื่อเราสร้างอินสแตนซ์ของ `Song` ดังนี้:
```javascript
const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});
```

โค้ดนี้จะสร้างอินสแตนซ์ `mySong` ขึ้นมา โดยกำหนดค่า `artist` เป็น "Queen", `name` เป็น "Bohemian Rhapsody", และ `publishDate` เป็น 1975 ใน constructor ของ `Song` นั่นเอง

สุดท้าย เมื่อทำการ console.log ค่า `mySong.artist` จะแสดงผลลัพธ์เป็น "Queen" ซึ่งคือค่าของ property `artist` ที่อยู่ในอินสแตนซ์ `mySong`

ผลลัพธ์ที่ควรปรากฏบนหน้าจอ:
```
Queen
```

*/
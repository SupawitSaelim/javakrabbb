const string1 = ["flower", "flow", "flood"];
const string2 = ["racecar", "rare"];
const string3 = ["computer", "computing", "compute", "computation"];

function longestCommonPrefix(strings) {
    if (strings.length === 0) return '';
  
    let prefix = strings[0];
  
    for (let i = 1; i < strings.length; i++) {
      while (strings[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
      }
    }
  
    return prefix;
  }
  
  console.log(`Longest Common Prefix of :${string1.join(',')} are: [${longestCommonPrefix(string1)}]`);
  console.log(`Longest Common Prefix of :${string2.join(',')} are: [${longestCommonPrefix(string2)}]`);
  console.log(`Longest Common Prefix of :${string3.join(',')} are: [${longestCommonPrefix(string3)}]`);

  /* 
  ขั้นตอนการทำงาน:

ตรวจสอบว่าอาร์เรย์ strings มีความยาวเป็น 0 หรือไม่ ถ้าใช่ ให้คืนสตริงเปล่า ("") เนื่องจากไม่มีคำนำหน้าที่จะหาในกรณีที่ไม่มีสตริงในอาร์เรย์

กำหนดค่าเริ่มต้นของ prefix เป็นสตริงแรกในอาร์เรย์ strings เพื่อเป็นคำนำหน้าที่เรากำลังจะหา

เริ่มต้นวนลูป for จากสตริงที่ตำแหน่งที่ 1 ในอาร์เรย์ strings ไปจนถึงสุดท้าย

สำหรับแต่ละสตริงในลูป:

เข้าสู่ลูป while เพื่อหาคำนำหน้าที่เหมือนกันระหว่าง prefix และ strings[i]
ในลูป while:
ถ้า strings[i] ไม่เป็นคำนำหน้าของ prefix ให้ลบอักขระสุดท้ายของ prefix ออกไป
ทำซ้ำขั้นตอนนี้จนกว่า strings[i] จะเป็นคำนำหน้าของ prefix
เมื่อเจอคำนำหน้าที่เหมือนกัน หรือ prefix กลายเป็นสตริงเปล่า หยุดลูป while
เมื่อลูป for ทั้งหมดเสร็จสิ้น จะคืนค่า prefix ที่เหลืออยู่ ซึ่งก็คือคำนำหน้าที่เหมือนกันที่ยาวที่สุดระหว่างทุกคำในอาร์เรย์

ผลลัพธ์ของการเรียกใช้งานฟังก์ชัน longestCommonPrefix กับอาร์เรย์ต่างๆ คือคำนำหน้าที่เหมือนกันที่ยาวที่สุดในแต่ละกรณี เช่น:

สำหรับ string1 = ["flower", "flow", "flood"]:

Longest Common Prefix: [flo]
สำหรับ string2 = ["racecar", "rare"]:

Longest Common Prefix: [ra]
สำหรับ string3 = ["computer", "computing", "compute", "computation"]:

Longest Common Prefix: [comput]
ขออภัยอีกครั้งสำหรับความสับสนที่เกิดขึ้น และขอบคุณที่ให้โอกาสในการอธิบายใหม่อีกครั้ง!
 */
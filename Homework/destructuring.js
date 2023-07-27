//destructuring คือ การแยก object หรือ array ออกเป็นตัวแปรเพื่อใช้งาน

const myObj = {
    id: '1234',
    productName: 'สลัดผัก',
    price: 120,
};

let {price, productName} = myObj;
console.log(price);
console.log(productName);

myObj.price = 150;
console.log(price); //price ไม่เปลี่ยนเพราะเป็นการ copy ค่าจาก myObj มาใส่ใน price แล้วเก็บไว้ในตัวแปร price แล้วจะไม่มีการเชื่อมโยงกัน
console.log(myObj.price);

//alias
let {productName: name} = myObj;
console.log(name);
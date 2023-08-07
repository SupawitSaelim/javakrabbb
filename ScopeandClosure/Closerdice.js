function outer(name) {
    const histories = [];
    function inner() {
        let random = Math.floor(Math.random() * 6) + 1;
        histories.push(random);
        console.log(name + ' rolled ' + random);
    }
    return inner; //if not return inner, the function will not be able to access the variable histories
}

//closure คือ ฟังก์ชันที่สร้างขึ้นมาโดยมีฟังก์ชันอื่นเป็นค่าคืน ซึ่งฟังก์ชันที่ถูกส่งคืนนั้นจะมีการเก็บค่าตัวแปรที่อยู่นอกฟังก์ชัน และเมื่อฟังก์ชันที่ถูกส่งคืนถูกเรียกใช้งาน ฟังก์ชันที่ถูกส่งคืนนั้นจะสามารถเข้าถึงตัวแปรที่อยู่นอกฟังก์ชันได้
const myClosure = outer('Supawit');
myClosure()
myClosure()
myClosure()
const yourClosure = outer('Phichamon');
yourClosure()
yourClosure()
yourClosure()

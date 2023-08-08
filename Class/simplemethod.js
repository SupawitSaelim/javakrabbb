class MyClass {
    members = Array();
    addMember(name, main='singer') {
        const memberobj = {
            name,
            main
        };
        console.log(this.members)
        this.members.push(memberobj); 
    }
    getMembers(){
        console.log(this.members)
    }
}
//ภายใน class มี method 2 ตัว เเละ มี property ชื่อ members ที่เป็น array ที่เก็บ object ที่มี property ชื่อ name และ main

const myObject = new MyClass(); 
myObject.addMember('supawit', 'guitar');
myObject.addMember('phichamon', 'bass');
myObject.addMember('sirapop');
myObject.addMember('Rawin');
myObject.getMembers();
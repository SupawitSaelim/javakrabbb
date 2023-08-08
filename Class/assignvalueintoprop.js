class MyFirstClass {
    name = 'supawit';
    age = 22;
}

const student = new MyFirstClass();
student['name'] = 'Supawit saelim';
let studentName = student.name;
console.log(studentName); // 

const studentAge = new MyFirstClass();
studentAge.age++;
console.log(studentAge.age); 
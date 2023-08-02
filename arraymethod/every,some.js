//method every is return true if all of element wich have true condition
//method some is return true if someone of element is have true condition
const allStudents = [
    {id: "1", name: "A", score: 67, room: "6/1"},
    {id: "2", name: "B", score: 78, room: "6/1"},
    {id: "3", name: "C", score: 84, room: "6/1"},
    {id: "4", name: "D", score: 83, room: "6/2"},
    {id: "5", name: "E", score: 54, room: "6/2"},
    {id: "6", name: "F", score: 89, room: "6/2"},
    {id: "7", name: "G", score: 63, room: "6/3"}
];

//every
const result = allStudents.every((value) => value.room.startsWith('6/1'))
//some
const result2 = allStudents.some((value) => value.room.startsWith('6/1'))
const result3 = allStudents.some((value) => {
    return value.score < 50 || value.room === '6/2' && value.score >= 80;
})
console.log(result);
console.log(result2); 
console.log(result3)
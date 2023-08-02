const allStudents = [
    {id: "1", name: "A", score: 67, room: "6/1"},
    {id: "2", name: "B", score: 78, room: "6/1"},
    {id: "3", name: "C", score: 84, room: "6/1"},
    {id: "4", name: "D", score: 83, room: "6/2"},
    {id: "5", name: "E", score: 54, room: "6/2"},
    {id: "6", name: "F", score: 89, room: "6/2"},
    {id: "7", name: "G", score: 63, room: "6/3"}
];

const student_score_80up = allStudents.filter((value) => {
    if (value.score >= 80 && value.room == "6/2") {
        return value;
    }
});

console.log(student_score_80up);
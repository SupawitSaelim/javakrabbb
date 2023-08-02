const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const max = data.reduce((prev,curr) => {
    return Math.max(prev,curr);
});
console.log(max);

const min = data.reduce((prev, curr) => {
    return Math.min(prev,curr);
});
console.log(min);

const students = [
    {id:"161", name: "Neymar", score: 67},
    {id:"162", name: "Messi", score: 45},
    {id:"163", name: "Ronaldo", score: 74},
    {id:"167", name: "Perti", score: 89},
    {id:"168", name: "Chanatip", score: 49},
];


const simpleobj = {
    a: 1,
    b: 2,
    c: 3
};

const someoldobj = {
    ...simpleobj,
    c: 4,
    d: 5
};

console.log(simpleobj);
console.log(someoldobj);
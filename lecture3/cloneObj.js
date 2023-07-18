const obj1 = {
    person: 'supawit',
    weight: 65
};



// const obj2 = obj1; // obj2 is reference to obj1
const obj2 = {... obj1}; // clone obj1 to obj2
obj2.weight = 66;
obj2.person = 'supawit2';


console.log(obj1);
console.log(obj2);
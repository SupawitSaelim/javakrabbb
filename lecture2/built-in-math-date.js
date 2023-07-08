//Built-in Math and Date Objects

console.log('******** Built-in Math ********');
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.floor(123.75));
console.log(Math.ceil(123.45));
console.log(Math.round(123.45));
console.log(Math.random());

console.log('******** Built-in Date ********');
const d = new Date('9/17/1988');

console.log(d);

console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());

Date.now()
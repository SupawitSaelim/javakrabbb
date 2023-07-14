let arr1 = ['A', true, 2];

console.log('\n******* Push and pop *******\n');
console.log(arr1.push('New value'));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

console.log('\n******* Shift and unshift *******\n');
console.log(arr1.unshift('New value'));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);

console.log('\n******* Concat *******\n');
let arr2 = ['B', false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat(arr1);
console.log(newArr);
console.log(newArr2);
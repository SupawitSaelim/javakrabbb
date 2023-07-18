let arr1 = ['A', true, 2];

console.log('\n******* Push and pop *******\n');
console.log(arr1.push('New value'));   // return the new length of the array
console.log(arr1);
console.log(arr1.pop());   // return the last element of the array
console.log(arr1);

console.log('\n******* Shift and unshift *******\n');
console.log(arr1.unshift('New value')); // return the new length of the array
console.log(arr1);
console.log(arr1.shift()); // return the first element of the array
console.log(arr1);

console.log('\n******* Concat *******\n');
let arr2 = ['B', false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr);
console.log(newArr2);
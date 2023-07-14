const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
     return accumulator + currentValue;
});

console.log(sum);

/* explain code
1. accumulator = 1, currentValue = 2 => 1 + 2 = 3
2. accumulator = 3, currentValue = 3 => 3 + 3 = 6
3. accumulator = 6, currentValue = 4 => 6 + 4 = 10
*/
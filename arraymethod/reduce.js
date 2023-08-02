//method reduce is use for sum all of element in array

const allvalue = [1,2,3,4,5,6,7,8,9,10];

const result = allvalue.reduce((acc,cur) => {
    console.log(`acc: ${acc}, cur: ${cur}, sum: ${acc + cur}`);
    return acc + cur;
});

console.log(result);
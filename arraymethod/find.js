const myarr = [1,2,4,9,7,10,18];
const result = myarr.find((value) => {
    return value % 3 == 0;
});

console.log(result);

//find is return one value that 
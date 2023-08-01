const myarr = ['first', 'second', 'third', 'forth'];
myarr.sort();
console.log(myarr); 

//can't sort numbers
const myarr2 = [20, 99, 8, 100, 13];
myarr2.sort();
console.log(myarr2);

//sort numbers
myarr2.sort((a,b) => a - b);
console.log(myarr2);

//sort strings much to less
myarr.sort((a,b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
})
console.log(myarr);
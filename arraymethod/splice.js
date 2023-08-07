// const  newArray = array.splice(start, deleteCount, item1, item2, ...);
const myarr = ['first', 'second', 'third', 'forth'];

const result = myarr.splice(1,0,'1.5');
console.log(myarr);
console.log(result); //return an empty array cos no element is removed

const delmyarr = myarr.splice(2,3);
console.log(myarr);
console.log(delmyarr); //return the deleted elements

myarr.splice(0,parseInt(myarr.length));
console.log(myarr); 

myarr.splice(0,0,'first', 'second', 'third', 'forth');
console.log(myarr); 
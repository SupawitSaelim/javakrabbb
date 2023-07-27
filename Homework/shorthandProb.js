//shorthand property names

//normal way
let id = '1234';
let name = 'สลัดผัก';
let price = 120;
const myObj = {
    id: id,
    productName: name,
    price: price,
};
console.log(myObj);

//shorthand way
const myObj2 = {
    id,
    name,
    price,
};
console.log(myObj2);
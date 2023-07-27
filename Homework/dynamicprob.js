//dynamic properties
let productId;
const order = {};

productId = '0001';
order[productId] = 10
console.log(order);

let productId2 = '0002';
const order2 = {
    [productId2]: 20,  // [] around productId2 for dynamic properties
};
console.log(order2);
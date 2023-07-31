const allProduct = [
    {id: 123, productName: 'Mee mini 2023'},
    {id: 124, productName: 'Mee Pro 2023'},
    {id: 125, productName: 'Mee Pro max 2023'}
];

const makeOrder = (product, amount) => {
    let productID = product.id;
    const order = {
        orderId : Math.floor(Math.random() * 100),
        [productID] : amount
    };
    return order;
};

const allOrders = [];
allOrders.push(makeOrder(allProduct[0], 10));
allOrders.push(makeOrder(allProduct[1], 5));
console.log(allOrders);


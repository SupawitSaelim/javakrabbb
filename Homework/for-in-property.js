const product = {
    productID: 18999,
    name: 'box',
    price: 28,
    stocks: 30,
};

for ( let i in product){
    console.log(`${i} : ${product[i]}`);
}
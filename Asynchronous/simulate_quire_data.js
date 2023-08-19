const connectDatabase = () => {
    const promise = new Promise ((resolve, reject) => {
        console.log('Loading....')
        setTimeout(() => {
            const random = Math.random()
            if (random > 0.7){
                resolve({
                    productId: '1001',
                    productName: 'Orange Car Model X',
                    price: 3_000
                })
            }else {
                reject(new Error('Can not get data from Database'))
            }
        },2000)
    })
    return promise;
}

async function getProduct(){
    try{
        const result = await connectDatabase()
        console.log(result)
    } catch (error) {
        console.log(error)
    }finally{
        console.log('Finished!')
    }
}

getProduct();
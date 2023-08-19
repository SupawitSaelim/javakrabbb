const asyncFunc = () => {
    const promise = new Promise( (resolve, reject) => {
        console.log('Start...')
        setTimeout(() => {
            console.log('2 secs later...')
            resolve('This is your result!')
        }, 2000);
    })
    return promise
};

async function getResult() {
    const promiseObj = asyncFunc()
    const result = await promiseObj
    console.log(result)
    console.log('Finished!!!')
}

getResult()
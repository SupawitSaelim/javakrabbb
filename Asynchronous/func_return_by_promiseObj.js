const asyncFunc = () => {  //this function will return promiseObj
    const promise = new Promise( (resolve, reject) => {
        console.log(`Start...`)
        setTimeout(() => {
            console.log(`2 secs later...`)
            resolve('This is your result!')
        },2000)
    })
    return promise
}

const promiseObj = asyncFunc()
promiseObj.then((result) => {
    console.log(result)
    console.log(`Finished!!!`);
})
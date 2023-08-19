/*
    promiseObj = new Promise( (resolve, reject) => {
        resolve(value)
        reject(reason)
    })

    promiseObj.then(onfulfilled?, onrejected?)
    promistObj.catch(onrejected?)
*/


var promiseObj = new Promise ( (resolve,reject) => {
    console.log(`3 secs later...`)
    setTimeout(
        () => {
            let result = "Ready... you have got data"
            resolve(result)
        },3000
    ) //wait 3 secs then send result to resolve
})

//in promiseObj onfulfilled.value is the result of resolve(result)
promiseObj.then((value) =>{
    console.log(value)
})
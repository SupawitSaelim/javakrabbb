let promiseObj = new Promise((resolve, reject) => {
    console.log(`1.5 secs... later`)
    let random = Math.random() > 0.5 ? true : false;
    setTimeout(() => {
        if (random) {
            resolve('Yes successful')
        } else {
            reject('Oh No! error')
        }
    }, 1500);
})

// promiseObj.then((value) => {
//     console.log(value)
// },
//     (reason) => {
//         console.log(reason)
//     }
// )


promiseObj.then((value) => {
    console.log(value)
}).catch((reason) => {
    console.log(reason)
})

let promiseObj = new Promise((resolve, reject) => {
    console.log(`3 secs later... `)
    setTimeout(
        () => {
            let result = new Error('You haven\'t got data');
            reject(result); //send error to reject
        },3000
    )
})

//use value from reject by catch
promiseObj.catch((error) => {
    console.log(error);
})
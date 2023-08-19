const mainFunc = (callback) => {
    console.log(`3 secs later....`)
    setTimeout(
        () => {
            callback()
        },3000
    )
}

// const theCallback = () => {
//     console.log(`Hello Callback!`)
// }

mainFunc(() => {
    console.log(`Hello, Callback!`)
})
var counter = 1;

let interval_id = setInterval(
    () => {
        let random = Math.random()
        console.log(counter,':', random.toFixed(3))

    if (random > 0.8) {
        console.log(`Last counter is ${counter} values : ${random.toFixed(5)}`)
        clearInterval(interval_id)
    }else {
        counter++
    }},1000
)


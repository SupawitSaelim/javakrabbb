const chefA = () => {
    setTimeout(
        () => {
            console.log(`Chef A is successfull of cooking in 3 sec.`)
        },
        3000
    )
}

const chefB = () => {
    randtime = Math.floor(Math.random()* 5) + 1
    setTimeout(
        () => {
            console.log(`Chef B is successfull of cooking in ${randtime} sec.`)
        },
        randtime * 1000
    )
}

chefA();
chefB();
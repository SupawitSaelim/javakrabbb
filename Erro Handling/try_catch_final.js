const data = [9, 'nine', 10, 'ten'];
let randomData = data[Math.floor(Math.random() * data.length)]

try {
    randomData = randomData.toUpperCase();
} catch (error) {
    console.log('--------------')
    console.log(error.message)
    console.log('--------------')
}finally {
    console.log(randomData)
}
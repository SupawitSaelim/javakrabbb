function checkNumber() {
    const numString = prompt('Please input 1-4\n')
    try {
        const num = Number(numString)
        if (Number.isNaN(num)) {
            throw new Error('Please input a number')
        }
        if (num >4 || num < 1) {
            throw new Error('You number must be 1-4')
        }
        alert(`Your number is: ${num}`)
    } catch (error) {
        alert(error)
    }
}
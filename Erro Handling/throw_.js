const random = Math.floor(Math.random() * 100 ) + 1;

try {
    if ( random >= 60 ) {
        throw new Error('Over upper limit');
        }
} catch (error) {
        console.log(error.message)
} finally {
        console.log(`Random number is: ${random}`)
    }

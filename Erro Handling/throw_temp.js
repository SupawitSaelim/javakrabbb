//throw is not console.log, use web console to see the error message
function checkTemperature(temp) {
    if (temp < 36.5) {
        throw new Error('Too low temperature');
    } else if (temp > 37.5) {
        throw new Error('Too high temperature');
    } else {
        return temp;
    }
}

const randomtemp = Math.random() * 2 + 36;          
try {
    checkTemperature(randomtemp);
    console.log('Temperature is normal');
} catch (error) {
    console.log(error.message);
} finally {
    console.log(`Temperature is ${randomtemp.toFixed(2)}`);
}
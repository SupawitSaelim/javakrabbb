function plusAB (a, b) {   
    return a + b;
}

function minusAB (a, b) {
    return a - b;
}

function multiplyAB (a, b) {
    return a * b;
}

function divideAB (a, b) {
    if (b !== 0 ) {
        return a / b;
    } else {
        console.log('Cannot divide by zero');
        return null;
    } 
}

function powerBy (a, b) {
    return a ** b;
}

function outer () {
    let data = 0
    function inner (callback, num) {
        data = callback(data, num); // callback is a function 
        console.log(`data: ${data}`);
        return data;
    }
    return inner;
}


const myClosure = outer();
myClosure(plusAB, 2);
myClosure(minusAB, 1);
myClosure(divideAB, 2);
myClosure(multiplyAB, 0.5);
myClosure(plusAB, 10);
myClosure(powerBy, 3);
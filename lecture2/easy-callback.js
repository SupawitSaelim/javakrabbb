function calculate(a, b, callback) {
    var result = a + b;
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}

calculate(5, 3, displayResult);

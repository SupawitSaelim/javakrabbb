function isValidIP(str) {
    let ip_arr = str.split(".");
    
    if (ip_arr.length !== 4) {
        return false;
    }
    
    for (let i = 0; i < ip_arr.length; i++) {
        if (ip_arr[i] > 255 || (ip_arr[i][0] === '0' && ip_arr[i].length > 1)) {
            return false;
        }
    }
    
    return true;
}

console.log(isValidIP('1.2.3.4')); // true
console.log(isValidIP('1.2.3')); // false
console.log(isValidIP('1.2.3.4.5')); // false
console.log(isValidIP('123.45.67.89')); // true
console.log(isValidIP('123.456.78.90')); // false
console.log(isValidIP('123.045.067.089')); // false

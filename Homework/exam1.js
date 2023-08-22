function calculateExpression(str){
    let result = 0;
    let arr = str.split(" "); // ["2", "+", "3", "-", "1"]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+") {
            result += parseInt(arr[i+1])  // 2 + 3
        };
        if (arr[i] === "-") {
            result -= parseInt(arr[i+1]) 
        }
        if (arr[i] === "*") {
            result *= parseInt(arr[i+1]) 
        }
        if (arr[i] === "/") {
            result /= parseInt(arr[i+1]) 
        }
    }
    return result;
}

console.log(calculateExpression("2 + 3 - 1")); 
console.log(calculateExpression("5 - 1 + 2 + 10 * 6"));
console.log(calculateExpression("5 - 1 + 2 + 10 / 6"));
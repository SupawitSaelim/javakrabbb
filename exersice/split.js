function findDivisibleNumbers(arr, divisor) {
    let result = new Array();
    for ( i = 0; i < arr.length; i++ ){
        if (arr[i] % divisor == 0){
            result.push(arr[i])
        }else{
            continue
        }
    }
    return result;
}
const inputArray = [12, 24, 7, 8, 10];
const divisor = 4;
console.log(findDivisibleNumbers(inputArray, divisor));  // ควรแสดงผลเป็น [12, 24, 8]

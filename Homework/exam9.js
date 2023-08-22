function sumTwoSmallestNums (arr) {
    let sort_arr = arr.sort();
    console.log(sort_arr)
    flag = 0
    let result = 0;
    for (i = 0; i < sort_arr.length ; i++) {
        if ( Math.sign(sort_arr[i]) == -1 ){
            continue
        } else {
            result += sort_arr[i]
        }
        flag += 1
        if ( flag == 2) {
            break
        }
    }    
    return result
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))


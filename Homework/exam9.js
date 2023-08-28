function sumTwoSmallestNums(arr) {
    // Filter out negative numbers and sort in ascending order
    let positiveNumbers = arr.filter(num => num >= 0);
    positiveNumbers.sort((a, b) => a - b); // Numeric sort
  
    // Take the two smallest positive numbers and calculate their sum
    let result = positiveNumbers.slice(0, 2).reduce((sum, num) => sum + num, 0);
  
    return result;
  }
  
  console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // Output: 7
  console.log(sumTwoSmallestNums([2, 9, 6, -1])); // Output: 8
  console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); // Output: 4519
  
  
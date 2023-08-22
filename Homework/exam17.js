function longestValidParentheses(s) {
    let maxLength = 0;
    let leftCount = 0;
    let rightCount = 0;
    

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            leftCount++;
        } else {
            rightCount++;
        }
        
        if (leftCount === rightCount) {
            maxLength = Math.max(maxLength, 2 * rightCount);
        } else if (rightCount >= leftCount) {
            leftCount = rightCount = 0;
        }
    }
    
    leftCount = rightCount = 0; // Reset counters
    

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            leftCount++;
        } else {
            rightCount++;
        }
        
        if (leftCount === rightCount) {
            maxLength = Math.max(maxLength, 2 * leftCount);
        } else if (leftCount >= rightCount) {
            leftCount = rightCount = 0;
        }
    }
    
    return maxLength;
}

console.log(longestValidParentheses('(()')); // output: 2
console.log(longestValidParentheses(')()())')); // output: 4
console.log(longestValidParentheses('()))))(()())(')); //output: 6

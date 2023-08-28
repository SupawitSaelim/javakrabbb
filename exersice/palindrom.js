//palindrome
function isPalindrome(str) {
    let reverse_arr = str.split("").reverse();
    if (reverse_arr.join('') === str ) {
        return true
    }else {
        return false
    }
}
console.log(isPalindrome("racecar"));  // Should return true
console.log(isPalindrome("hello"));    // Should return false

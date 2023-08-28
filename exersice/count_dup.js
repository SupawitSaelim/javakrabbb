//count duplicate
function findDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return null;
}
console.log(findDuplicate([1, 2, 3, 2, 4, 5]));  // Should return 2
console.log(findDuplicate([7, 8, 9, 10]));      // Should return null

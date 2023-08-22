function simplePair(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === result) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

console.log(simplePair([1, 2, 3], 3)); // Output: [1, 3]
console.log(simplePair([1, 2, 3], 6)); // Output
console.log(simplePair([1, 2, 3], 9)); // null
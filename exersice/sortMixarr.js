// เรียง type เเละ sort 
function sortMixedArray(arr) {
    const numbers = arr.filter(item => typeof item === 'number').sort((a, b) => a - b);
    const strings = arr.filter(item => typeof item === 'string').sort();

    return numbers.concat(strings);
}
const mixedArray = [2, 'apple', 1, 'orange', 3, 'banana'];
console.log(sortMixedArray(mixedArray));  // ควรแสดงผลเป็น [1, 2, 3, 'apple', 'banana', 'orange']

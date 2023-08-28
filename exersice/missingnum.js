//เลขที่หายไป
function findMissingNumber(nums) {
    let expectedSum = (nums.length + 1) * (nums.length + 2) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
const inputArray = [1, 2, 3, 4, 6, 7, 8];
console.log(findMissingNumber(inputArray));  // ควรแสดงผลเป็น 5

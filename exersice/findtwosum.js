//twosum with target
function findTwoSum(nums, target) {
    const numIndexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndexMap.has(complement)) {
            return [numIndexMap.get(complement), i];
        }
        numIndexMap.set(nums[i], i);
    }
    return null;
}
const inputArray = [2, 7, 11, 15];
const targetSum = 17;
console.log(findTwoSum(inputArray, targetSum));  // ควรแสดงผลเป็น [0, 1]

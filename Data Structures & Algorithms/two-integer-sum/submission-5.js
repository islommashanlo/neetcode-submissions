class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let diffs = new Map();
        for (let i = 0; i < nums.length; i++) {
            diffs.set(nums[i], i)
        }
        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i]
            if (diffs.has(difference) && diffs.get(difference) !== i) {
                return [diffs.get(difference), i]
            }
        }
    }
}

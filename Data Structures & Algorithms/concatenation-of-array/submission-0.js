class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        const n = nums.length
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            ans[i] = num;
            ans[i+n] = num;
        }
        return ans
    }
}

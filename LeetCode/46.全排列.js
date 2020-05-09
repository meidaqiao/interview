/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (71.21%)
 * Likes:    578
 * Dislikes: 0
 * Total Accepted:    95.7K
 * Total Submissions: 128.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length;
    let res = [];
    let tmpPath = [];
    let backtrack = (tmpPath) => {
        if (tmpPath.length == n) {
            res.push(tmpPath);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!tmpPath.includes(nums[i])) {
                tmpPath.push(nums[i]);
                backtrack(tmpPath.slice());
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return res;
};
// @lc code=end


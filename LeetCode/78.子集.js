/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (74.58%)
 * Likes:    497
 * Dislikes: 0
 * Total Accepted:    71.5K
 * Total Submissions: 93K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(numss) {
    function generate(i, nums, item, result){
        if(i >= nums.length) {
            return;
        }
        item.push(nums[i]);
        result.push(item.concat());
        generate(i+1, nums, item, result);
        item.pop()
        generate(i+1, nums, item, result);
    }
    var result = []
    var item = []
    result.push(item)
    generate(0, numss, item, result);
    return result;
};
// @lc code=end


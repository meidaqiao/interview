/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (33.16%)
 * Likes:    255
 * Dislikes: 0
 * Total Accepted:    26K
 * Total Submissions: 72.7K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 * 
 * 示例 1:
 * 
 * 输入: [10,2]
 * 输出: 210
 * 
 * 示例 2:
 * 
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 * 
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length-i; j++) {
            if(nums[j] > nums[j+1]){
                let temp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = temp;
            } 
        } 
    }
};
// @lc code=end


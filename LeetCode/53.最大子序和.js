/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (46.92%)
 * Likes:    1713
 * Dislikes: 0
 * Total Accepted:    179.2K
 * Total Submissions: 360.5K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var result = [0]
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    result[1] = nums[0]
    result[2] = Math.max(nums[1], result[1] + nums[1])
    for (let index = 3; index <= nums.length; index++) {
        result[index] = Math.max(nums[index - 1], result[index - 1] + nums[index - 1])
    }
    return Math.max.apply(null,[].slice.call(result,1))
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.64%)
 * Likes:    1910
 * Dislikes: 0
 * Total Accepted:    178.9K
 * Total Submissions: 686.6K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] == nums[i-1]) continue;
        let L = i+1;
        let R = nums.length - 1
        while(L < R){
            let sum = nums[i] + nums[L] + nums[R]
            if(sum > 0){
                R--
            }else if(sum < 0){
                L++
            }else{
                result.push([nums[i], nums[L], nums[R]])
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
        }

    }
    return result
};
// @lc code=end


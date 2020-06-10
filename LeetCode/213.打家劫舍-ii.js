/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 *
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (38.05%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    37.8K
 * Total Submissions: 98.9K
 * Testcase Example:  '[2,3,2]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,2]
 * 输出: 3
 * 解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var n = nums.length;
    if(n == 1){
        return nums[0];
    }else if(n == 0){
        return 0;
    }
    function dpGO(nums){
       var n = nums.length;
       var dp = Array.from(new Array(n),() => new Array(n));
       dp[0][0] = 0;
       dp[0][1] = nums[0];
       for(var i = 1;i < nums.length;i++){
           dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]);
           dp[i][1] = nums[i]+dp[i-1][0];
       }
       return Math.max(dp[n-1][0],dp[n-1][1]);
    }
    var need1 = dpGO(nums.slice(1));
    var need2 = dpGO(nums.slice(0,nums.length-1));
    return Math.max(need1,need2);

};
// @lc code=end


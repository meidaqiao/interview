/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (34.58%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    32.3K
 * Total Submissions: 92.8K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 
 * 你找到的子数组应是最短的，请输出它的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 
 * 
 * 说明 :
 * 
 * 
 * 输入的数组长度范围在 [1, 10,000]。
 * 输入的数组可能包含重复元素 ，所以升序的意思是<=。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    // let stack = [];
    // let left = 0;
    // let right = nums.length - 1;
    // for (let i = 0; i < nums.length; i++) {
    //     while(stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
    //         right = Math.min(right, stack.pop);
    //     }
    //     stack.push(i)
    // }
    // stack = [];
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     while(stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
    //         left = Math.max(left, stack.pop);
    //     }
    //     stack.push(i)
    // }
    // return Math.max(right - left + 1, 0);
    if(nums.length == 1) return 0 ;
    const length = nums.length;
    let stack = [];

    let b = length - 1,
        e = 0;
    for (let i = 0; i < length; ++i) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            b = Math.min(b, stack.pop());
        }
        stack.push(i);
    }
    stack = [];
    for (let i = length - 1; i >= 0; --i) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            e = Math.max(e, stack.pop());
        }
        stack.push(i);
    }

    return Math.max(e - b + 1, 0);
};
// @lc code=end


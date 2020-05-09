/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (36.03%)
 * Likes:    417
 * Dislikes: 0
 * Total Accepted:    66.3K
 * Total Submissions: 177.6K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = new Set()
    var arr = []
    nums.sort((a, b) => a - b);
    for (let j = 0; j < nums.length; j++) {
        for (let i = j + 1; i < nums.length; i++) {
            // if (nums[i] > target) break;
            // if (i > 0 && nums[i] == nums[i - 1]) continue;
            let L = i + 1;
            let R = nums.length - 1
            console.log(L, R)
            while (L < R) {
                let sum = nums[j] + nums[i] + nums[L] + nums[R]
                if (sum > target) {
                    R--
                } else if (sum < target) {
                    L++
                } else {
                    var str = [nums[j], nums[i], nums[L], nums[R]].join("")
                    if(!result.has(str)){
                        result.add(str)
                        arr.push([nums[j], nums[i], nums[L], nums[R]])
                    }
                    while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                    while (L < R && nums[R] == nums[R - 1]) R--; // 去重
                    L++;
                    R--;
                }
            }
        }
    }
    return arr
};
// @lc code=end


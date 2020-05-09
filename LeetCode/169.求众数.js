/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.27%)
 * Likes:    529
 * Dislikes: 0
 * Total Accepted:    148K
 * Total Submissions: 235.8K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = new Map()
    var large = 0
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let value = map.get(nums[i]) + 1
            if (value > large) large = value;
            map.set(nums[i], value)
        } else {
            map.set(nums[i], 0)
        }
    }
    var key = null
    console.log(map, large)
    map.forEach((v, k) => {
        console.log(k, v)
        if (v == large) {
            key = k
        }
    })
    return key
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (53.72%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    47.5K
 * Total Submissions: 82.2K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = []
    var set = new Set()
    function generate(item){
        if(item.length == nums.length){
            let arr = item.map(a => nums[a])
            if(!set.has(arr.join(""))){
                result.push(arr)
                set.add(arr.join(""))
            }
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if(!item.includes(i)){
                item.push(i);
                generate(item.concat())
                item.pop()
            }
        }
    }
    generate([])
    return result
};
// @lc code=end


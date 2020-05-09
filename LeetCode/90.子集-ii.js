/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (56.53%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    26.6K
 * Total Submissions: 44.8K
 * Testcase Example:  '[1,2,2]'
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var set = new Set()
    var result = []
    result.push([])
    nums = nums.sort(compare)
    get(0, nums, [], result)
    function get(i, numArr, item, result){
        if(i >= numArr.length){
            return
        }
        item.push(numArr[i])
        let str = item.join()
        if(!set.has(str)){
            result.push(item.concat())
            set.add(str)
        }
        
        get(i+1, numArr, item, result)
        item.pop()
        get(i+1, numArr, item, result)
    }
    function compare(val1,val2){
        return val1-val2;
    };
    return result;
};
// @lc code=end


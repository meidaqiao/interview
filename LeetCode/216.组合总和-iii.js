/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (71.13%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 30.7K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    // if(n >= 18) {
    //     return []
    // }
    let result = [];
    let set = new Set();
    function generate(arr, index) {
        if(arr.length > k){
            return;
        }
        if(arr.length == k && arr.reduce((a, b) => {return a + b}) == n){
            if (set.has(arr.join(""))) {
                return
            }else {
                set.add(arr.join(""))
                result.push(arr.concat())
            }
        }
        for(let i = index; i <= 9; i++){
            if(arr.includes(i)) break;
            arr.push(i)
            generate(arr, index+1)
            arr.pop()
            // generate(arr, index+1)
        }
    }
    generate([], 1)
    return result;
};
// @lc code=end


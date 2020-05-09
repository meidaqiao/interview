/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (69.83%)
 * Likes:    232
 * Dislikes: 0
 * Total Accepted:    40.1K
 * Total Submissions: 54.8K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = []
    if(n == k){
        let arr= []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        result.push(arr)
        return result;
    }

    var set = new Set()
    function generate(start, item){
        if(item.length == k){
            result.push(item)
            return
        }
        for (let i = start; i <= n; i++) {
            if(!item.includes(i)){
                item.push(i)
                generate(i+1, item.concat())
                item.pop()
            }
        }
    }
    generate(1, [])
    return result;
};
// @lc code=end


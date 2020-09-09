/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (49.07%)
 * Likes:    378
 * Dislikes: 0
 * Total Accepted:    62.4K
 * Total Submissions: 121.3K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 说明：
 * 
 * 
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 * 
 * 
 * 示例 1:
 * 
 * 输入: n = 3, k = 3
 * 输出: "213"
 * 
 * 
 * 示例 2:
 * 
 * 输入: n = 4, k = 9
 * 输出: "2314"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let result = []
  function get(str) {
    if (str.length == n) {
      return result.push(str)
    }
    for (let index = 1; index <= n; index++) {
      if (str.indexOf(index) < 0 && result.length < k) {
        str += index
        get(str)
        str = str.substring(0, str.length - 1)
      }
    }
  }
  get('')
  console.log(result)
  // console.log()
  return result.sort((a, b) => { return Number(a) - Number(b) })[k - 1] + ''
};
// @lc code=end


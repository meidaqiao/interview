/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (34.36%)
 * Likes:    195
 * Dislikes: 0
 * Total Accepted:    22.2K
 * Total Submissions: 59.7K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    // function get(num, res) {
    //     if (num < 26) {
    //         return res = res + String.fromCharCode((num % 26) + 64)
    //     } else if (num == 26) {
    //         return res = res + "Z"
    //     } else {
    //         let largeNum = num / 26
    //         res = String.fromCharCode((largeNum % 26) + 64)
    //         console.log(largeNum,res)
    //         return get(num % 26, res)
    //     }
    // }
    // return get(n, "");

    let res = ''

    while (n > 0) {
      if (n % 26 !== 0) {
        res = String.fromCharCode((n % 26) + 64) + res
        n = (n / 26) | 0
      } else {
        res = 'Z' + res
        n = (n / 27) | 0
      }
    }
  
    return res
};
// @lc code=end


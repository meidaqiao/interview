/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (49.95%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    53.3K
 * Total Submissions: 103.8K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let maxLength = Math.max(num1.length, num2.length);
    num1 = num1.split("").reverse().join("")
    num2 = num2.split("").reverse().join("")
    let flag = 0
    let result = ""
    for (let i = 0; i < maxLength; i++) {
        let n1 = num1[i] || 0
        let n2 = num2[i] || 0
        let sum = Number(n1) + Number(n2) + flag
        if(sum >= 10) {
            flag = 1
            result = String(sum % 10) + result
        } else {
            flag = 0
            result = sum + result
        }
    }
    return flag > 0 ? "1" + result : result
};
// @lc code=end


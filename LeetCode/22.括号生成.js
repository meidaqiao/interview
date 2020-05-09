/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.47%)
 * Likes:    822
 * Dislikes: 0
 * Total Accepted:    90.6K
 * Total Submissions: 123K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n == 1)return ["()"];
    function generate(item, left, right,  result){
        if(left ==0 && right == 0){
            result.push(item)
            return
        }
        if(left > 0){
            generate(item+"(", left-1,right, result)
        }
        if(right > left){
            generate(item+")", left, right-1, result)
        }
        
    }
    var result = [];
    generate("", n, n, result)
    return result;
};
// @lc code=end


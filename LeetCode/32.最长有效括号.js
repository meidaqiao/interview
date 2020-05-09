/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (27.99%)
 * Likes:    561
 * Dislikes: 0
 * Total Accepted:    47.7K
 * Total Submissions: 159K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(!s.length)return 0 ;
    var num = 0;
    while (s.length) {
        var temp = s;
        s = s.replace('()', '');
        num++
        if (s == temp || !s.length){
            break;
        }
    }
    if(!s.length){
        return num * 2
    }else{
        return (num -1) * 2;
    }
};
// @lc code=end


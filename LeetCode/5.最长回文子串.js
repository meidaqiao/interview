/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.66%)
 * Likes:    1156
 * Dislikes: 0
 * Total Accepted:    92.6K
 * Total Submissions: 347K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length) {
        var ans = "";
        var max = 0;
        var len = s.length;
        for (var i = 0; i < len; i++)
            for (var j = i + 1; j <= len; j++) {
                var test = s.substring(i, j);
                if (flagHuiWen(test) && test.length >= max) {
                    ans = s.substring(i, j);
                    max = Math.max(max, ans.length);
                }
            }
        return ans;
    } else {
        return ""
    }
};
function flagHuiWen(s) {
    var len = s.length;
    for (var i = 0; i < len / 2; i++) {
        if (s.charAt(i) != s.charAt(len - i - 1)) {
            return false;
        }
    }
    return true;
}


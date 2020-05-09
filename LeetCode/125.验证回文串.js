/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (40.69%)
 * Likes:    169
 * Dislikes: 0
 * Total Accepted:    89.2K
 * Total Submissions: 207.6K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var newStr = []
    var arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        if (/^[a-zA-Z0-9]*$/g.test(arr[i])) {
            newStr.push(arr[i])
        }
    }
    var type = true
    for (let j = 0; j < newStr.length / 2; j++) {
        if (newStr[j].toLocaleLowerCase() != newStr[newStr.length - 1 - j].toLocaleLowerCase()) {
            type = false
            break;
        }
    }
    // if(newStr.length == 1)type = false;
    return type;
};
// @lc code=end


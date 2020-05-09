/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.47%)
 * Likes:    922
 * Dislikes: 0
 * Total Accepted:    214.5K
 * Total Submissions: 584.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length)return "";
    var a = ""
    var s = strs[0].split("").map((b) =>{return a+=b});
    a = ""
    for (let i = 0; i < s.length; i++) {
        var type = strs.every((item) => {
            return item.indexOf(s[i]) == 0
        })
        if(type){
            a = s[i]
        }else {
            break;
        }
    }
    return a
};
// @lc code=end


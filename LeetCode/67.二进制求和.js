/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (50.06%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    70.6K
 * Total Submissions: 135K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = [];
    var aa = a.split("").reverse().map(a => a-0)
    var bb = b.split("").reverse().map(a => a-0)
    var type = false;
    var length = aa.length>bb.length? aa.length: bb.length
    console.log(aa, bb, length)
    for (let i = 0; i < length; i++) {
        let num = (aa[i]||0)+(bb[i]||0)
        if(type)num++;
        if(num > 1){
            type = true
            result[i] = num%2
        }else {
            type = false
            result[i] = num
        }
    }
    if(type){
        result[length] = 1
    }
    console.log(result)
    return result.reverse().join("")
};
// @lc code=end


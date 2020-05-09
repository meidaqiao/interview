/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.38%)
 * Likes:    441
 * Dislikes: 0
 * Total Accepted:    132.4K
 * Total Submissions: 303.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var newDigits = digits.reverse()
    var type = false;
    for (let i = 0; i < newDigits.length; i++) {
        if(type||i== 0){
            newDigits[i] = newDigits[i]+1
            if(newDigits[i] > 9){
                newDigits[i] = 0
                type = true
            }else {
                type = false;
            }
        }
    }
    if(type){
        newDigits[newDigits.length] = 1
    }
    return newDigits.reverse()
};
// @lc code=end


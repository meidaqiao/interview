/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (63.64%)
 * Likes:    267
 * Dislikes: 0
 * Total Accepted:    67K
 * Total Submissions: 101.6K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for (let i = 0; i < numRows; i++) {
        var temp = [];
        for (let j = 0; j < i+1; j++) {
            if(j== 0 || j == i){
                temp[j] = 1
            }else {
                temp[j] = getValue(i-1, j-1) + getValue(i-1, j)
            }
        }
        result.push(temp)
    }
    function getValue(i, j){
        if(!result[i])return 0;
        if(!result[i][j]) return 0;
        return result[i][j]
    }
    return result
};
// @lc code=end


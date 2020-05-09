/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (57.49%)
 * Likes:    124
 * Dislikes: 0
 * Total Accepted:    42.8K
 * Total Submissions: 70.9K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [];
    for (let i = 0; i <= rowIndex; i++) {
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
    console.log(result)
    return result[rowIndex]
};
// @lc code=end


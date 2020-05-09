/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (62.28%)
 * Likes:    404
 * Dislikes: 0
 * Total Accepted:    67.7K
 * Total Submissions: 104.1K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let result = [];
    let x, y;
    for (let i = 0; i < grid.length; i++) {
      result[i] = []
      let data = grid[i]
      for (let j = 0; j < data.length; j++) {
        if(i == 0){
          result[i][j] = getValue(i,j-1) + data[j]
        }else {
          if(j == 0){
            result[i][j] = getValue(i-1,j) + data[j]
          }else {
            result[i][j] = Math.min(getValue(i-1,j), getValue(i,j-1)) + data[j]
          }
        }
        
        y = j
      }
      x = i
    }
    return result[x][y]

    function getValue(i, j) {
      if (result[i] != undefined && result[i][j] != undefined) {
        return result[i][j]
      } else {
        return 0
      }
    }
};
// @lc code=end


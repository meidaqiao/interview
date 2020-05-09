/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (31.66%)
 * Likes:    241
 * Dislikes: 0
 * Total Accepted:    47.1K
 * Total Submissions: 144.6K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 说明：m 和 n 的值均不超过 100。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let result = [];
    let x, y;
    for (let i = 0; i < obstacleGrid.length; i++) {
      result[i] = []
      let data = obstacleGrid[i]
      for (let j = 0; j < data.length; j++) {
        if (data[j] == 0) {
          result[i][j] = getValue(i - 1, j) + getValue(i, j - 1)
        } else {
          result[i][j] = 0;
        }
        if(i == 0 && j ==0 && data[0] == 0){
          result[i][j] = 1
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


/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (61.27%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    44.4K
 * Total Submissions: 69.6K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * 例如，给定三角形：
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 说明：
 * 
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let result = [];
    triangle.forEach((i, index) => {
        result[index] = []
        i.forEach((j, index2) => {
            if(index == (triangle.length -1)){
                result[index].push(triangle[index][index2])
            }else {
                result[index].push(0)
            }
        })
    })
    for (let i = result.length -2; i >= 0; i--) {
        for (let j = 0; j < result[i].length; j++) {
            result[i][j] = Math.min(result[i+1][j], result[i+1][j+1]) + triangle[i][j]
        }
    }
    return result[0][0]
};
// @lc code=end


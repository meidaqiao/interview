/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (75.38%)
 * Likes:    103
 * Dislikes: 0
 * Total Accepted:    19.2K
 * Total Submissions: 24.7K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result = [];
    let shu = new Set();
    let left = new Set();
    let right = new Set();
    function get(row, res) {
        if (row >= n) {
            result.push(res.concat())
            return;
        }
        for (let i = 0; i < n; i++) {
            if(shu.has(i) || left.has(row + i) || right.has(i - row)){
                continue;
            }
            res.push(i)
            shu.add(i)
            left.add(row + i)
            right.add(i - row)
            get(row + 1, res)
            res.pop();
            shu.delete(i)
            left.delete(row + i)
            right.delete(i - row)
        }
    }
    get(0, [])
    //[ [1, 3, 0, 2],[2, 0, 3, 1]]
    return result.length
};
// @lc code=end


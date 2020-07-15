/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (64.83%)
 * Likes:    363
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 47.5K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
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
    return result.map(function(arr) {
        return arr.map(function(item) {
            let str = ""
            for(let i = 0; i < n; i++){
                if(item == i){
                    str+="Q"
                }else {
                    str+="."
                }
            }
            return str
        })
    });
};
// @lc code=end


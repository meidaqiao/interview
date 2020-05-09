/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (34.61%)
 * Likes:    488
 * Dislikes: 0
 * Total Accepted:    63.4K
 * Total Submissions: 164.2K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var result = [];
    for (let index = 0; index <= amount; index++) {
        result.push(-1)
    }
    result[0] = 0;
    for (let index = 1; index <= amount; index++) {
        let data = []
        for (let i = 0; i <= coins.length; i++) {
            if (index - coins[i] >= 0 && result[index - coins[i]] !== -1) {
                data.push(result[index - coins[i]] + 1)
            }
        }
        result[index] = data.length ? Math.min.apply(null, data) : -1
    }
    return result[amount]
};
// @lc code=end


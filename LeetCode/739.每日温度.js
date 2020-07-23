/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode-cn.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (61.53%)
 * Likes:    445
 * Dislikes: 0
 * Total Accepted:    89.8K
 * Total Submissions: 140.1K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0
 * 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4,
 * 2, 1, 1, 0, 0]。
 * 
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * [73, 76, 72, 69, 71, 75, 74, 73]
 * [0, 0, 1, 1, 2, 4, 1, 1]
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let source = T.reverse();
    let stack = [];
    let result = [];
    for (let i = 0; i < source.length; i++) {
        let num = 0
        while(stack.length > 0 && source[i] >= source[stack[stack.length - 1]]) {
            stack.pop();
            // break;
        }
        result[i] = stack.length == 0? 0 : i - stack[stack.length - 1]
        stack.push(i)
    }
    return result.reverse();
};
// @lc code=end


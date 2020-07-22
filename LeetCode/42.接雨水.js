/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (45.93%)
 * Likes:    966
 * Dislikes: 0
 * Total Accepted:    68K
 * Total Submissions: 137.1K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [];
    let sum = 0;
    for(let i = 0; i < height.length; i++) {
        while(stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            let cur = stack.pop();
            if(stack.length == 0)break;
            let _height = Math.min(height[stack[stack.length - 1]], height[i]) - height[cur];
            let _width = i - stack[stack.length - 1] - 1;
            sum += _height * _width;
        }
        stack.push(i)
    }
    return sum;
};
// @lc code=end


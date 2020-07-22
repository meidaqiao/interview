/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (40.84%)
 * Likes:    790
 * Dislikes: 0
 * Total Accepted:    71.3K
 * Total Submissions: 173.3K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 
 * 
 * 
 * 
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 * 
 * 
 * 
 * 
 * 
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 * 2*1 1*2 5*1 5*2 2*3 2*4
 */

var largestRectangleArea = function(heights) {
    // heights.unshift(0); 
    // heights.push(0); 
    heights = [0].concat(heights).concat([0])
    let stack = [];
    let area = 0;
    for (let i = 0; i < heights.length; i++) {
      while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
        let cur = stack.pop();;
        let left = stack[stack.length - 1] + 1;
        let right = i;
        area = Math.max(area, (right - left) * heights[cur])
      }
      stack.push(i)
    }
    return area
};
// @lc code=end
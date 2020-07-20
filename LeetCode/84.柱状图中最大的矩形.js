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
    let result = [];
    result[0] = heights[0];
    for(let i = 1; i < heights.length;i++) {
        for(let j = 0; j < i; j++){
            if(heights[j] > heights[i]) {

            }else {

            }
        }
    }
};
// @lc code=end
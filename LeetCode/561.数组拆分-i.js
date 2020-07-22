/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 *
 * https://leetcode-cn.com/problems/array-partition-i/description/
 *
 * algorithms
 * Easy (71.00%)
 * Likes:    175
 * Dislikes: 0
 * Total Accepted:    41.8K
 * Total Submissions: 58.4K
 * Testcase Example:  '[1,4,3,2]'
 *
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到
 * n 的 min(ai, bi) 总和最大。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,4,3,2]
 * 
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 * 
 * 
 * 提示:
 * 
 * 
 * n 是正整数,范围在 [1, 10000].
 * 数组中的元素范围在 [-10000, 10000].
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // let x0 = nums.filter((a)=> {return a < 0})
    // let d0 = nums.filter((a)=> {return a >= 0})
    // x0 = x0.sort((a, b) => b-a)
    // d0 = d0.sort((a, b) => a-b)
    // let result = x0.concat(d0)
    // let sum = 0
    // result.forEach((item, index) => {
    //     if(index % 2 == 0){ 
    //         sum+=item
    //     }
    // })
    // return sum
    let sum = 0;
    nums.sort((a, b)=>a-b)
    nums.forEach((val, index)=>{
        // 从0开始，余数是0 为奇数项
        if(index%2 === 0) sum+=val
    })
    return sum
};
// @lc code=end


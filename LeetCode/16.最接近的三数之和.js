/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.47%)
 * Likes:    382
 * Dislikes: 0
 * Total Accepted:    83.9K
 * Total Submissions: 193.3K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    function getv(arr){
        if(!arr.length)return 0;
        return arr.reduce((a,b) => {return a+b});
    }
    let result = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // if(nums[i] > 0) break;
        if(i > 0 && nums[i] == nums[i-1]) continue;
        let L = i+1;
        let R = nums.length - 1
        while(L < R){
            console.log([nums[i], nums[L], nums[R]])
            let oldSum = getv(result)
            let newSum = getv([nums[i], nums[L], nums[R]])
            if(!result.length || (Math.abs(oldSum - target) > Math.abs(newSum - target))){
                console.log("jinlaile", [nums[i], nums[L], nums[R]])
                result = [nums[i], nums[L], nums[R]]
            }
            if(newSum > target){
                R--
            }else if(newSum < target){
                L++
            }else{
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
        }

    }
    return getv(result)
};
// @lc code=end


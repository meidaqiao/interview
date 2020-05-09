/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (29.60%)
 * Likes:    310
 * Dislikes: 0
 * Total Accepted:    48.8K
 * Total Submissions: 148.5K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    function isPrime(number) {
        if (typeof number !== 'number' || number < 2) {
            // 不是数字或者数字小于2
            return false;
        }
        if (number === 2) {//2是质数
            return true;
        } else if (number % 2 === 0) {//排除偶数
            return false;
        }
        var squareRoot = Math.sqrt(number);

        //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
        for (var i = 3; i <= squareRoot; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    var num = 0
    for (let i = 2; i < n; i++) {
        if(isPrime(i)){
            num++
        }
    }
    return num
};
// @lc code=end


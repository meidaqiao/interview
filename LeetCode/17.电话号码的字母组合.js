/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (50.57%)
 * Likes:    632
 * Dislikes: 0
 * Total Accepted:    94K
 * Total Submissions: 177.2K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(!digits)return [];
    var str = [
        ["a","b","c"],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
    ]

    var atrArr = digits.split("").map((a) => {
        return str[a-0-2]
    })
    if(digits.length == 1){
        return atrArr[0]
    }
    // console.log(atrArr[0])
    var result = atrArr[0].map(a => [a])
    atrArr.forEach((item, index) => {
        if(!index) return;
        var arr = []
        item.forEach((n) => {
            let temp = result.map((m) => {
                return m + n
            })
            arr = arr.concat(temp)
        })
        result = arr
    })
    // console.log(result);
    return result;
};
// @lc code=end


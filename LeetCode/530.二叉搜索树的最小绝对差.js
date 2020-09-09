/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (57.68%)
 * Likes:    124
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 32.2K
 * Testcase Example:  '[1,null,3,2]'
 *
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 * 
 * 输出：
 * 1
 * 
 * 解释：
 * 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中至少有 2 个节点。
 * 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
 * 相同
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let result = [];
    function get(node) {
        if(!node) {
            return
        }
        result.push(node.val)
        get(node.left);
        get(node.right);

    }
    get(root, Infinity);
    if(result.length < 2) {
        return 0
    }else {
        result = result.sort((a, b) => {return a - b})
        let res = Infinity;
        for(let i = 0; i < result.length - 1; i++) {
            res = Math.min(res, Math.abs(result[i] - result[i+1]))
        }
        return res;
    }
};
// @lc code=end


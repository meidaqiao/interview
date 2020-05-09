/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (47.50%)
 * Likes:    259
 * Dislikes: 0
 * Total Accepted:    59.1K
 * Total Submissions: 120.1K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root1, sum) {
    var result = [];
    function get(root, res) {
        if(!root)return;
        res.push(root.val);
        if (root.left) get(root.left, res);
        if (root.right) get(root.right, res);
        if (root.left == null && root.right == null) {
            if (res.reduce(function (a, b) {return a + b}) === sum) {
                result.push(res.map((a)=>a))
            }
        }
        res.pop();
    }
    get(root1, [])
    return !!result.length;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 *
 * https://leetcode-cn.com/problems/longest-univalue-path/description/
 *
 * algorithms
 * Easy (36.45%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 35.1K
 * Testcase Example:  '[5,4,5,1,1,5]'
 *
 * 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
 * 
 * 注意：两个节点之间的路径长度由它们之间的边数表示。
 * 
 * 示例 1:
 * 
 * 输入:
 * 
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         1   1   5
 * 
 * 
 * 输出:
 * 
 * 
 * 2
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * 
 * 
 * ⁠             1
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         4   4   5
 * 
 * 
 * 输出:
 * 
 * 
 * 2
 * 
 * 
 * 注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。
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
var longestUnivaluePath = function (root) {
    // if(!root || (!root.left && !root.right)) {
    //     return 0
    // }
    // let result = [];
    // let mp = new Map();
    // mp.set("null", 0)
    // function get(pre, node, res) {
    //     if(pre == node.val) {
    //         if(mp.has(String(node.val) + String(pre))) {
    //             mp.set(String(node.val) + String(pre), mp.get(String(node.val) + String(pre)) + 1)
    //         } else {
    //             mp.set(String(node.val) + String(pre), 1)
    //         }
    //     }
    //     if(node.left) get(node.val, node.left, res);
    //     if(node.right) get(node.val, node.right, res);
    //     res.pop();
    // }
    // get(null, root, result)
    // return Math.max.apply(null, [...mp.values()].filter(a => a >= 0))
    let result = 0;
    function get(node) {
        if (!node) return 0;
        let left = get(node.left);
        let right = get(node.right);
        let leftPath = 0, rightPath = 0
        if (node.left && node.left.val == node.val) leftPath = left + 1
        if (node.right && node.right.val == node.val) rightPath = right + 1
        result = Math.max(result, leftPath + rightPath)
        return Math.max(leftPath, rightPath)
    }
    get(root);
    return result;
};
// @lc code=end


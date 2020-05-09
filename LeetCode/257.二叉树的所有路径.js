/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (59.59%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    28.6K
 * Total Submissions: 45.6K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root1) {
    var result = [];
    function get(root, res) {
        if(!root)return;
        res.push(root.val);
        if (root.left) get(root.left, res);
        if (root.right) get(root.right, res);
        if (root.left == null && root.right == null) {
            result.push(res.join("->"))
        }
        res.pop();
    }
    get(root1, [])
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (70.50%)
 * Likes:    489
 * Dislikes: 0
 * Total Accepted:    145.5K
 * Total Submissions: 200.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
var maxDepth = function(root) {
    if(!root)return 0;
    var result = [];
    var stack = [];
    // getPath(root, [])
    function getPath(node, res){
        if(node)res.push(node.val);
        if(node.left)getPath(node.left, res);
        if(node.right)getPath(node.right, res);
        if(node.left == null && node.right == null){
            result.push(res.length)
        }
        res.pop()
    }
    // return Math.max.apply(null ,result)
    stack.push(root)
    while(stack.length){
        var arr = [];
        var temp = [];
        while(stack.length){
            var node = stack.shift();
            if(node)arr.push(node.val);
            if(node.left)temp.push(node.left);
            if(node.right)temp.push(node.right);
        }
        stack = temp
        result.push(arr)
    }
    return result.length
};
// @lc code=end


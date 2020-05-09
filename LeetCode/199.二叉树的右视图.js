/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (60.43%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    20.8K
 * Total Submissions: 32.5K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 示例:
 * 
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 * 
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root)return [];
    let result = [];
    let stack = [root];
    while(stack.length){
        let temp = [];
        while(stack.length){
            let node = stack.shift();
            if(node&&!stack.length)result.push(node.val);
            if(node.left)temp.push(node.left);
            if(node.right)temp.push(node.right);
        }
        stack = temp
    }
    return result;
};
// @lc code=end


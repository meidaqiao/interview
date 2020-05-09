/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (54.38%)
 * Likes:    328
 * Dislikes: 0
 * Total Accepted:    70.8K
 * Total Submissions: 124.6K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // function getSome(node1, node2) {
    //     if (node1 === null && node2 === null) {
    //         return true;
    //     }
    //     if (node1 === null || node2 === null) {
    //         return false;
    //     }
    //     return p.val === q.val && getSome(p.left, q.left) && getSome(p.right, q.right)
    // }
    // if (root === null) return true;
    // return getSome(p, q)
    let resultp = []
    let resultq = []
    let dfsp = function (node) {
        if (node) {
            resultp.push(node.val);
            dfsp(node.left);
            dfsp(node.right);
        }else {
            resultp.push("null");
        }
    }
    let dfsq = function (node) {
        if (node) {
            resultq.push(node.val);
            dfsq(node.left);
            dfsq(node.right);
        }else {
            resultq.push("null");
        }
    }
    dfsp(p)
    dfsq(q)
    console.log(resultq)
    console.log(resultp)
    return resultp.join("") == resultq.join("")
};
// @lc code=end


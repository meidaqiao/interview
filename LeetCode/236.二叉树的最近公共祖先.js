/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (57.06%)
 * Likes:    412
 * Dislikes: 0
 * Total Accepted:    51.4K
 * Total Submissions: 84.8K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出: 5
 * 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉树中。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var result1 = [];
    var result2 = [];
    var path1 = [];
    var path2 = [];
    var finish1 = 0;
    var finish2 = 0;
    reorder(root, p, path1, result1, finish1,1)
    reorder(root, q, path2, result2, finish2,2)
    console.log(result1.map((a) => a.val));
    console.log(result2.map((a) => a.val));
    var mtq = 0;
    var length = result1.length> result2.length? result1.length:result2.length
    for (var i = 0; i < length; i++) {
        // console.log(result1[i],result2[i], result2[i+1], result1[i+1])
        if(result1[i] === result2[i]){
            mtq = result1[i];
            // console.log(mtq);
            // break;
        }
    }
    return mtq;
    function reorder(node, search, path, result1111, finish,t){
        if(!node || finish){
            return
        }
        path.push(node)
        if(node == search){
            // console.log(path)
            finish = 1;
            if(t == 1){
                result1 = path.concat()
            } else {
                result2 = path.concat()
            }
            // result1111 = path.concat()
        }
        reorder(node.left, search, path, result1111, finish,t)
        reorder(node.right, search, path, result1111, finish,t)
        path.pop();
    };
};

// @lc code=end


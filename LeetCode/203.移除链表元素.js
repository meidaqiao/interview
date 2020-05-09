/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (42.11%)
 * Likes:    358
 * Dislikes: 0
 * Total Accepted:    66.8K
 * Total Submissions: 149.4K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var start = new ListNode(null)
    start.next = head
    var cur = head;
    var pre = start
    while(cur){
        if(cur.val == val){
            pre.next = cur.next;
            cur = cur.next
        }else {
            pre = cur
            cur = cur.next
        }
    }
    return start.next
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (57.96%)
 * Likes:    224
 * Dislikes: 0
 * Total Accepted:    43.2K
 * Total Submissions: 73.8K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 
 * 示例:
 * 
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let resultMin = new ListNode(null);
    let min = resultMin;
    let resultMax = new ListNode(null);
    let max = resultMax;
    while(head) {
        if(head.val < x) {
            min.next = new ListNode(head.val);
            min = min.next;
        }else {
            max.next = new ListNode(head.val);
            max = max.next;
        }
        head = head.next;
    }
    min.next = resultMax.next;
    return resultMin.next;
};
// @lc code=end


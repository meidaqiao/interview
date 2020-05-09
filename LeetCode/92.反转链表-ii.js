/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (46.25%)
 * Likes:    281
 * Dislikes: 0
 * Total Accepted:    31.2K
 * Total Submissions: 64.1K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var num = n - m + 1;
    var pre_head = null;
    var result = head;
    while (head && --m) {
        pre_head = head
        head = head.next;
    }
    var list_tail = head;
    var new_list = null;
    while(head && num) {
        var temp = head.next;
        head.next = new_list;
        new_list = head;
        head = temp;
        num--;
    }
    list_tail.next = head;
    if(pre_head){
        pre_head.next = new_list
    }else {
        result = new_list
    }
    return result;
};
// @lc code=end


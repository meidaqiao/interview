/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (47.87%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    48.7K
 * Total Submissions: 101.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let result = new ListNode(null)
    result.next = head;
    let node = result.next;
    let last = result;
    while (node) {
        let val = node.val;
        let temp = node.next;
        if(temp && (temp.val == val)) {
            while(temp){
                if(temp.val == val) {
                    temp = temp.next
                }else {
                    last.next = temp;
                    temp = null;
                }
            }
        }
        last = node;
        node = node.next
    }
    return result.next
};
// @lc code=end


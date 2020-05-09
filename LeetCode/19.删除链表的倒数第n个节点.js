/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (35.10%)
 * Likes:    752
 * Dislikes: 0
 * Total Accepted:    144.4K
 * Total Submissions: 377.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 反转链表
    let prev = null;
    let curr = head;
    var reverse = (prev,curr) => {
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev
    }
    let newHead = reverse(prev,curr);
    // 边界条件处理
    if(n == 1){
        return reverse(null,newHead.next);
    }
    // 查询节点
    let findNodeByIndex = (currSearchTmp,n) => {
        let pos = 1;
        while(currSearchTmp && pos != n){
            currSearchTmp = currSearchTmp.next
            pos++
        }
        return currSearchTmp
    }
    let currSearch = findNodeByIndex(newHead,n);
    // 查找前一个节点
    let pre = findNodeByIndex(newHead,n-1);
    // 删除节点
    pre.next = currSearch.next;
    let prevNeed = null;
    let currNeed = newHead;
    // 反转回来
    return reverse(prevNeed,currNeed)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (49.65%)
 * Likes:    412
 * Dislikes: 0
 * Total Accepted:    85.2K
 * Total Submissions: 163.2K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 * 
 * 
 * 示例:
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.list = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.list.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.list.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.list.pop()
    return this.list[this.list.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.list)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


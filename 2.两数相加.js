/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var newL = new ListNode()
  let pointer = newL // 一个用于计算的链表
  var carry = 0 // 设置一个进位储存
  while(l1 || l2 || carry) {
    var p1 = l1 ? l1.val : 0
    var p2 = l2 ? l2.val : 0
    var sum = p1 + p2 + carry

    if(sum > 9) {
      pointer.next = new ListNode(sum % 10)
      carry = 1
    } else {
      pointer.next = new ListNode(sum)
      carry = 0
    }
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
    pointer = pointer.next
  }
  return newL.next
};
// @lc code=end


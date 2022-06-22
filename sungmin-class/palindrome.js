/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let orig = '';
  let rev = '';
  while (current) {
    orig += current.val;
    rev = current.val + rev;
    current = current.next;
  }

  return orig === rev;
};

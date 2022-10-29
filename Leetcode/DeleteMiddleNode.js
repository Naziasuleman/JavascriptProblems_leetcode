/**ou are given the head of a linked list. Delete the middle node,
 * and return the head of the modified linked list. */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//linked list: 1, 2, 3, 4, 6
var deleteMiddle = function (head) {
  if (head.next == null) {
    head = null;
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    if (fast == null || fast.next == null) {
      break;
    }
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

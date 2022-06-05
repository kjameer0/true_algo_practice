function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let prev = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    prev = prev.next;
  }
  prev.next = prev.next ? prev.next.next : null;
  return dummy.next;
};

var detectCycle = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy.next;
  let slow = dummy;
  while (fast && fast.next) {
    if (slow === fast) {
      fast = slow.next;
      let table = new Map();
      table.set(slow, true);
      while (fast !== slow) {
        table.set(fast, true);
        fast = fast.next;
      }
      let secondPass = dummy;
      while (!table.has(secondPass)) {
        secondPass = secondPass.next;
      }
      return secondPass;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return null;
};

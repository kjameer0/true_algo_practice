class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
var removeElements = function (head, val) {
  let newNode = new ListNode();
  newNode.next = head;
  let current = newNode;
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return newNode.next;
};

`Algorithm:
1. create a dummy node so you have something to return
2. set current to be the dummy
3. while there are still elements
4. if the upcoming value is target make the next value the one past it
5. otherwise look at the next value
6. return the head that you started with`;

var removeElements2 = function (head, val) {
  let newNode = { val: "x", next: null };
  newNode.next = head;
  let current = newNode;
  while (current && current.next) {
    if (current.next.val === val) current.next = current.next.next;
    current = current.next;
  }
  return newNode.next;
};

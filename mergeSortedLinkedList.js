const { lazyrouter } = require("express/lib/application");
const { header, is } = require("express/lib/request");

var mergeTwoLists = function (list1, list2) {
  let dummyHead = new ListNode();
  let finalHead = dummyHead;
  while (list1 && list2) {
    let comparisonNum = list1.val <= list2.val ? list1 : list2;
    dummyHead.next = comparisonNum;
    dummyHead = dummyHead.next;
    if (comparisonNum === list1) list1 = list1.next;
    if (comparisonNum === list2) list2 = list2.next;
  }
  dummyHead.next = list1 ? list1 : list2;
  return finalHead.next;
};
//algorithm
// create ListNode for dummy head, returning whatever .next is
// store dummyhead to return it later  (finalHead)
// while both list1 and list2 are not at their Tail
// compare current value of list1 and list2
// dummy's next value is the smaller or equal of the 2
// move dummy pointer to its Tail
// whichever of list1 or list2 was added to dummy, move that pointer forward
// when one list reaches its end, append the rest of the other one to dummy

/*the idea with this algorithm is to start
a dummy head to create a new path for the smallest values
you continually check the values in list 1 and list 2
and add the smaller to the dummy's chain
you keep doing that while moving the pointers for the lists
as their values get added to the dummy
at the end just pop the the not fully traversed list onto the end of the dummy and return dummy.next */

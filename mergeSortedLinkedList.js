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

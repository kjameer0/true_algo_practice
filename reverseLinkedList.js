var reverseList = function (head) {
  let newHead = head; //
  let oldHead = null;
  while (newHead) {
    let save = newHead.next; //save ref to rest of linked list
    newHead.next = oldHead; //change pointer to position behind current pointer instead of to the next number
    oldHead = newHead; //old pointer moves one forward after connection is created
    newHead = save; // keep moving through original path
  }
  return oldHead;
};

//algorithm
/*
create a null pointer to signify one place in list
behind head
loop through entire list
save a reference to the original path of the list
(when .next gets changed to oldhead, you need a way to
  get back to the original forward pointing linked list
  )
  change the current node to point to the one behind instead of in front
  move the old pointer one node forward so the next iteration can point there
  set the head to be where we saved at the beginning of the iteration */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Queue() creates a new queue that is empty. It needs no parameters and returns an empty queue.
class Queue {
  constructor() {
    this.queue = {};
    this.first = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.first) this.first = node;
  }
}

// enqueue(item) adds a new item to the rear of the queue. It needs the item and returns nothing.

// dequeue() removes the front item from the queue. It needs no parameters and returns the item. The queue is modified.

// isEmpty() tests to see whether the queue is empty. It needs no parameters and returns a boolean value.

// size() returns the number of items in the queue. It needs no parameters and returns an integer.

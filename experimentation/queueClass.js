class Queue {
  constructor() {
    this.q = {};
    this.size = 0;
    this.tail = null;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.q.val;
  }
  enqueue(val) {
    const node = {
      val: val,
      next: null,
    };
    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.q = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    if (this.size === 0) throw new Error("queue empty");
    const node = this.q.val;
    this.q = this.q.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return node;
  }
}
const q = new Queue();
q.enqueue(1);
console.log(q);
q.enqueue(14);
q.enqueue(13);
q.enqueue(13);
q.enqueue(15);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);

class Heap {
  constructor(comparator, arr) {
    this.heap = arr || [];
    this.size = 0;
    this.comparator = comparator ? comparator : (a, b) => a > b;
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChild(index) {
    let idx = this.getLeftChildIndex(index);
    return idx >= 0 ? this.heap[idx] : false;
  }
  getRightChild(index) {
    let idx = this.getRightChildIndex(index);
    return idx >= 0 ? this.heap[idx] : false;
  }
  getParent(index) {
    let idx = this.getParentIndex(index);
    return idx >= 0 ? this.heap[idx] : false;
  }
  heapifyUp(index) {
    while (
      this.hasParent(index) &&
      !this.comparator(this.getParent(index), this.heap[index])
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }
  heapifyDown(index = 0) {
    while (this.hasLeftChild(index)) {
      let current = this.heap[index];
      let left = this.getLeftChild(index);
      let nextIdx = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.comparator(this.getRightChild(index), left)
      ) {
        nextIdx = this.getRightChildIndex(index);
      }
      if (this.comparator(current, this.heap[nextIdx])) break;
      this.swap(nextIdx, index);
      index = nextIdx;
    }
  }
  insert(node) {
    this.heap.push(node);
    this.size++;
    this.heapifyUp(this.size - 1);
  }
  removeTop() {
    if (!this.size) return "no items";
    let data = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap.pop();
    this.size--;
    this.heapifyDown();
    return data;
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}
const comparator = (a, b) => {
  a = Math.sqrt(a[0] ** 2 + a[1] ** 2);
  b = Math.sqrt(b[0] ** 2 + b[1] ** 2);
  return a < b;
};
const h = new Heap(comparator);
let arr = [4, 54, 63, 2, 6, 78, 876];
const points = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
points.forEach((e) => h.insert(e));
console.log(h.removeTop());
console.log(h.removeTop());

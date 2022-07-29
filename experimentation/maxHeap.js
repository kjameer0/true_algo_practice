class MaxHeap2 {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  getParentIndex(index) {
    return Math.floor(index - 1) / 2;
  }
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
  getRightChildIndex(index) {
    return index * 2 + 2;
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
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }
  left(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }
  right(index) {
    return this.storage[this.getRightChildIndex(index)];
  }
  swap(index1, index2) {
    console.log(this.storage[index1], this.storage[index2], "swap");
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }
  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) < this.storage[index]) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyUp(this.getParentIndex(index));
    }
  }
  insert(data) {
    this.storage[this.size] = data;
    this.size++;
    this.heapifyUp(this.size - 1);
  }
  heapifyDown(index) {
    index = 0;
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.right(index) > this.left(index)) {
        largerChildIndex = this.getRightChildIndex(index);
      }
      if (this.storage[index] > this.storage[largerChildIndex]) {
        break;
      } else this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }
  removeMax() {
    if (this.size === 0) throw new Error("Empty Heap");
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.storage.pop();
    this.size--;
    this.heapifyDown(0);
    return data;
  }
  recursiveHeapDown(index) {
    let largest = index;
    if (
      this.hasLeftChild(largest) &&
      this.storage[largest] < this.left(largest)
    ) {
      largest = this.getLeftChildIndex(largest);
    }
    if (
      this.hasRightChild(index) &&
      this.storage[largest] < this.right(largest)
    ) {
      largest = this.getRightChildIndex(largest);
    }
    if (largest !== index) {
      this.swap(index, largest);
      this.recursiveHeapDown(largest);
    }
  }
}

let arr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
let heap = new MaxHeap2();
for (let i = 0; i < arr.length; i++) {
  heap.insert(arr[i]);
}
heap.removeMax();
console.log(heap);

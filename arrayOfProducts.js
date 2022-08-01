function arrayOfProducts(array) {
  // Write your code here.
  let left = Array(array.length).fill(1);
  let right = Array(array.length).fill(1);
  let res = Array(array.length).fill(1);
  let lProduct = 1,
    rProduct = 1;
  for (let i = 0; i < left.length; i++) {
    left[i] = lProduct;
    lProduct = array[i] * lProduct;
  }
  for (let j = array.length - 1; j >= 0; j--) {
    right[j] = rProduct;
    rProduct = array[j] * rProduct;
  }
  array.forEach((e, index) => {
    res[index] = left[index] * right[index];
  });
  return res;
}

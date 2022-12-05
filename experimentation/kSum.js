let res = [];
let ot = [];
ot.push(1);
ot.push(2);
res.push(ot);
ot.pop();
res.push(ot);
//console.log(res);
const nums = [1, 0, -1, 0, -2, 2];
function kSum(nums, index, k) {}

const props = {};
props[3] = 2;
props.hi = "lol";

console.log(props);
function sum(a, b) {
  return a + b;
}
sum(1, 2);
let num = [1, 2, 3, 4];
function sumArr(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  });
  return sum;
}

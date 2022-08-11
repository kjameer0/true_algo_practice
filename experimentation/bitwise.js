function convert(numberToConvert) {
  const bits = 32;
  const arr = [];

  for (let i = 0; i < bits; i++) {
    let mask = 1;
    const bitToConvert = numberToConvert & (mask << i);
    if (bitToConvert === 0) {
      arr[i] = 0;
    } else arr[i] = 1;
  }
  const binary = arr.reverse().join("");
  return [numberToConvert, binary];
}

function addBinary(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  let res = [];
  let len = a.length > b.length ? a.length : b.length;
  let carry = 0;
  let digit;
  for (let i = 0; i < len; i++) {
    let curA = Number(a[i]) || 0;
    let curB = Number(b[i]) || 0;
    if (carry) {
      digit = String(curA ^ curB ? 0 : 1);
      carry = curA | curB;
    } else {
      digit = String(curA ^ curB);
      carry = curA & curB;
    }
    res.push(digit);
  }
  if (carry) res.push(String(carry));
  return res.reverse().join("");
}

console.log(addBinary("11", "1"));

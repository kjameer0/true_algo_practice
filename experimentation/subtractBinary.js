const { max } = require("pg/lib/defaults");

function convert(x) {
  let count = Math.floor(Math.log2(x));
  let res = "";
  while (count >= 0) {
    if (x >= 2 ** count) {
      res += "1";
      x -= 2 ** count;
    } else res += "0";
    count--;
  }
  return res;
}
function subtract(x, y) {
  x = x.split("");
  let digit,
    carry,
    res = "";
  let i = x.length - 1,
    j = y.length - 1;
  while (i >= 0 || j >= 0) {
    let curX = x[i] || "0";
    let curY = y[j] || "0";
    if (curX === curY) digit = "0";
    else if (curX === "1") digit = "1";
    else {
      carry = i;
      while (carry >= 0 && x[carry] !== "1") carry--;
      if (carry >= 0) {
        x[carry++] = "0";
        while (carry > i) x[carry++] = "1";
        digit = "1";
      }
    }
    res = digit + res;
    i--;
    j--;
  }
  return res;
}

var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if (dividend === 0) return 0;
  let isPos = Math.sign(dividend) === Math.sign(divisor);
  let count = 1;
  let quotient = 0;
  let step = Math.abs(divisor);
  let divided = step;
  let total = Math.abs(dividend);
  while (total >= divided) {
    if (total >= step) {
      total -= step;
      quotient += count;
      count++;
      step += divided;
    } else {
      step = divided;
      count = 1;
    }
  }
  return isPos ? quotient : -quotient;
};

//console.log(divide(300, 10));
function sep(top, bottom) {
  if (top === -2147483648 && bottom === -1) return 2147483647;
  let sign = Math.sign(top) === Math.sign(bottom);
  top = Math.abs(top);
  bottom = Math.abs(bottom);
  if (top < bottom) return 0;
  let count = 0;
  let quo = 0;
  while (top >= bottom) {
    if (top - (bottom << count) < bottom) count = 0;
    top -= bottom << count++;
    quo += 1 << count;
  }
  if (quo > 2147483647) quo = 2147483647;
  return sign ? quo >>> 1 : -(quo >>> 1);
}
//console.log(sep(1, 2));

var divide2 = function (dividend, divisor) {
  var rem = Math.abs(dividend);
  var div = Math.abs(divisor);
  var quo = 0;
  // subtract divisor bit by bit, starting from most significant bit
  for (var b = 31; b >= 0; b--) {
    console.log((rem >>> b).toString(2), (rem >>> b).toString(2).length);
    if (rem >>> b >= div) {
      quo |= 1 << b; // record that 2**b instances of the divisor can fit in the remainder
      rem -= div << b; //remove 2**B divisors from the remaining value
    }
  }
  quo >>>= 0; // make unsigned
  if (dividend > 0 !== divisor > 0) quo = -quo; // add sign
  return quo > -0x80000000
    ? quo < 0x7fffffff
      ? quo
      : 0x7fffffff
    : -0x80000000; // check bounds
};

//console.log(divide2(-(2 ** 31), 2));
console.log((220).toString(2));
//return quo > -0x80000000 ? quo < 0x7FFFFFFF ? quo : 0x7FFFFFFF : -0x80000000;
// if qou > -max
//   if qou < +max
//     return quo
//     else return +max
// else return -max

function divide10(top, bottom) {}
console.log((300).toString(10));

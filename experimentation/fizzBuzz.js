function fizzBuzz(num = 50) {
  for (let i = 1; i <= 50; i++) {
    let res = "";
    if (i % 3 === 0) res += "Fizz";
    if (i % 5 === 0) res += "Buzz";
    if (i % 7 === 0) res += "Baz";
    console.log(res || i);
  }
}
//fizzBuzz();

function fib(n) {
  if (n < 2) return n;
  let prev = 0;
  let cur = 1;
  let num;
  for (let i = 2; i <= n; i++) {
    num = prev + cur;
    prev = cur;
    cur = num;
  }
  return num;
}
//console.log(fib(10));

var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";

  const obj = {};

  for (const i of s) obj[i] = i;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (obj[element.toUpperCase()] && obj[element.toLowerCase()]) continue;

    const prev = longestNiceSubstring(s.substring(0, i));
    const next = longestNiceSubstring(s.substring(i + 1));

    return prev.length >= next.length ? prev : next;
  }

  return s;
};

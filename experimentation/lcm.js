function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

console.log(gcd(60, 15));
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
let num = lcm(12, 20);
console.log(lcm(num, 35));

function fib(n, table = {}) {
  if (n <= 2) return 1;
  if (table[n]) return table[n];
  else {
    table[n] = fib(n - 2, table) + fib(n - 1, table);
    return table[n];
  }
}
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
console.log(fib(50));
//console.log(fib(50));

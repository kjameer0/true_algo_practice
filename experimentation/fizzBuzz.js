function fizzBuzz(num = 50) {
  for (let i = 1; i <= 50; i++) {
    let res = "";
    if (i % 3 === 0) res += "Fizz";
    if (i % 5 === 0) res += "Buzz";
    if (i % 7 === 0) res += "Baz";
    console.log(res || i);
  }
}
fizzBuzz();

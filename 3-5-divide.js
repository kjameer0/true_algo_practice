// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//total = 3 * number of 3's *
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function divide(number) {
  let sum = 0;
  let i = 0;
  while (i < number) {
    if (i % 3 === 0) {
      sum += i;
    }
    if (i % 5 === 0) {
      sum += i;
    }
    i++;
  }
  console.log("result");
  return sum;
}
function calculate(number) {
  let numFive =
    number % 5 !== 0 ? Math.floor(number / 5) : Math.floor(number / 5) - 1;
  let numThree =
    number % 3 !== 0 ? Math.floor(number / 3) : Math.floor(number / 3) - 1;
  let numFifteen =
    number % 15 !== 0 ? Math.floor(number / 15) : Math.floor(number / 15) - 1;
  let finFive = (numFive * (numFive + 1)) / 2;
  let finThree = (numThree * (numThree + 1)) / 2;
  let finFifteen = (numFifteen * (numFifteen + 1)) / 2;
  return 3 * finThree + 5 * finFive - 15 * finFifteen;
}
//console.log((1 + 2 + 3 + 4 + 5 + 6) * 3);
console.log(calculate(49));

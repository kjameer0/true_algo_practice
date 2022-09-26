function minimumBribes(q) {
  // Write your code here
  let total = 0;
  let correct;
  for (let i = q.length - 1; i >= 0; i--) {
    correct = i + 1;
    let j = i;
    while (j && q[j] !== correct) {
      j--;
      if (i - j > 2) {
        console.log("Too chaotic");
        return;
      }
    }
    total += i - j;
    if (i - j === 1) [q[i], q[i - 1]] = [q[i - 1], q[i]];
    else if (i - j === 2) {
      [q[i - 2], q[i - 1]] = [q[i - 1], q[i - 2]];
      [q[i], q[i - 1]] = [q[i - 1], q[i]];
    }
  }
  console.log(total);
}

let set1 = new Set();
set1.add(1);
set1.add(1);
console.log(set1.has(1));

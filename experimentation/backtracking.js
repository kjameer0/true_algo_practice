var readBinaryWatch = function (turnedOn) {
  let hr = 0;
  let min = 0;
  let res = [];
  backtrack(hr, min, turnedOn, res);
  return res;
  function backtrack(hr, min, remaining, res) {
    if (remaining === 0) {
      let time = stringTime(hr, min);
      if (!res.includes(time)) res.push(time);
      return;
    }
    for (let i = 0; i <= 3; i++) {
      let place = 1 << i;
      if (!(place & hr)) {
        hr ^= place;
        if (hr < 12) backtrack(hr, min, remaining - 1, res);
        hr ^= place;
      }
    }
    for (let i = 0; i <= 5; i++) {
      let place = 1 << i;
      if (!(place & min)) {
        min ^= place;
        if (min < 60) backtrack(hr, min, remaining - 1, res);
        min ^= place;
      }
    }
  }
  function stringTime(hr, min) {
    return `${String(hr)}:${min <= 9 ? `0` : ""}${min}`;
  }
};
//console.log(readBinaryWatch(8));

const pop = (n) => (n ? (1 & n) + pop(n >> 1) : 0);
const hours = Array.from({ length: 4 }, (_) => []);
const mins = Array.from({ length: 6 }, (_) => []);
//console.log(pop(2));
for (let i = 0; i < 12; i++) hours[pop(i)].push(i);
for (let i = 0; i < 60; i++) mins[pop(i)].push(String(i).padStart(2, 0));
console.log("hui");
console.log(hours);
console.log("fuck");
console.log(mins);

var readBinaryWatch2 = function (num) {
  const times = [];

  for (let i = 0; i <= num; i++) {
    let h = hours[i];
    let m = mins[num - i];

    if (h && m) {
      h.forEach((hh) => {
        m.forEach((mm) => {
          times.push(hh + ":" + mm);
        });
      });
    }
  }

  return times;
};

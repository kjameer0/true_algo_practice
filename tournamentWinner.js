function tournamentWinner(competitions, results) {
  // Write your code here.
  let max = "";
  let map = { "": 0 };
  let winner;
  for (let i = 0; i < competitions.length; i++) {
    winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
    map[winner] = map.hasOwnProperty(winner) ? map[winner] + 3 : 3;
    max = map[winner] > map[max] ? winner : max;
  }
  return max;
}

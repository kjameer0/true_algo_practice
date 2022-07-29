class Bubble {
  //constructor sets up basic instance of object
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  smash() {
    this.x = this.x * 2;
    this.y = this.y * 2;
  }
}
let bub = new Bubble(100, 200);
console.log(bub);
bub.smash();
console.log(bub);

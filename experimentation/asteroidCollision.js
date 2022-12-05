var asteroidCollision = (asteroids) => {
  const stack = [asteroids[0]];
  for (let i = 1; i < asteroids.length; i++) {
    const cur = asteroids[i];
    stack.push(cur);
    while (stack[stack.length - 2] > 0 && stack[stack.length - 1] < 0) {
      let right = stack.pop(),
        left = stack.pop();
      if (Math.abs(left) === Math.abs(right)) break;
      stack.push(Math.abs(left) > Math.abs(right) ? left : right);
    }
  }
  return stack;
};

/*
start stack
get two asteroids on the stack
while the two most recent are moving toward eachother
pop both
if theyre equal move on
put greater abs asteroid back on stack;
 */

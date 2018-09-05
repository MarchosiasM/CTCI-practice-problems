/* TEST */

const numWays = (N) => {
  let count = 0;
  const recurse = (int) => {
    if (int === 0) {
      count++;
      return;
    }
    if (int < 0) {
      return;
    }
    recurse(int - 1);
    recurse(int - 2);
    recurse(int - 3);
  };
  recurse(N);
  return count;
};

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
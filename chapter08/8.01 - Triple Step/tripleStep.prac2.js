const numWays = (N) => {
  var count = 0;
  const recurse = (number) => {
    if (number === 0) {
      count++;
      return;
    } else if (number < 0) {
      return;
    } else {
      recurse(number - 1);
      recurse(number - 2);
      recurse(number - 3);
    }
    return;
  };
  recurse(N);
  return count;
};

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
console.log(numWays(7));
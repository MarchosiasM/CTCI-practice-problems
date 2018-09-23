const numWays = (n) => {
  let count = 0;
  const recurse = (N) => {
    if (N === 0) {
      count++;
    } else if (N < 0) {

    } else {
      recurse(N - 1);
      recurse(N - 2);
      recurse(N - 3);
    }
  };
  recurse(n);

  return count;
};

console.log(numWays(4), 7);
console.log(numWays(13), 'Mystery');

module.exports = numWays;
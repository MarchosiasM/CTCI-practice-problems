/* TEST */


const numWays = (N) => {

  if (N < 2 | !N | (typeof N != 'number')) {
    return -1;
  }
  var count = 0;
  const recurse = (n) => {
    if (n === 0) {
      count += 1;
      return;
    }
    if (n < 0) {
      return;
    }
    recurse(n - 1);
    recurse(n - 2);
    recurse(n - 3);
  };

  recurse(N);

  return count;
};


console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
console.log(numWays(7));
const numWays = (N) => {
  const memo = [];
  return numWaysRecurse(N, memo, N);
};

const numWaysRecurse = (N, memo, max) => {
  if (N < 0) {
    return 0;
  } else if (N === 0) {
    return 1;
  } else if (memo[N] > -1) {
    return memo[N];
  } else {
    // memo[N] = numWaysRecurse(N - 1, memo, max) + numWaysRecurse(N - 2, memo, max) + numWaysRecurse(N - 3, memo, max);
    let sum = 0;
    for (let i = 1; i <= max; i += 1) {
      sum += numWaysRecurse(N - i, memo, max);
    }
    memo[N] = sum;
    console.log(memo);
    return memo[N];
  }
};

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);

console.log(numWays(4));
// console.log(numWays(7), '?');
// console.log(numWays(40), '?');
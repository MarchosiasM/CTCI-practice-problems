const numWays = (n) => {
  let count = 0;
  const recurse = (m) => {
    if (m === 0) {
      count += 1;
      return;
    } else if (m < 0) {
      return;
    }
    recurse(m - 1);
    recurse(m - 2);
    recurse(m - 3);
  };

  recurse(n);
  return count;
};

module.exports = numWays;
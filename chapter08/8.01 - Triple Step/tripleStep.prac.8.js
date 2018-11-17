const numWays = (steps) => {
  let count;
  if (count === undefined) {
    count = 0;
  }
  const recurse = (n, m) => {
    let curr = n - m;
    if (curr === 0) {
      count += 1;
    } else if (curr < 0) {

    } else {
      recurse(curr, 1);
      recurse(curr, 2);
      recurse(curr, 3);
    }
  };


  return count;
};

module.exports = numWays;
/**You're given two 32-bit ints and two positions, i and j, insert into the 
 * first int, the bits of the second int between i and j. 
 * 
 */

const bitIns = (n, m, i, j) => {
  console.log(n);
  // shift m by i bits
  let newIns = m << i;
  // clear out the bits in n where m must go
  let mask = 0;
  for (let iter = i; iter <= j; iter += 1) {
    mask = mask | (1 << iter);
  }
  console.log(mask);
  n = n & ~mask;
  console.log(n);
  // now plant the new insert into n
  return n | newIns;
};

console.log(bitIns(1000, 45, 0, 5), 1005);

console.log(bitIns(1024, 19, 2, 6), 1100);

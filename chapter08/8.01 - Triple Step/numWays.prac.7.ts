const numWays = (steps: number): number => {
  let count: number = 0;
  const recurse = (stepsLeft: number, leap: number): void => {
    let stepsMinusLeap: number = stepsLeft - leap;
    if (stepsMinusLeap === 0) {
      count += 1;
      return;
    }
    if (stepsMinusLeap < 0) {
      return;
    }
    recurse(stepsMinusLeap, 1);
    recurse(stepsMinusLeap, 2);
    recurse(stepsMinusLeap, 3);
  }
  recurse(steps, 0);
  return count;
}

module.exports = numWays;
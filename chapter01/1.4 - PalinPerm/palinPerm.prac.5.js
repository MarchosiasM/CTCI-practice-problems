// TESTS
const palinPerm = (string) => {
  const buffer = {};
  let isPerm = true;
  string.split('').forEach((char) => {
    // Build a set with a count of all non-space characters
    if (char != ' ') {
      currentChar = char.toLowerCase();
      if (!buffer[currentChar]) {
        buffer[currentChar] = 0;
      }
      buffer[currentChar] += 1;
    }
  });
  /**
   * Set check rules:
   *    1. Only one even count allowed
   *    2. If all have even counts, or there's only one even count,
   *      isPerm is true, else false.
   */
  let count = 0;
  Object.keys(buffer).forEach((entry) => {
    if (count < 2) {
      if (buffer[entry] % 2 > 0) {
        count += 1;
      }
      if (count > 1) {
        isPerm = false;
        return;
      }
    }
  });
  return isPerm;
};

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
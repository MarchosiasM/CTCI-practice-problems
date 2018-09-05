/**
 * Takes a string
 * 
 * Returns true if the string has no repeat characters, case insensitive
 * Returns false if it does have repeat characters
 */

const isUnique = (string) => {
  const buffer = new Set();
  let result = true;
  string.split('').forEach((char) => {
    if (char != ' ' && result) {
      if (buffer.has(char)) {
        result = false;
      }
      buffer.add(char);
      // console.log(buffer);
    }
  });
  return result;
};


/* TESTS */
// log some tests here

console.log(isUnique('Hello') + ' should be false');
console.log(isUnique('Stuff') + ' should be false');
console.log(isUnique('abcdef') + ' should be true');
console.log(isUnique('Abadefigj') + ' should be true if case insensitive');
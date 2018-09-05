
// A string goes in, return false if there are duplicate characters.
// Return true if there are no duplicate characters. You can use 
// other data types.
const isUnique = (string) => {
  const length = string.length;
  const set = new Set([]);
  for (let i = 0; i < length; i += 1) {
    if (set.has(string.charAt(i))) {
      return false;
    }
    set.add(string.charAt(i));
    // console.log(set);
  }
  return true;
};



console.log(isUnique('Hello') + ' should be false');
console.log(isUnique('Stuff') + ' should be false');
console.log(isUnique('abcdef') + ' should be true');
console.log(isUnique('Abadefigj') + ' should be true');


const isUnique = (string) => {
  if (string.length === 0 | string.length === 1) {
    return true;
  }
  const buffer = new Set();
  const length = string.length;
  for (let i = 0; i < length; i+=1) {
    if (buffer.has(string.charAt(i))) {
      return false;
    }
    buffer.add(string.charAt(i));
  }
  return true;
};



console.log(isUnique('Hello') + ' should be false');
console.log(isUnique('Stuff') + ' should be false');
console.log(isUnique('abcdef') + ' should be true');
console.log(isUnique('Abadefigj') + ' should be true');
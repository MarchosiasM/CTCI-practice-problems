const isUnique = (string) => {
  const charArray = string.split('');
  const buffer = new Set();
  while (charArray.length > 0) {
    const bucket = charArray.shift();
    if (buffer.has(bucket)) {
      return false;
    }
    buffer.add(bucket);
  }
  return true;
};

module.exports = isUnique;
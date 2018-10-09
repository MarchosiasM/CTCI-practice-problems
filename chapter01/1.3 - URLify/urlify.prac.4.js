const urlify = (string) => {
  const strClone = string.trim().split('').slice(0);
  const newStr = strClone.map((char) => {
    if (char !== ' ') {
      return char;
    }
    return '%20';
  });
  return newStr.join('');
};

module.exports = urlify;
const urlify = inString => {
  const charArray = inString.trim().split('');
  const modArray = charArray.map((char) => {
    if (char === ' ') {
      return '%20';
    } else {
      return char;
    }
  });
  return modArray.join('');
};

module.exports = urlify;
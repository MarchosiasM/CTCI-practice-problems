const urlify = (string) => {
  const strArray = string.trim().split('');
  const urlArray = strArray.map((char) => {
    if (char === ' ') {
      return '%20';
    } else {
      return char;
    }
  });
  return urlArray.join('');
};

module.exports = urlify;
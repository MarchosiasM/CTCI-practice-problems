const urlify = (string) => {
  let stringArr = string.trim().slice().split('');
  let stringArrFilter = stringArr.map((c) => {
    if (c === ' ') {
      return '%20';
    }
    return c;
  });

  return stringArrFilter.join(''); 
};

module.exports = urlify;

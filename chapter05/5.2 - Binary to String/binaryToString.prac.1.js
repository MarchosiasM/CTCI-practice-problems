const binaryToString = (num) => {
  if (num > 1 || num < 0) {
    return 'ERROR';
  }
  let numCopy = num;
  let binary = '0.';
  for (let i = 1; i < 32 && numCopy > 0; i += 1) {
    if (numCopy >= Math.pow(2, -i)) {
      binary += '1';
      numCopy -= Math.pow(2, -i);
    } else {
      binary += '0';
    }
    console.log('num is ', num, ' numCopy is ', numCopy, ' and your binary is ', binary);
  }

  if (binary.length > 32) {
    return 'ERROR';
  }
  return binary;
};

module.exports = binaryToString;
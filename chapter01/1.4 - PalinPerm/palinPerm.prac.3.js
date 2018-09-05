const toBuffer = (string, buffer) => {
  string.split('').forEach((char) => {
    if (char != ' ') {
      lChar = char.toLowerCase();
      if (!buffer[lChar]) {
        buffer[lChar] = 0;
      }
      buffer[lChar] += 1;
    }
  });
};

const checkForPalinPerm = (buffer) => {
  let freebie = 0;
  let isGood = true;
  Object.keys(buffer).forEach((char) => {
    if (buffer[char] % 2 > 0) {
      freebie += 1;
    }
    // console.log(freebie);
    if (freebie > 1) {
      isGood = false;
      return false;
    }
  });
  return isGood;
};

const palinPerm = (s) => {
  const buffer = {};
  let isPalin = false;

  toBuffer(s, buffer);
  console.log(buffer);

  isPalin = checkForPalinPerm(buffer);

  return isPalin;
};




console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
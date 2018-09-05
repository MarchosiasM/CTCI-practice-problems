const palinPerm = (s) => {
  let isPalin = true;
  const buffer = {};
  s.split('').forEach((char) => {
    if (char != ' ') {
      let currentChar = char.toLowerCase();
      if (!buffer[currentChar]) {
        buffer[currentChar] = 0;
      }
      buffer[currentChar] += 1;
    }
  });

  // We can have one freebie
  let freebie = 0;
  Object.keys(buffer).forEach((char) => {
    if (buffer[char] % 2 > 0) {
      freebie += 1;
    }
    if (freebie > 1) {
      isPalin = false;
    }
  });

  return isPalin;
};



console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
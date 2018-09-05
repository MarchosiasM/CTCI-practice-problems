const palinPerm = (string) => {
  const buffer = {};
  string.split('').forEach((char) => {
    if (char != ' ') {
      currChar = char.toLowerCase();
      if (!buffer[currChar]) {
        buffer[currChar] = 0;
      }
      buffer[currChar] += 1;
    }
  })
  let freebie = 0;
  let isPerm = true;
  console.log(buffer);
  Object.keys(buffer).forEach((char) => {
    if (buffer[char] % 2 > 0) {
      console.log("Detected a freebie");
      freebie += 1;
    }
    console.log("Freebie count is ", freebie);
    if (freebie > 1) {
      console.log("Why am I not returning false");
      isPerm = false;
      return;
    }
  })
  return isPerm;
}


console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
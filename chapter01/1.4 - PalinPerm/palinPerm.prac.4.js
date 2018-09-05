const palinPerm = (s) => {
  const set = {};
  const length = s.length;
  for (let i = 0; i < length; i += 1) {
    currChar = s.charAt(i).toLowerCase();
    if (currChar != ' ') {
      console.log('What\'s currChar ', currChar);
      if (set[currChar]) {
        delete set[currChar];
      } else {
        set[currChar] = true;
      }
    }

  }

  console.log(Object.keys(set));
  return Object.keys(set).length < 2;

};










console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
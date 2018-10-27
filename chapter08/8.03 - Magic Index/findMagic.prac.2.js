const findMagic = (array, first, last) => {
  if (first == null) {
    first = 0;
    last = array.length;
  }
  const relMid = Math.floor(first + ((last - first) / 2.0));
  // convert mid to i
  mid = relMid;
  console.log('Mid was ', mid, ' calculated from first ', first, ' and last ', last)
  if (mid === array[mid]) {
    console.log('Found mid, ', mid);
    return mid;
  }
  if (first === last) {
    return null;
  }
  if (mid < array[mid]) {
    console.log('case i < n, searching left side');
    console.log('i = ', mid, ' n = ', array[mid]);
    return findMagic(array, first, relMid - 1);
  }
  if (mid > array[mid]) {
    console.log('case i > n, searching right side');
    console.log('i = ', mid, ' n = ', array[mid]);
    return findMagic(array, relMid + 1, last);
  }

};

module.exports = findMagic;
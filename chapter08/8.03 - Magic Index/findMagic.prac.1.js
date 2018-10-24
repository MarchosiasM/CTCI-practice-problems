const findMagic = (array, start = 0, end = (array.length - 1)) => {

  const mid = Math.ceil(start + (end - start) / 2);


  if (array.length = 1 && array[start] != start) {
    return null;
  }
  if (mid === array[mid]) {
    return mid;
  } else if (array[mid] < mid) {
    findMagic(array, mid, end);
  } else {
    findMagic(array, start, mid);
  }
};

module.exports = findMagic;
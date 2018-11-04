const findMagic = (array, start = 0, end = (array.length - 1)) => {
  // This renders a normalized value 
  const middle = Math.floor((start + (end - start) / 2));
  // If we're down to an array of 1 element
  if (start === end && array[start] != start) {
    return null;
  }

  // base case
  console.log('Comparison, i = ', middle, ' and n = ', array[middle]);
  if (array[middle] === middle) {
    console.log('Found solution ', middle);
    return middle;
  } else if (array[middle] < middle) {
    return findMagic(array, middle + 1, end);
  } else if (array[middle] > middle) {
    return findMagic(array, start, middle - 1);
  }

};

module.exports = findMagic;
const arraySum = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
};

const tripleStepRec = (array, n, buffer) => {
  if (arraySum(array) === n) {
    console.log('Returning, ', array);
    buffer.push(array);
    return array;

  }
  if (arraySum(array) > n) {
    return;
  }
  tripleStepRec(array.concat(1), n, buffer);
  tripleStepRec(array.concat(2), n, buffer);
  tripleStepRec(array.concat(3), n, buffer);
};

const tripleStep = (n) => {
  if (n < 1) {
    return 1;
  }
  const bufferArray = [];
  tripleStepRec([], n, bufferArray);
  console.log(bufferArray);
  return bufferArray.length;
};

/** Tests
 * 
 */
console.log(tripleStep(3));
console.log(tripleStep(7));
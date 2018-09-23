const sortedMerge = (n, m) => {
  if (!(n instanceof Array) || !(m instanceof Array)) {
    throw 'Please enter an array';
    return null;
  }
  const nCopy = n.slice(0, n.length);
  const mCopy = m.slice(0, m.length);
  const buffer = [];
  const length = n.length + m.length;
  for (let i = 0; i < length; i += 1) {
    if (nCopy[0] < mCopy[0] && nCopy.length !== 0 || mCopy.length === 0) {
      buffer.push(nCopy.shift());
    } else {
      buffer.push(mCopy.shift());
    }
  }
  return buffer;
};


module.exports = sortedMerge;
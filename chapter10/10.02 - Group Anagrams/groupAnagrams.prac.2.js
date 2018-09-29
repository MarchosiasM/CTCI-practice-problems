const groupAnagrams = (strArray) => {
  if (strArray === undefined || strArray === null || !strArray instanceof Array) {
    return 'Where is your anagram?';
  }
  const clonedArray = strArray.slice(0);
  const toSortBundle = clonedArray.map((string) => {
    return {
      original: string,
      sorted: string.split('').sort(),
    };
  });
  const sortedBundle = toSortBundle.sort((a, b) => {
    if (a.sorted < b.sorted) {
      return 1;
    }
    if (a.sorted > b.sorted) {
      return -1;
    }
  });
  return sortedBundle.map((obj) => {
    return obj.original;
  });
};

module.exports = groupAnagrams;

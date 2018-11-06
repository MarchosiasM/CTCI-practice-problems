const groupAnagrams = (array) => {
    if (!(array instanceof Array)) {
        return 'Where is your anagram?';
    }
    // Let's generate a new array
    const arrayCopy = array.slice();
    // Map this array into an array of objects containing both our strings 
    // and our strings sorted
    const arraySortedObj = arrayCopy.map((string) => {
        return {
            original: string,
            sorted: string.split('').sort().join(''),
        };
    });
    // Now sort the objects according to the sorted string.
    arraySortedObj.sort((a, b) => {
        if (a.sorted < b.sorted) {
            return 1;
        }
        return -1;
    });
    return arraySortedObj.map((obj) => {
        return obj.original;
    });
};

module.exports = groupAnagrams;
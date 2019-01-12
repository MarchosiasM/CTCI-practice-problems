const groupAnagrams = (array) => {
    if (array == null) {
        return 'Where is your anagram?';
    }
    const arrayOfSortedObjs = array.map((string) => {
        return {
            originalString: string,
            sortedString: string.split('').sort().join('')
        };
    });
    const sortedArrayOfSObjs = arrayOfSortedObjs.sort((a, b) => {
        if (a.sortedString > b.sortedString) {
            return -1;
        }
        return 1;
    });
    return sortedArrayOfSObjs.map((obj) => {
        return obj.originalString;
    });
};

module.exports = groupAnagrams;
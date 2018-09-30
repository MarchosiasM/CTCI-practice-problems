const urlify = (inputStr) => {
    const copyStr = inputStr.trim().slice(0);
    const charArray = copyStr.split('');
    const convertedWhSp = charArray.map((char) => {
        if (char === ' ') {
            return '%20';
        }
        return char;
    });
    return convertedWhSp.join('');
};

module.exports = urlify;
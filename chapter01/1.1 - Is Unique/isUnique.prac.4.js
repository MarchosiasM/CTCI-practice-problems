

const isUnique = (string) => {
    const stringArray = string.split('');
    const charSet = {};
    console.log(stringArray)
    for (let i = 0; i < stringArray.length; i += 1) {
        console.log('char is ', stringArray[i])
        if (charSet[stringArray[i]] == true) {
            return false;
        }
        charSet[stringArray[i]] = true;
    } 
    console.log(charSet)
    return true;
}

module.exports = isUnique;
const LinkedList = require('../util/LinkedList');

const returnKthToLast = (k, head) => {
    let returnObj = {};
    if (head === null) {
        returnObj = {
            payload: null,
            iteration: 0
        };
    } else {
        returnObj = returnKthToLast(k, head.next);
        returnObj['iteration'] += 1;
        console.log('Received an obj, k is ', k)
        console.log('Received an obj, iteration is is ', returnObj['iteration'])
        if (returnObj['iteration'] === k) {
            console.log('Acknowledging k and iteration are equal')
            returnObj['payload'] = head['value'];
        } 
    }
    

    return returnObj;
}

module.exports = returnKthToLast;

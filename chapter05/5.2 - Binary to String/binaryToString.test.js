const binaryToString = require('./binaryToString.prac.1');

// var binaryToString = function (number) {
//   var n = 1;
//   var str = '0.';
//   while (n <= 32 && number > 0) {
//     if (number >= Math.pow(2, -n)) {
//       number -= Math.pow(2, -n);
//       str += '1';
//     } else {
//       str += '0';
//     }
//     n++;
//   }
//   if (n === 33 && number > 0) {
//     return 'ERROR';
//   } else {
//     return str;
//   }
// };

/* TEST */
// console.log(binaryToString(0.625), '0.101');
// console.log(binaryToString(0.6255342856783467856932), 'ERROR');

describe('Chapter 5, problem 2', () => {
  it('returns 0.101 as a string if you input 0.625 as a number', () => {
    expect(binaryToString(0.625)).toEqual('0.101');
  });
  it('returns an error as a string if you input an integer much too big', () => {
    expect(binaryToString(0.6255342856783467856932)).toEqual('ERROR');
  });
});
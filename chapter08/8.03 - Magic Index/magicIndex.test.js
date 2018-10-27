const findMagic = require('./findMagic.prac.2');

// var findMagic = function (array, start, end) {
//   if (start === undefined) {
//     start = 0;
//   }
//   if (end === undefined) {
//     end = array.length - 1;
//   }

//   var mid = Math.floor(start + (end - start) / 2);

//   if (mid === start && array[mid] !== mid) {
//     return -1;
//   } else if (array[mid] === mid) {
//     return mid;
//   } else if (mid < array[mid]) {
//     return findMagic(array, start, mid);
//   } else {
//     return findMagic(array, mid, end);
//   }
// };



describe('Chapter 8, problem 3, findMagic', () => {
  it('In an array of distinct integers, finds a[n] = n', () => {
    expect(findMagic([-1, 0, 2, 9, 100])).toEqual(2);
    expect(findMagic([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700])).toEqual(5);
    expect(findMagic([0, 3, 4, 5, 6, 7, 8])).toEqual(0);
    expect(findMagic([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10])).toEqual(10);
    // console.log(findMagic([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct

  });
  it('returns a null if there is no magic index', () => {
    expect(findMagic([-3, -2, -1, 0, 1, 2, 3]));
  });
});

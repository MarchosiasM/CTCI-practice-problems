const numWays = require('./numWays.prac.7');

/* TEST */


describe('Chapter 8, Problem 1', () => {
  it('returns 1 when you enter 1 as an argument', () => {
    expect(numWays(1)).toEqual(1);
  });
  it('returns 2 when you enter 2', () => {
    expect(numWays(2)).toEqual(2);
  });

  it('returns 4 when you enter numways(3)', () => {
    expect(numWays(3)).toEqual(4);
  });

  it('returns 7 when you put in 4 as an argument', () => {
    expect(numWays(4)).toEqual(7);
  });
});

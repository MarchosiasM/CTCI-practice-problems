const isUnique = require('./isUnique.prac.4');

describe('Chapter 1, Problem 1', () => {
  it('returns false when "hello" is an input', () => {
    expect(isUnique('Hello')).toBeFalsy();
  });
  it('returns false when "Stuff" is an input', () => {
    expect(isUnique('Stuff')).toBeFalsy();
  });
  it('(recognizes a lack of duplicates) returns true when you input "abcdef"', () => {
    expect(isUnique('abcdef')).toBeTruthy();
  });
  it('(is case sensitive) returns true when you input "Ababdefigj"', () => {
    expect(isUnique('Abadefigj')).toBeTruthy();
  });
});

const urlify = require('./urlify.prac.3');

// Tests
describe('Chapter 1, Problem 3, urlify', () => {
    it('takes a string with white space in it and converts the white space to %20', () => {

        expect(urlify('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
        expect(urlify('Michael Hunt')).toEqual('Michael%20Hunt');
    });
    it('takes an empty string and returns an empty string', () => {
        expect(urlify('')).toEqual('');

    });
    it('takes a string of white space and returns an empty string', () => {
        expect(urlify('          ')).toEqual('');
    });
});
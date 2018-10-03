const groupAnagrams = require('./groupAnagrams.prac.3');

let anagrams;
let anagramsSorted;
// groupAnagrams can be called
console.log(groupAnagrams() === 'where is your anagram?');

describe('Chapter 10, problem 2: Group Anagrams', () => {
  anagramsSorted = ['ninethumps', 'punishments', 'dormitory', 'dirtyroom', 'astronomer', 'moonstarrer', 'motherinlaw', 'hitlerwoman', 'thequeershakes', 'schoolmaster', 'theclassroom', 'badcredit', 'theearthquakes', 'debit card'];
  anagrams = [
    'motherinlaw',
    'debit card',
    'dormitory',
    'theearthquakes',
    'astronomer',
    'punishments',
    'schoolmaster',
    'hitlerwoman',
    'badcredit',
    'dirtyroom',
    'thequeershakes',
    'moonstarrer',
    'ninethumps',
    'theclassroom'
  ];
  it('Returns a string "Where is your anagram?" when given non-array data', () => {
    expect(groupAnagrams()).toEqual('Where is your anagram?');
    expect(groupAnagrams(null)).toEqual('Where is your anagram?');
  });
  it('sorts an array of strings by anagram', () => {
    expect(groupAnagrams(anagrams)).toEqual(anagramsSorted);
  });
});



// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

function isAnagrams(word1, word2) {
  const str1 = word1.toLowerCase().split(" ").join("");
  const str2 = word2.toLowerCase().split(" ").join("");
  if (str1.length != str2.length) return false;

  const total = {};
  for (const letter of str1) {
    if (total[letter] != null) {
      total[letter]++;
    } else {
      total[letter] = 1;
    }
  }
  //   total[letter] = total[letter] ? total[letter] + 1 || 1
  for (const letter of str2) {
    if (total[letter] != null) {
      total[letter]--;
    } else {
      total[letter] = -1;
    }
  }
  //   total[letter] = total[letter] ? total[letter] - 1 : -1
  const diffrence = Object.values(total);
  return diffrence.every((num) => num === 0);
}

console.log(isAnagrams("Astronomer", "Moon starer"));
console.log(isAnagrams("Astronomer", "Mosfon sgfstarer"));

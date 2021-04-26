// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
/*
You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
When encoding, your output should still be a string.
When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
Spaces should be maintained throughout.
Capital letters can be ignored.
The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
*/

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const table = {11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v',
    25: 'w', 35: 'x', 45: 'y', 55: 'z'
  };




function polybius(input, encode = true) {
  // your solution code here    
  input = input.toLowerCase();
  let final = '';
  if (typeof input !== "string") return false;  
  if (encode) {
    // loop through the input and check if the letter is a space or i or j
    for (values in input) {
      const letter = input[values];
      // if the letter is a space, then add the space
      if (letter === ' ') {
        final += letter
        continue
      }
      // if the letter is i or j, you need to add 42 to final
      if (letter === 'i' || letter === 'j') {
        final += 42
        continue
      }
      //loop through each value in the table
      for (value in table) {
      // if the letter is equal to the key: 'value', then add the key value to the final.
        if (letter === table[value]) {
          final += value
        }
      }
    }
  } else {
      // iterate through each number in the input
      for (numbers in input) {
        // make pairs
      let pairs = input.split(' ');
      // for each element in the pairs, check if it's even, if it isn't return false.
      for (element in pairs) {
        if (pairs[element].length % 2 != 0) {
          return false;
        }
      }
      // make a full pair and compare
      const pair = `${input[0]}${input[1]}`;
      if (input[0] === ' ') {
        final += input[0];
        input = input.slice(1);
        continue;
      }
      for (num in table) {
        if (pair === num) {
          final += table[num]
        }
      }
      input = input.slice(2);
    }
}
  return final;
}



  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };

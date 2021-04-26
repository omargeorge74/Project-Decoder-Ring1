// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // assign variables
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
  function caesar (input, shift, encode = true) {
    //returns false if these conditions are false
    if (!shift || shift === 0 || shift > 25 || shift < -25) 
    return false;
    //make input to lower case
    input = input.toLowerCase();

    let final = []
    //loop though input and find the position of each input character in the alphabet array
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      let position = alphabet.indexOf(letter);
         //if not a letter then push to final   
      if (position < 0) {
        final.push(letter);
      }
      else {//to encode
        if(encode) {
          let newPosition = (position + shift)
          //newPosition is the new index of alphabet array
          if(newPosition > 25){ newPosition = newPosition - 26};
          if(newPosition < 0){ newPosition = newPosition + 26};
          //push the new char to the final array
          final.push(alphabet[newPosition]);
        }
        else {//to decode
          let newPosition = (position - shift);
          //newPosition is the new index of alphabet array
          if(newPosition > 25){ newPosition = newPosition - 26};
          if(newPosition < 0){ newPosition = newPosition + 26};
          //push the new char to the final array
          final.push(alphabet[newPosition]);
        }
      }
    }
  
  return final.join("")
  }
    
  
  return {
    caesar,
  };
})();
    
module.exports = { caesar: caesarModule.caesar };
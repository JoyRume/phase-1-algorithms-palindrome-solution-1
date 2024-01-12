

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string
*/

/*
  Add written explanation of your solution here
  This function takes a string word as an argument, splits it 
  into an array of characters, reverses the order of the characters in the array,
   and then joins the characters back into a string. 
   Finally, it checks if the reversed string is equal to the
    original string using the === operator. 
    If the reversed string is equal to the original string,
     the function returns true, indicating that the string is 
     a palindrome. If not, it returns false, indicating that the 
     string is not a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


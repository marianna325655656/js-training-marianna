// Task 1: Check for a Forbidden Word (Using includes)
// Write a function containsForbiddenWord(text, forbiddenWord)
// that checks if a given string contains a specific forbidden word.
// The function should return true if the word is found, otherwise false.
// Requirements:
// The function should be case-insensitive.
// Use includes() to check for the word presence.
// Write your code here


function containsForbiddenWord(text, forbiddenWord){
   const lowerText = text.toLowerCase();
   const lowerforbiddenWord = forbiddenWord.toLowerCase();

   return lowerText.includes(lowerforbiddenWord);
}
 

console.log(containsForbiddenWord("This is a test sentence.", "test")); 
console.log(containsForbiddenWord("This is a test sentence.", "TEST")); 
console.log(containsForbiddenWord("This is a test sentence.", "hello"));
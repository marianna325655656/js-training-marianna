// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!

function countSpecificCharacterInString(mainString, char){
    if(char.length != 1){
        return "Please provide a single character"
    }
    const lowerCaseString = mainString.toLowerCase();
    const lowerCaseChar = char.toLowerCase();
    let count = 0;

    for (let char of lowerCaseString) {
        if (char === lowerCaseChar) {
            count++;
        }
    }
    return count;
}

console.log(countSpecificCharacterInString("Hello World", "l")); 
console.log(countSpecificCharacterInString("JavaScript", "a")); 
console.log(countSpecificCharacterInString("Example", "a"));
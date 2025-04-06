//Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

function alternateCase(str) {
    if (str.length < 10 || str.length > 20) {
        return "String length must be between 10 and 20 characters.";
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}
console.log(alternateCase("JavaScript")); // Outputs: ExAmPlEsTrInG
console.log(alternateCase("mouse"));          //
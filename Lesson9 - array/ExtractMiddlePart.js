// Task 3: Extract the Middle Part of a String (Using substring)
// Write a function extractMiddle(text) that returns the middle portion of a string.
// If the string length is even, return the middle two characters.
// If the string length is odd, return only the middle character.
// Requirements:
// Use substring() to extract the middle part of the string.
// The function should handle both even and odd lengths.
// Write your code

function extractMiddle(text){
    if(typeof text != "string"){
        return " invalid input: Type a string."
    }
    
    const length = text.length;
    const midIndex = Math.floor(length / 2);

    if(text.length % 2 === 0){
        return text.substring(midIndex - 1, midIndex + 1);
    } 

    else {
        return text.charAt(midIndex);
    }
}

console.log(extractMiddle("patient"));
console.log(extractMiddle("cool")); 
console.log(extractMiddle("idiot"));  
console.log(extractMiddle("clever")); 
console.log(extractMiddle(12345));
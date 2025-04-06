// Task 2: Get Last N Characters of a String (Using slice)
// Write a function getLastNCharacters(text, n)
// that extracts the last n characters of a string using slice().
// Requirements:
// If n is greater than the string length, return the full string.
// Use slice() to extract the portion.
// Write your code

function getLastNCharacters(text, n){
    if(typeof text != "string"){
         return "Entar a valid string";
    }

    if(n > text.length){
        return text;
    }

    return text.slice(-n);
    
}
console.log(getLastNCharacters("hamzachiman", 5));
console.log(getLastNCharacters(45678, 2)); 
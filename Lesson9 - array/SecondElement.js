// Task 2: Get the Second Element in an Array
// Write a function getSecondElement(arr) that returns the second element of the array.
// Requirements:
// The second element is at index 1.
// If the array has fewer than two elements,
// throw an error with the message "Array should have a minimum of 2 elements.".
// Write you code here

function getSecondElement(arr){
    if(arr.length < 2){
        return "Array should have a minimum of 2 elements.";
    }
    return arr[1];
}
try {
    console.log(getSecondElement(['apple', 'banana', 'cherry']));
    console.log(getSecondElement([1]));
} catch (error) {
    console.error(error.message); 
}
// Task 1: Get the First and Last Elements of an Array
// Write a function getFirstAndLast(arr) that returns
// the first and last elements of the given array as separate values.
// Requirements:
// The function should return two values: the first and last elements.
// If the array has only one element, return that element as both the first and last element.
// Assume the array will always have at least one element.
// Write you code here

function getFirstAndLast(arr) {
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];
    
    
    if (arr.length === 1) {
        return [firstElement, firstElement];
    }

    return [firstElement, lastElement];
}


console.log(getFirstAndLast([1, 2, 3])); 
console.log(getFirstAndLast(['a']));            
console.log(getFirstAndLast(['orange', 'apple', 'banana']));

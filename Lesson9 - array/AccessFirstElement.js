// Task 3: Access the First Element That is Greater Than 10
// Write a function getFirstGreaterThanTen(arr)
// that returns the first element from the 
// array that is greater than 10.
// Requirements:
// Use indexing to access each element.
// If no elements are greater than 10, return undefined.
// Stop once the first element greater than 10 is found.
// Write you code here

function getFirstGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            return arr[i]; 
    }
    }
    return undefined; 
}


console.log(getFirstGreaterThanTen([5, 8, 12, 3, 15]));
console.log(getFirstGreaterThanTen([1, 2, 3])); 
console.log(getFirstGreaterThanTen([10, 11, 9])); 

// ✅ Task 3: Convert Array to Object
// Description:
// Create a function arrayToObject that takes an array and returns an object.
// The object should have the array indexes as keys and the elements as values.
// Requirements:
// - Use a loop to build the object manually (no Object.fromEntries).
// - Return the constructed object.

function arrayToObject(arr) {
    let result = {};
    for (let i = 0; i< arr.length; i++){
        result[i] = arr[i];

    }
       return result;
  }

  let fruits = ['aplle', 'banana', 'orange'];
  console.log(arrayToObject(fruits));
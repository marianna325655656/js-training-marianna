// ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
    return {
        name: 'Alice',
        age: 30,
        isAdmin: true,
    } 

  }
 console.log(createUser());

// Issue:
// In the current implementation, the createUser function always returns the same object with hardcoded values (name: 'Alice', age: 30, isAdmin: true), regardless of the arguments passed to it.

// This doesn't satisfy the requirement to use the arguments name, age, and isAdmin as input to dynamically build the object.

// Fix:
// You should modify the function to use the provided arguments (name, age, and isAdmin) to construct the object, like this:

// function createUser(name, age, isAdmin) {
//     return {
//         name: name,
//         age: age,
//         isAdmin: isAdmin,
//     };
// }

// console.log(createUser('John', 25, false)); // Outputs: { name: 'John', age: 25, isAdmin: false }

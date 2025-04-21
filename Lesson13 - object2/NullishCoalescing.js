

// Task 6: Using Nullish Coalescing (??) with Objects
/*
Create a function `getUserInfo()` that returns the user's name or a default message if the name is undefined or null.

Requirements:
1. Create an object `user` with a `name` property, which could be undefined or null.
2. Use nullish coalescing (`??`) to return the `name` property if it exists, or `"Anonymous"` if the `name` is undefined or null.
3. Call `getUserInfo()` with a `user` object where the `name` is `null` and another where the `name` is a string.
4. Print the results to demonstrate how nullish coalescing works.
*/
// Your code here

let userWithNullName = {
    name: null 
};

let userWithName = {
    name: "Alice" 
};

function getUserInfo(user) {
    return user.name ?? "Anonymous";
}


let result1 = getUserInfo(userWithNullName);
let result2 = getUserInfo(userWithName);

console.log(result1); 
console.log(result2);
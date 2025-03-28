// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here
n
let callback = (n) => n*n;

let calculateNumber = function(n, callback){ // Rename calculateNumber to calculateSquare to better reflect the task's requirement.
    return callback(n);
}
console.log(calculateNumber(5, callback));

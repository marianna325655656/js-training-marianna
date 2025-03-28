// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

const correctUsername = 'Adam';
const correctPassword = 'testets123';

let userCredentials = (username, password, callback) => {
  if(username === correctUsername & password === correctPassword ){ // In the condition if (username === correctUsername & password === correctPassword), you're using a bitwise AND (&) operator instead of the logical AND (&&) operator.
    callback("Login successful!");
  }else{
    callback("Incorrect username or password.");
  }
   
} 

let callback = (message) => {
    console.log(message);
}

userCredentials("Adam", "testets123", callback); 
userCredentials("Adam", "testets12667773", callback);

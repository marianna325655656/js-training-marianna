// // Requirement: Convert the given regular functions into arrow functions.

// function multiply(a, b) {
//     return a * b;
//   }

   const multiply = (a, b) => a * b;
   console.log(multiply(5, 6));

//   function cube(n) {
//     return n * n * n;
//   }

  const cube = (n) => n * n * n;
  console.log(cube(2));

  // function sayHello(name) {
  //   return "Hello, " + name + "!";
  // }

  let sayHello = (name) => `Hello, ${name}!`;
  console.log(sayHello('Ann'));

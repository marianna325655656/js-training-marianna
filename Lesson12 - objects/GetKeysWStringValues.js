//✅ Task 4: Get Keys with String Values Only
// Description:
// Create a function getStringKeys that takes an object and returns an array of keys
// whose values are strings.
// Requirements:
// - Use a loop or Object.keys() to iterate through the object.
// - Return only the keys where the value is of type 'string'.

function getStringKeys(obj) {
  let stringKeys = []; 


  for (let key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') { 
          stringKeys.push(key);
      }
  }

  return stringKeys; 
}


let exampleObj = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland',
  isAdmin: false,
};

console.log(getStringKeys(exampleObj));
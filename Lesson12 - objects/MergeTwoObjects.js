// ✅ Task 5: Merge Two Objects
// Description:
// Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
// If the same key exists in both, the value from the second object should overwrite the first.
// Requirements:
// - Do not modify the original objects.

function mergeObjects(obj1, obj2) {
   
    let merged = {};
    for (let key in obj1) {
        merged[key] = obj1[key];
    }

    for (let key in obj2) {
        merged[key] = obj2[key];
    }

    return merged; 
}


let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };

let mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); 
console.log(object1); 
console.log(object2); 
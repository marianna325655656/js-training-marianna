/*Create an object Task with a constructor that takes title and description as parameters.
Use Symbol() to create unique keys for the properties taskID and status (e.g., "Completed", "In Progress").
Add a method updateStatus(newStatus) to the object that updates the status.
Create a new Task object, set the status, and print the taskID and status.
Print out the task's properties to show the uniqueness of Symbol.
*/
// Your code here



function Task(title, description) {
    this.title = title;                    
    this.description = description;         
    
   
    this[Symbol('taskID')] = Math.random().toString(36).substr(2, 9); 
    this[Symbol('status')] = "In Progress"; 

    
    this.updateStatus = function(newStatus) {
        this[Symbol.for('status')] = newStatus; 
    };
}


let task = new Task("Complete Assignment", "Finish the math homework.");


task.updateStatus("Completed");


const taskIDKey = Object.getOwnPropertySymbols(task).find(sym => sym.description === 'taskID');
const statusKey = Object.getOwnPropertySymbols(task).find(sym => sym.description === 'status');

console.log(`Task ID: ${task[taskIDKey]}`);
console.log(`Status: ${task[statusKey]}`);


console.log("Task properties:", task);
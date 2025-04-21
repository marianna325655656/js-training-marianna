// Task 4: Optional Chaining with Deeply Nested Objects
/*
Create an object representing a company and use optional chaining to safely access deeply nested properties.

Requirements:
1. Create a `company` object with the following structure:
   {
     name: "TechCorp",
     department: {
       hr: {
         manager: {
           name: "Alice",
           office: {
             floor: 5,
             number: 101
           }
         }
       },
       engineering: {
         manager: {
           name: "Bob",
           office: {
             floor: 8,
             number: 202
           }
         }
       }
     }
   }
2. Using optional chaining, access `company.department.hr.manager.office.floor` and print it to the console.
3. Also, access `company.department.sales.manager.name` (which does not exist) using optional chaining and print the result.
4. Print a message if `hr.manager` or `sales.manager` is undefined using optional chaining.
*/
// Your code here

let company = {
    name: "TechCorp",
    department: {
      hr: {
        manager: {
          name: "Alice",
          office: {
            floor: 5,
            number: 101
          }
        }
      },
      engineering: {
        manager: {
          name: "Bob",
          office: {
            floor: 8,
            number: 202
          }
        }
      }
    }
  }

  let hrOfficeFloor = company.department.hr?.manager?.office?.floor;
  console.log(hrOfficeFloor);

  let salesMangerName =  company.department.sales?.manager?.name;
  console.log(salesMangerName);

  if(!company?.department?.hr?.manager){
    console.log("Hr manager is undefined")
  };

  if(!company?.department?.engineering?.manager){
    console.log("Engineering manager is undefined")
  }


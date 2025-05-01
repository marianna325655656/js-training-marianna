class Employee {
    constructor(name, surname, email, phoneNumber, position, salary, isRemote) {
      this.name = name; // Calls the setter for validation
      this.surname = surname; // Calls the setter for validation
      this.email = email; // Calls the setter for validation
      this.phoneNumber = phoneNumber; // Calls the setter for validation
      this.position = position; // Calls the setter for validation
      this.salary = salary; // Calls the setter for validation
      this.isRemote = isRemote; // Calls the setter for validation
    }
  
    // Name setter
    set name(value) {
      if (typeof value !== 'string' || value.length < 2 || value.length > 15) {
        throw new Error("Name must be a string between 2 and 15 characters.");
      }
      this._name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  
    // Surname setter
    set surname(value) {
      if (typeof value !== 'string' || value.length < 2 || value.length > 15) {
        throw new Error("Surname must be a string between 2 and 15 characters.");
      }
      this._surname = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  
    // Email setter
    set email(value) {
      if (typeof value !== 'string') {
        throw new Error("Email must be a string.");
      }
      const trimmedEmail = value.trim().toLowerCase();
      if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
        throw new Error("Email format is invalid.");
      }
      this._email = trimmedEmail;
    }
  
    // Phone number setter
    set phoneNumber(value) {
      if (typeof value !== 'string' || !/^(091|093|094|095|096|097|098|099)\d{6}$/.test(value)) {
        throw new Error("Phone number must be a string of exactly 9 digits starting with a valid prefix.");
      }
      this._phoneNumber = value;
    }
  
    // Position setter
    set position(value) {
      if (typeof value !== 'string' || value.length < 2 || value.length > 50) {
        throw new Error("Position must be a string between 2 and 50 characters.");
      }
      this._position = value;
    }
  
    // Salary setter
    set salary(value) {
      if (typeof value !== 'number' || value < 68000) {
        throw new Error("Salary must be a number greater than or equal to 68,000 AMD.");
      }
      this._salary = value;
    }
  
    // isRemote setter
    set isRemote(value) {
      if (typeof value !== 'boolean') {
        throw new Error("isRemote must be a boolean.");
      }
      this._isRemote = value;
    }
  
   
    get info() {
      return `Employee information: ${this._name} ${this._surname} is a ${this._position}. ` +
             (this._isRemote ? "He works remotely." : "He works on-site.") +
             ` His salary is ${this._salary} AMD. Phone number: ${this._phoneNumber}.` +
             ` Email: ${this._email}`;
    }
  
    
    giveRaise(amount) {
      if (typeof amount !== 'number') {
        throw new Error("Amount must be a number.");
      }
      this.salary += amount;
    }
  
    
    raiseSalary(percent) {
      if (typeof percent !== 'number' || percent <= 0) {
        throw new Error("Percent must be a number greater than 0.");
      }
      this.salary += this.salary * (percent / 100);
    }
  
    changePosition(newPosition) {
      if (typeof newPosition !== 'string' || newPosition.length < 2 || newPosition.length > 50) {
        throw new Error("New position must be a string between 2 and 50 characters.");
      }
      this.position = newPosition; 
    }
  }
  

  const emp = new Employee(
    "bob",
    "henderson",
    "  Bob.Henderson@email.com ",
    "098666666",
    "QA Automation Engineer",
    780000,
    true
  );
  
  console.log(emp.info);
  
  emp.raiseSalary(10);
  emp.giveRaise(30000);
  emp.changePosition("Senior QA Automation Engineer");
  console.log(emp.info);
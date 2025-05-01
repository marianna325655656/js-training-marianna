// Super Class: Car
class Car {
    #make;
    #model;
    #year;
  
    constructor(make, model, year = 2025) {
      this.make = make;
      this.model = model;
      this.year = year >= 1886 ? year : 2025;
    }
  
    // Setters and Getters
    set make(value) {
      if (typeof value === 'string' && value.trim() !== '') {
        this.#make = value.charAt(0).toUpperCase() + value.slice(1);
      } else {
        console.error('Make must be a non-empty string.');
      }
    }
  
    get make() {
      return this.#make;
    }
  
    set model(value) {
      if (typeof value === 'string' && value.trim() !== '') {
        this.#model = value.charAt(0).toUpperCase() + value.slice(1);
      } else {
        console.error('Model must be a non-empty string.');
      }
    }
  
    get model() {
      return this.#model;
    }
  
    set year(value) {
      if (typeof value === 'number' && value >= 1886) {
        this.#year = value;
      } else {
        console.error('Year must be >= 1886.');
      }
    }
  
    get year() {
      return this.#year;
    }
  
    // Private Method
    #checkServiceStatus() {
      console.log("Service status: OK");
    }
  
    // Static Method
    static vehicleType() {
      return "Car";
    }
  
    // Display Details
    displayDetails() {
      return `This is a car model ${this.model} of the year ${this.year}.`;
    }
  }
  
  // Child Class: ElectricCar
  class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity = 50, electricRange = 350, chargingTime = 8) {
      super(make, model, year);
      this.batteryCapacity = batteryCapacity;
      this.electricRange = electricRange;
      this.chargingTime = chargingTime;
    }
  
    set batteryCapacity(value) {
      this._batteryCapacity = value;
    }
  
    get batteryCapacity() {
      return this._batteryCapacity;
    }
  
    set electricRange(value) {
      this._electricRange = value;
    }
  
    get electricRange() {
      return this._electricRange;
    }
  
    set chargingTime(value) {
      this._chargingTime = value;
    }
  
    get chargingTime() {
      return this._chargingTime;
    }
  
    chargeBattery() {
      console.log("Charging the battery...");
    }
  
    // Override displayDetails
    displayDetails() {
      return `This is an Electric Car model ${this.model} of the year ${this.year}, with a ${this.batteryCapacity} kWh battery, ${this.electricRange} km range, and charging time of ${this.chargingTime} hours.`;
    }
  
    static isEcoFriendly() {
      return true;
    }
  }
  
  // Child Class: GasCar
  class GasCar extends Car {
    constructor(make, model, year, fuelCapacity = 50, fuelEfficiency = 15, emissions = 120) {
      super(make, model, year);
      this.fuelCapacity = fuelCapacity;
      this.fuelEfficiency = fuelEfficiency;
      this.emissions = emissions;
    }
  
    set fuelCapacity(value) {
      this._fuelCapacity = value;
    }
  
    get fuelCapacity() {
      return this._fuelCapacity;
    }
  
    set fuelEfficiency(value) {
      this._fuelEfficiency = value;
    }
  
    get fuelEfficiency() {
      return this._fuelEfficiency;
    }
  
    set emissions(value) {
      this._emissions = value;
    }
  
    get emissions() {
      return this._emissions;
    }
  
    refuel() {
      console.log("Refueling the car...");
    }
  
    // Override displayDetails
    displayDetails() {
      return `This is a Gas Car model ${this.model} of the year ${this.year}, with a ${this.fuelCapacity}L fuel tank, ${this.fuelEfficiency} km/L efficiency, and ${this.emissions} g/km CO2 emissions.`;
    }
  
    static isEcoFriendly() {
      return false;
    }
  }
  
  // Example usage
  const myElectricCar = new ElectricCar("tesla", "model s", 2023);
  console.log(myElectricCar.displayDetails());
  
  const myGasCar = new GasCar("toyota", "corolla", 2022);
  console.log(myGasCar.displayDetails());


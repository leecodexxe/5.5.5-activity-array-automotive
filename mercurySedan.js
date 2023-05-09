//this includes the vehicle class as a module
import { Vehicle } from "./vehicleBaseClass";

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mercury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

//After you write the derived Car class, you should test it out.
class NeweVhicle extends Vehicle {
  constructor(make, model, year, color, mileage) {
    this.maxpass = 5;
    this.passengers = 0;
    this.numOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
    super(make, model, year, color, mileage);
  }
  carstart() {
    if (this.fuel > 0) {
      return (this.started = true);
      console.log("engine started...!!!");
    }
  }
  carSchedule() {
    if (this.mileage > 30000) {
      this.maintenace = true;
    }
  }
  loadPassenger(num) {
    if (this.passengers <= this.maxpass) {
      this.passengers = num;
      return this.passengers;
    } else {
      console.log("is full!!!!!");
    }
  }
}
//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:

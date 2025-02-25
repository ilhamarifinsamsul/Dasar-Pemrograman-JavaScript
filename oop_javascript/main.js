// // ES6 Class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// const person1 = new Person("Alice", "20");

// console.log(person1.name);
// person1.eat();

// Constructor function
// function Cat(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Cat.prototype.eat = function () {
//   console.log(`${this.name} is eating`);
// };

// Cat.prototype.years = function () {
//   console.log(`${this.name} 2 years old`);
// };

// const cat1 = new Cat("Boboy", 2);
// const cat2 = new Cat("Cimit", 3);
// console.log(cat1.name, cat1.age, "years old");
// cat1.eat();

// OOP Inheritance / Peawarisan
// class SuperClass {}
// class SubClass extends SuperClass {}

// Inheritance ES6 Class
// class SmartPhones {
//   constructor(color, brand, model) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//   }

//   charging() {
//     console.log(`Charging ${this.model}`);
//   }
// }

// class iOS extends SmartPhones {
//   airDrop() {
//     console.log("IOS have a behavior AirDrop");
//   }
// }

// class Android extends SmartPhones {
//   spiltScreen() {
//     console.log("Android have a Spilt Screen");
//   }
// }

// const ios = new iOS("gray", "Apple", "13 Pro Max");
// const android = new Android("blue", "Xiaomi", "Xiaomi 14 Pro");

// ios.charging();
// ios.airDrop();

// console.log(ios instanceof SmartPhones);
// console.log(android instanceof SmartPhones);

// android.charging();
// android.spiltScreen();

// Inheritance Constructor function
// function SmartPhones(color, brand, model) {
//   this.color = color;
//   this.brand = brand;
//   this.model = model;
// }

// SmartPhones.prototype.charging = function () {
//   console.log(`Charging ${this.model}`);
// };

// function iOS(color, brand, model) {
//   SmartPhones.call(this, color, brand, model);
// }

// iOS.prototype = Object.create(SmartPhones.prototype);
// iOS.prototype.constructor = iOS;

// iOS.prototype.airDrop = function () {
//   console.log("iOS have a behavior AirDrop");
// };

// function Android(color, brand, model) {
//   SmartPhones.call(this, color, brand, model);
// }

// Android.prototype = Object.create(SmartPhones.prototype);
// Android.prototype.constructor = Android;

// Android.prototype.splitScreen = function () {
//   console.log("Android have a split screen");
// };

// const ios = new iOS("black", "Apple", "12 Pro Max");
// const android = new Android("Gray", "Samsung", "Galaxy S25");

// ios.charging();
// ios.airDrop();

// console.log(ios instanceof SmartPhones);
// console.log(android instanceof SmartPhones);
// android.charging();
// android.splitScreen();

// OOP Encapsulation
// class CoffeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this.temperature = 90;
//   }

//   makeCoffe() {
//     console.log("Membuat kopi dengan suhu", this.temperature, "derajat");
//   }
// }

// const coffee = new CoffeMachine(100);
// coffee.temperature = 90;
// coffee.makeCoffe();

// getter dan setter.
// class CoffeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this._temperature = 90; // menandakan bahwa nilai temperature tidak dapat diubah
//   }

//   set temperature(temperature) {
//     console.log("You are not allowed to change the temperatures");
//   }
//   get temperature() {
//     return this._temperature;
//   }
// }

// const coffee = new CoffeMachine(10);
// console.log("Sebelum diubah", coffee.temperature);
// coffee.temperature = 100;
// console.log("Setelah diubah", coffee.temperature);

// class CoffeMachine {
//   #temperature = 90;
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this.#temperature = this.#defaultTemperature();
//   }
//   set temperature(temperature) {
//     console.log("you are not allowed to change the temperature");
//   }
//   get temperature() {
//     return this.#temperature;
//   }

//   #defaultTemperature() {
//     return 90;
//   }
// }

// OOP Polymorphism
// Overriding
// Overriding Constructor
// const android = new Android() // constructor di class Android akan dipanggil.

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charging() {
    // memanggil method charging dari SuperClass (SmartPhones)
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("Gray", "Xiaomi", "Redmi Note 13", "Smart Tv");
console.log(android);
android.charging();

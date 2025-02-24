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

// Inheritance / Peawarisan
// class SuperClass {}
// class SubClass extends SuperClass {}

// ES6 Class
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

class iOS extends SmartPhones {
  airDrop() {
    console.log("IOS have a behavior AirDrop");
  }
}

class Android extends SmartPhones {
  spiltScreen() {
    console.log("Android have a Spilt Screen");
  }
}

const ios = new iOS("gray", "Apple", "13 Pro Max");
const android = new Android("blue", "Xiaomi", "Xiaomi 14 Pro");

ios.charging();
ios.airDrop();

console.log(ios instanceof SmartPhones);
console.log(android instanceof SmartPhones);

// android.charging();
// android.spiltScreen();

// Constructor function
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

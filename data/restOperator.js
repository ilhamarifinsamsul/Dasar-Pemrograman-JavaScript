// function myFunc(...manyMoreArgs) {
//   console.log("manyMoreArgs", manyMoreArgs);
// }
// myFunc("one", "two", "three");

// function myFunc(number, ...manyMoreArgs) {
//   console.log("number", number);
//   console.log("manyMoreArgs", manyMoreArgs);
// }
// myFunc("one", "two", "three");

// Method length
// function myFunc(...manyMoreArgs) {
//   console.log(manyMoreArgs.length);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFunc("one", "two", "three");

// const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];

// const [first, second, ...rest] = favorites;

// console.log(first);
// console.log(second);
// console.log(rest);

const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };
  employees.push(newEmployee);
}

addEmployee("Ilham", "ilham@gmail.com", 2021);
addEmployee("Anisa", "anisa@gmail.com", 2021);
console.log(employees);

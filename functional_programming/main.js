// const names = ["Harry", "Ron", "Jeff", "Thomas"];

// const newNamesWithExcMark = [];

// for (let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }
// console.log(newNamesWithExcMark);

// Menggunakan gaya deklaratif
// const names = ["Harry", "Ron", "Jeff", "Thomas"];

// const newNamesWithExcMark = names.map((name) => `${name}`);

// console.log(newNamesWithExcMark);

// Pure Function
// function addWith(value, addingValue) {
//   return value + addingValue;
// }
// const result1 = addWith(0, 1);
// console.log(`result1 is ${result1}`);

// const result2 = addWith(result1, 1);
// console.log(`result2 is ${result2}`);

// const result3 = addWith(result2, 1);
// console.log(`result3 is ${result3}`);

// console.log(result1, result2, result3);

// High-Order Function
// function apply(operation, ...args) {
//   // kita bisa menambahkan kode lain sebelum operation dijalankan.
//   return operation(...args);
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// function discount(disc, value) {
//   return value - (disc / 100) * value;
// }

// const productPrice = apply(sum, 100, 100, 200);
// const withDiscount = apply(discount, 15, productPrice);

// console.log("Product price:", productPrice);
// console.log("With discoun 15%:", withDiscount);

// implementasi memoization pure function
// menerima argumen sebuah fungsi
// function memoize(fn) {
//   const cache = new Map();
//   // mengebalikan nilai berupa fungsi
//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     const result = fn(...args);
//     cache.set(key, result);

//     return result;
//   };
// }

// function sumArray(arr) {
//   if (arr.length === 0) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }
// const memoizedSumArray = memoize(sumArray);
// const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

// console.time("Memoized Sum First Call");
// console.log("Total:", memoizedSumArray(largeArray));
// console.timeEnd("Memoized Sum First Call");

// console.time("Memoized Sum Second Call (Cached)");
// console.log("Total:", memoizedSumArray(largeArray));
// console.timeEnd("Memoized Sum Second Call (Cached)");

// teknik currying pada fungsi adjectivfy dan multipleBy
// function adjectivfy(adjective) {
//   return function (noun) {
//     return `${noun} ${adjective}`;
//   };
// }

// function multipleBy(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// const coolfier = adjectivfy("keren");
// const funnifier = adjectivfy("seru");

// const multipleByFive = multipleBy(5);
// console.log(coolfier("Dicoding"));
// console.log(funnifier("Javascript"));
// console.log(multipleByFive(7));
// console.log(multipleByFive(10));

// const number = [3, 4, 5, 6];
// const doubled = number.map((num) => num * 2);
// console.log(doubled);

// (Recursive) Function

// function generateArray(n) {
//   const result = [];
//   for (let counter = 0; counter <= n; counter += 1) {
//     result.push(counter);
//   }
//   return result;
// }
// console.log(generateArray(10));

// // Solusi menggunakan recursive
// function generateArray(n) {
//   if (n < 0) {
//     return [];
//   }

//   return [...generateArray(n - 1), n];
// }

// console.log(generateArray(6));

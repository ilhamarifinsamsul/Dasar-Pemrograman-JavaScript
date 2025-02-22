// Expression & Statement

// const age = 10;
// const name = "Dicoding";

// console.log(`Aku ${name}, umurku ${age} tahun`);

// Variable

// const id = 123;
// let username = "Dicoding";
// // const username = "Dicoding";

// // console.log(id); // output 123
// console.log("Sebelum diubah:", username); // output Dicoding

// username = "dicodingacademy";

// console.log("setelah diubah:", username);

// function printCompanyInfo() {
//   const name = "Dicoding";
//   const legal = "LLC";

//   console.log("Company name:", name);
//   console.log("Legal type:", legal);
// }

// function printEmployeInfo() {
//   const name = "Ilham";
//   const division = "IT";

//   console.log("Employe name:", name);
//   console.log("Division:", division);
// }
// // Panggil fungsi
// printCompanyInfo();
// printEmployeInfo();

// Tipe Data
// String
// const currentYear = new Date().getFullYear();
// const text = `Sekarang adalah tahun ${currentYear}`;

// console.log(text);

// Number
// 40
// 3.14
// 5
// 3.333
// const result = 50 / 0;
// console.log(result);

// const result = Number("Dicoding");
// console.log(result);

// Boolean
// const completed = true;
// const passed = false;

// console.log(completed, passed);
// // Nilai boolean juga biasa diperoleh dari hasil penggunaan operator perbandingan.
// const isGreater = 5 < 2;
// console.log(isGreater);

// // Nilai Kosong
// let message = null;
// let message;
// console.log(message);
// Perbdaan null dan undifined
// const name1 = { first: "Dicoding", last: null };
// const name2 = { first: "Dicoding", last: undefined };

// console.log(JSON.stringify(name1));
// console.log(JSON.stringify(name2));

// Mengubah Nilai Antar Tipe Data
// Mengubah ke String
// const number = 12345;
// const boolean = true;

// const strNumber = String(number);
// const strBoolean = boolean.toString();
// console.log(strNumber);
// console.log(strBoolean);

// Mengubah ke number
// const strNumber = "12345";
// const strFloat = "3.15";
// const boolean = true;

// const numFromString = Number(strNumber);
// const floatFromStirng = Number(strFloat);
// const numFromBoolean = Number(boolean);

// console.log(numFromString);
// console.log(floatFromStirng);
// console.log(numFromBoolean);

// const cm = "20cm";
// const px = "64px";

// const inFromCM = parseInt(cm); // mengonversi string menjadi bilangan bulat (integer)
// const inFromPX = parseInt(px);

// console.log(inFromCM);
// console.log(inFromPX);

// const cm = "20.55cm";
// const px = "64.90px";

// const inFromCM = parseFloat(cm); // mengonversi string menjadi angka desimal (floating-point number)
// const inFromPX = parseFloat(px);

// console.log(inFromCM);
// console.log(inFromPX);

// Mengubah ke boolean
const number = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromNull);

// Konversi Implisit
const age = 20;
const message = "Umurku: " + age;

console.log(message);

const strNumber = "123";
const result = strNumber * 2;

console.log(result);

const bool = true;
const res = 1 + bool;

console.log(res);

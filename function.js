// Ubah suhu celcius ke fahrenheit
// const temperatureCelcius = 90;
// const temperatureFahrenheit = (9 / 5) * temperatureCelcius + 32;

// console.log(temperatureFahrenheit);

// let temperatureCelcius;
// let temperatureFahrenheit;

// temperatureCelcius = 50;
// temperatureFahrenheit = (9 / 5) * temperatureCelcius + 32;
// console.log("Hasil konversi:", temperatureFahrenheit);

// temperatureCelcius = 70;
// temperatureFahrenheit = (9 / 5) * temperatureCelcius + 32;
// console.log("Hasil konversi:", temperatureFahrenheit);

// temperatureCelcius = 100;
// temperatureFahrenheit = (9 / 5) * temperatureCelcius + 32;
// console.log("Hasil konversi:", temperatureFahrenheit);

// DEKLARASI FUNCTION & PEMANGGILAN FUNCTION

// function convertCelsiusToFahrenheit(temperature) {
//   const temperatureInFahrenheit = (9 / 5) * temperature + 32;

//   console.log("Hasil konversi:", temperatureInFahrenheit);
// }

// const temperatureInCelcius = 90;
// // Hanya menampilkan nilai function
// console.log(convertCelsiusToFahrenheit);
// // Akan menjalankan isi function
// convertCelsiusToFahrenheit(temperatureInCelcius);

// Parameter dan Argument
// function convertCelciusToFahrenheit(temperature) {
//   const temperatureInFahrenheit = (9 / 5) * temperature + 32;
//   console.log("Hasil Konvrsi", temperatureInFahrenheit);
// }
// const temperatureInCelcius = 90;
// convertCelciusToFahrenheit(temperatureInCelcius);

// Defult Parameter
// function convertCelciusToFahrenheit(temperature) {
//   const temperatureInFahrenheit = (9 / 5) * temperature + 32;
//   console.log("Hasil Konversi:", temperatureInFahrenheit);
// }
// convertCelciusToFahrenheit();

// Conditional statement
// function convertCelciusToFahrenheit(temperature) {
//   if (temperature !== undefined) {
//     const temperatureInFahrenheit = (9 / 5) * temperature + 32;

//     console.log("hasil konversi:", temperatureInFahrenheit);
//   }
// }
// convertCelciusToFahrenheit();

// function convertCelciusToFahrenheit(temperature = 90) {
//   const temperatureInFahrenheit = (9 / 5) * temperature + 32;
//   console.log("Hasil konfersi:", temperatureInFahrenheit);
// }
// convertCelciusToFahrenheit();

// Return Value
// function sumNumbers(a, b) {
//   const result = a + b;
//   return result;
// }
// const result = sumNumbers(9, 8);
// console.log("9 + 8:", result);

// function generateGreetingWorldIdMessage() {
//   return "Hallo World!";
//   console.log("Aku tidak akan tampil");
// }
// const message = generateGreetingWorldIdMessage();
// console.log(message);

// function convertCelciusToFahrenheit(temperature) {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// }
// const temperatureInFahrenheit = convertCelciusToFahrenheit(90);
// console.log("Hasil Konversi:", temperatureInFahrenheit);

// Function Expression
// const convertCelciusToFahrenheit = function (temperature) {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// };
// const temperatureInFahrenheit = convertCelciusToFahrenheit(90);
// console.log("Hasil Konversi:", temperatureInFahrenheit);

// Menjadi First-Class Citizen
// function multiply(a, b) {
//   return a * b;
// }

// function calculate(operation, numA, numB) {
//   return operation(numA, numB);
// }
// const result = calculate(multiply, 3, 4);
// console.log(result);

// function multipier(x) {
//   return function (num) {
//     return x * num;
//   };
// }

// const double = multipier(2);
// const triple = multipier(3);
// console.log(double(10));
// console.log(triple(11));

// Arrow Function
// Deklarasi
// let temperatureInFahrenheit = null;
// deklarasi function dengan regular function
// const convertCelciusToFahrenheitUsingRegulationFunction = function (
//   temperature
// ) {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// };
// temperatureInFahrenheit = convertCelciusToFahrenheitUsingRegulationFunction(90);
// console.log("Hasil Konversi:", temperatureInFahrenheit);

// deklarasi function dengan arrow function
// const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// };
// temperatureInFahrenheit = convertCelciusToFahrenheitUsingArrowFunction(90);
// console.log("Hasil Konversi:", temperatureInFahrenheit);

// Refactor Arrow Function
// let temperatureInFahrenheit;
// Arrow function
// const convertCelciusToFahrenheit = (temperatue) => {
//   const result = (9 / 5) * temperature + 32;
//   return result;
// };
// temperatureInFahrenheit = convertCelciusToFahrenheit(90);
// console.log("Hasil Konversi:", temperatureInFahrenheit);

// Arrow function versi ringkas
// const convertCelciusToFahrenheit = (temperature) => (9 / 5) * temperature + 32;

// temperatureInFahrenheit = convertCelciusToFahrenheit(90);
// console.log("Hasil Konversi:", temperatureInFahrenheit);

// function hello(name, origin = "Bandung") {
//   return `Halo! Nama saya ${name}. Saya tinggal di ${origin}`;
// }
// const result = hello("Ilham", "Subang");
// console.log(result);
// const rahmat = hello("Rahmat", "Semarang");
// const indra = hello("Indra");
// console.log(rahmat);
// console.log(indra);

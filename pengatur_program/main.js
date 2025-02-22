// Flow Control
// const number = 100;
// console.log(number);

// IF Statement
// const gajian = false;
// console.log("Berjalan-jalan di mal");
// if (gajian) {
//   console.log("Makan di restoran mal");
// } else {
//   console.log("Pulang ke rumah");
// }

// const score = 79;
// if (score >= 80) {
//   console.log("Selamat anda lulus ujian");
// } else {
//   console.log("Maaf anda belum lulus ujian");
// }

// const nilai = 92;
// if (nilai > 90) {
//   console.log("Selamat anda mendapatkan nilai A");
// } else if (nilai > 80) {
//   console.log("Selamat anda lulus ujian");
// } else {
//   console.log("Maaf anda belum lulus ujian");
// }

// Ternary operator
// let result = condition ? value1 : value2

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// Switch Case
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// const fruits = "Apple";

// switch (fruits) {
//   case "banana":
//     console.log("Iam a banana");
//     break;
//   case "orange":
//     console.log("iam a orange");
//     break;
//   case "salak":
//     console.log("Iam Salak");
//     break;
//   default:
//     console.log("I am not a fruit. Iam a programmer");
// }

// const day = new Date().getDay();

// if (day === 0) {
//   console.log("Minggu");
// } else if (day === 1) {
//   console.log("Senin");
// } else if (day === 2) {
//   console.log("Selasa");
// } else if (day === 3) {
//   console.log("Rabu");
// } else if (day === 4) {
//   console.log("Kamis");
// } else if (day === 5) {
//   console.log("Jumat");
// } else if (day === 6) {
//   console.log("Sabtu");
// } else {
//   console.log("Hari tidak valiid");
// }

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
}

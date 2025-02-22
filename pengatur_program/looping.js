// For
// For Loop
// for (variable awal; test kondisi; increment){

// }

// for (let i = 0; i < 5; i++) {
//   console.log(`Angka ke-${i} adalah ${i}`);
// }

// For in
// const person = { name: "Ilham", origin: "Bandung", birthYear: 1999 };
// for (const property in person) {
//   console.log(`${property} : ${person[property]}`);
// }

// For of
// const names = ["Bebek", "Ayam", "Telor", "Temep"];
// for (const item of names) {
//   console.log(item);
// }

// while
// while (condition) {

// }

// let i = 0;
// while (i < 5) {
//   console.log(`Angka ke-${i} adalah ${i}`);
//   i++;
// }

// Do While
// do {

// } while (condition);
// let index = 0;
// do {
//   console.log(`Angka ke-${index} adalah ${index}`);
//   index++;
// } while (index < 10);

// Control Statement
// Break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

const number = 1;

switch (number) {
  case 1:
    console.log("Ini 1");
    break;
  case 2:
    console.log("Ini 2");
    break;
  case 3:
    console.log("Ini 3");
    break;
  default:
    console.log("Ini default");
}

// Continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

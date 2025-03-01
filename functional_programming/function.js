// Fungsi yang Mengubah Data (Mutator Function)
Array.push; //menambahkan elemen di akhir dari sebuah array
Array.pop; //menghapus elemen terakhir dari sebuah array
Array.shift; //menghapus elemen pertama dari sebuah array
Array.unshift; //menambahkan elemen di awal dari sebuah array
Array.splice; //menambahkan atau menghapus elemen di posisi tertentu dari sebuah array
Array.reverse; // membalikkan urutan elemen dari sebuah array
Array.sort; //mengurutkan elemen dari sebuah array
Object.assign; //memodifikasi properti dari object

// contoh sort
// function max(arrayOfNumbers) {
//   return arrayOfNumbers.sort((a, b) => a - b).pop();
// }

// const numbers = [10, 23, 24, 7, 8, 45];
// const largest = max(numbers);
// console.log(largest);
// console.log(numbers);

// // contoh Object.assign
// function registerEmail(person, email) {
//   return Object.assign(person, { email });
// }

// const person = {
//   name: "Jhon",
//   username: "jhondoe",
// };
// const personWithEmail = registerEmail(person, "john@dicoding.com");
// console.log(person);
// console.log(personWithEmail);

// Array Map
// Fungsi Array.map() adalah bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
// const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => `${name}`);
// console.log(newArray);

// Array Filter
// Fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada
// const truthArray = [1, "", 0, "Hallo", null, "Harry", 14].filter((item) =>
//   Boolean(item)
// );
// console.log(truthArray);

// // Contoh Lain Filter
// const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];

// const nilai = students.filter((student) => student.score > 70);
// console.log(nilai);

// Array Reduce
// Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.

// const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];

// const totalScore = students.reduce((acc, student) => acc + student.score, 0);

// console.log(totalScore);

// Immutable Object
// JavaScript menyediakan fungsi Object.freeze untuk membekukan objek sehingga tidak dapat diubah setelah dibuat.

function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city);

// const user = {
//   name: "Dicoding",
//   "last name": "Indonesia",
//   age: 9,
// };
// console.log(user["last name"]);

// Mengakses menggunakan object destructuring
// const user = {
//   name: "Dicoding",
//   lastName: "Indonesia",
//   age: 9,
// };
// const { name, lastName } = user;
// console.log(name, lastName);

// const user = {
//   name: "Dicoding",
//   lastName: "Indonesia",
//   age: 9,
// };
// const { name, lastName, isMale = false } = user;
// console.log(isMale);

// const user = {
//   id: 24,
//   email: "ilham@gmail.com",
//   name: "Ilham",
//   nickname: "Hamzz",
//   username: "ilham24",
//   password: "secret",
// };
// const { id, email } = user;
// console.log(id, email);

// Tanpa menggunakan object destructuring, Anda akan melakukan hal berikut ini
// const user = {
//   id: 24,
//   email: "aras@dicoding.com",
//   name: "Arsy",
//   nickname: "Aras",
//   username: "aras123",
//   password: "secret",
// };

// const nickname = user.nickname;
// const email = user.email;

// console.log(nickname, email);

// Mengubah Nilai di Properti Object
const account = {
  balance: 1000,
  debt: 10,
};
account.balance = 2000;
console.log(account.balance);

// Menghapus Properti di Object
const user = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};
delete user.name;
delete user["age"];
console.log(user);

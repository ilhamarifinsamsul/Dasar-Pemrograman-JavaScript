// Throwing Error
// const error = new Error("Terjadi error");
// console.error(error);

// const price = 100;
// const paid = 50;

// if (paid < price) {
//   throw new Error("Pembayaran Kurang");
// }

// Catching Error
// try {
//   console.log("Memulai program");
//   console.log("Mengakhiri program");
// } catch (err) {
//   console.log("Karena tidak ada error, blok ini akan diabaikan");
// }

// try {
//   console.log("Memulai program");
//   throw new Error("Error: Program berhenti");
//   console.log("Mengakhiri program");
// } catch (err) {
//   console.log("Karena ada error, blok ini akan dieksekusi");
// }

// Finally
// try {
//   console.log("Ini try block");
// } catch (err) {
//   console.log("Ini catch block");
// } finally {
//   console.log("Ini finally block");
// }

try {
  console.log("Ini try block");
  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}

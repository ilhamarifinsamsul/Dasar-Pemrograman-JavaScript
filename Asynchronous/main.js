// const estimationTime = 1_000;

// setTimeout(() => {
//   console.log("Hello world");
// }, estimationTime);

// import { makeCoffee } from "./coffee.js";
// console.log("Saya memesan kopi di kafe");
// makeCoffee();

// console.log("Pramusaji memberikan kopi pesanan");
// console.log("Saya mendapatkan kopi dan menghabiskannya");

// Penanganan dengan Callback
// import { makeCoffee, sendCoffee } from "./coffee.js";
// console.log("Saya memesan kopi di kafe");
// makeCoffee(() => {
//   sendCoffee(() => {
//     console.log("Pramusaji memberikan kopi pesanan");
//     console.log("Saya mendapatkan kopi dan menghabiskannya");
//   });
// });

// Penanganan Error dengan Callback
// import { makeCoffee, sendCoffee } from "./coffee.js";

// const order = "Kopi Espresso";

// console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
//   if (makeCoffeeError) {
//     // Do something with error
//     console.error(makeCoffeeError);
//     return;
//   }

//   sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
//     if (sendCoffeeError) {
//       // Do something with error
//       console.error(sendCoffeeError);
//       return;
//     }

//     console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
//     console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
//   });
// });

// Chaining
import { makeCoffee, sendCoffee } from "./coffee.js";

const order = "Kopi espresso";

console.log(`Saya memesan ${order} di kafe`);
makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  );

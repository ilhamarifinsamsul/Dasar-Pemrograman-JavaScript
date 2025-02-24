const { restaurantStock, isMachineActive, isMachineWell } = require("./states");

function serveToCustomer(requestStock, stock, isMachineAReady = false) {
  if (!isMachineAReady) {
    console.log("The machine is not ready yet. Please check before order");
    return;
  }
  if (!(typeof stock === "object")) {
    throw new Error("Stock parameter should be an object");
  }

  if (stock[requestStock] === null) {
    console.log("The requested order does not available");
  } else if (stock[requestStock] === 0) {
    console.log("Sorry, your order cannot be fullfilled because of out stock");
    return;
  }

  console.log("Please wait to serve your request");
  stock["requestStock"] -= 1;
}

serveToCustomer("mieAyam", restaurantStock, isMachineActive && isMachineWell);
serveToCustomer("bakso", restaurantStock, isMachineActive && isMachineWell);

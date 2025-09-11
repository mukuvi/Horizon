// setTimeout(() => {
//   console.log("My name is James Mukuvi Ngandu");
// }, 2000);

// setInterval(() => {
//   console.log("call me James Mukuvi Ngandu");
// }, 2000);

let stocks = {
  fruits: ["mango", "banana", "pineapple", "orange"],
  toppings: ["chocolates", "peanuts"],
  drinks: ["water", "milk"],
};
let isopen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isopen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Our shop is closed");
    }
  });
};
order(2000, () => console.log(`${stocks.fruits[0]} was selected`)).catch(
  (err) => console.log(err)
);

let isProductCheap = false;

let product = (time, price) => {
  return new Promise((res, rej) => {
    if (isProductCheap) {
      setTimeout(() => {
        res(price);
      }, time);
    } else {
      rej("The product is expensive");
    }
  });
};
product(2000, () => console.log("The product is cheap")).catch((error) =>
  console.log(error)
);

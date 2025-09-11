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
let isopen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isopen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};
order(2000, () => console.log(`${stocks.fruits[0]}`));

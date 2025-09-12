// setTimeout(() => {
//   console.log("My name is James Mukuvi Ngandu");
// }, 2000);

// setInterval(() => {
//   console.log("call me James Mukuvi Ngandu");
// }, 2000);

// let stocks = {
//   fruits: ["mango", "banana", "pineapple", "orange"],
//   toppings: ["chocolates", "peanuts"],
//   drinks: ["water", "milk"],
// };
// let isopen = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isopen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject("Our shop is closed");
//     }
//   });
// };
// order(2000, () => console.log(`${stocks.fruits[0]} was selected`)).catch(
//   (err) => console.log(err)
// );

// let grade = 3;
// async function product() {
//   try {
//     if (grade > 70) {
//       console.log("Proceed to the next class");
//     }
//   } catch (error) {
//     console.log("you cant proceed to the next class", error);
//   } finally {
//     console.log("Grading done!");
//   }
// }
// product();

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
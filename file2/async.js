// setTimeout(() => {
//   console.log("My name is James Mukuvi Ngandu");
// }, 2000);

// setInterval(() => {
//   console.log("call me James Mukuvi Ngandu");
// }, 2000);

let isopen = false;

// let open = () => {
//   isopen
//     ? console.log("switch on the lights")
//     : console.log("switch off the lights");
// };
// open();
let open = (time, work) => {
  return new Promise((resolve, reject) => {
    isopen ? resolve(work()) : reject(console.log("our shop is closed"));
  });
};

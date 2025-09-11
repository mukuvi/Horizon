// setTimeout(() => {
//   console.log("My name is James Mukuvi Ngandu");
// }, 2000);

// setInterval(() => {
//   console.log("call me James Mukuvi Ngandu");
// }, 2000);

let isopen = true;

// let open = () => {
//   isopen
//     ? console.log("switch on the lights")
//     : console.log("switch off the lights");
// };
// open();
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
order();

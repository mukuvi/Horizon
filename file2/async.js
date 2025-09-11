// setTimeout(() => {
//   console.log("My name is James Mukuvi Ngandu");
// }, 2000);

// setInterval(() => {
//   console.log("call me James Mukuvi Ngandu");
// }, 2000);

function ins1() {
  console.log("instruction one is being executed");

  ins2();
}
function ins2() {
  console.log("instruction two is being executed");
}
function ins3() {
  console.log("instruction three is being executed");
}
ins3();
ins1();

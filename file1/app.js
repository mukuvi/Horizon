let cars = ["benz", "audi", "porsche"];

function carsData() {
  let randomCar = Math.floor(Math.random() * 3);
  return cars[randomCar];
}
// console.log(carsData());

function logCars(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// logCars(cars);

let inputVal = document.querySelector("#h-val");
let btnVal = document.querySelector("#h-btn");
let storageVal = document.querySelector("#h-text");
let storangeData = [];

localStorage.setItem("name", "james mukuvi ngandu");
let isName = localStorage.getItem("name");
console.log(isName);
btnVal.addEventListener("click", () => {
  storangeData.push(inputVal.value);
  storageVal.textContent = storangeData.join(", ");
  inputVal.value = "";
});

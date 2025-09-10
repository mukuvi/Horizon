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
logCars(cars);

let cars = ["benz", "audi", "porsche"];

function carsData() {
  let randomCar = Math.floor(Math.random() * 3);
  return cars[randomCar];
}
console.log(carsData());

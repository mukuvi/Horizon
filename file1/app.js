const hValue = document.getElementById("h-val");
let hText = document.getElementById("h-text");
const hBtn = document.getElementById("h-btn");

let count = 0;
let firstName = "james mukuvi";
let lastName = "Ngandu";
let fullName = firstName + " " + lastName;

hText.innerText = fullName;

hBtn.addEventListener("click", () => {
  count++;
  hValue.innerText = Math.floor(Math.random() * 9);
});

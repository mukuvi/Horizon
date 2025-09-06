const hValue = document.getElementById("h-val");
let hText = document.getElementById("h-text");
const hBtn = document.getElementById("h-btn");

let count = 0;
if (count <= 0) {
  hText.innerText = "count is less than 0";
} else if ((count = 5)) {
  hText.innerText = "count is 0";
} else {
  hText.innerText = "count is greater than 0";
}
hBtn.addEventListener("click", () => {
  count++;
  hValue.innerText = Math.floor(Math.random() * 9);
});

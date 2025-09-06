const hValue = document.getElementById("h-val");
const hBtn = document.getElementById("h-btn");
let count = 0;

hBtn.addEventListener("click", () => {
  hValue.textContent = count++;
});

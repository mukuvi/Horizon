let inputVal = document.querySelector("#h-val");
let btnVal = document.querySelector("#h-btn");
let storageVal = document.querySelector("#h-text");
let storangeData = [];

btnVal.addEventListener("click", () => {
  storangeData.push(inputVal.value);
  storageVal.textContent = storangeData;
  inputVal.value = "";
  // localStorage.setItem("storangeData", JSON.stringify(storangeData));
  // localStorage.getItem("storangeData");
});
